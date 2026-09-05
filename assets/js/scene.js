/* HPZ Aquaroom - Underwater 2D scene v4 (sprite-based, Kenney CC0 assets)
   Cá uốn mình khi bơi + parallax lặn theo scroll (fish/bọt/bụi trôi theo tầng)
   + mặt sóng thật ở mép trên + sparkles lấp lánh + khối sương nước trôi
   + click nổ bọt & flash sáng + god rays tắt dần khi lặn sâu. */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.getElementById('aquarium-bg');
  if (!container) return;

  const cv = document.createElement('canvas');
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  container.appendChild(cv);
  const ctx = cv.getContext('2d');
  const BASE = 'assets/img/scene/';

  const isMobile = (window.innerWidth < 760) || /Mobi|Android/i.test(navigator.userAgent);
  const PERF = isMobile
    ? { fish: 10, flock: 0, dust: 50, bubbles: 24, caustics: false, big: false, rays: 6, spark: 6, fog: 2 }
    : { fish: 16, flock: 3, dust: 110, bubbles: 44, caustics: true, big: true, rays: 9, spark: 12, fog: 4 };

  const FISH_SPRITES = ['fish_blue', 'fish_brown', 'fish_green', 'fish_grey', 'fish_grey_long_a', 'fish_grey_long_b', 'fish_orange', 'fish_pink', 'fish_red'];
  const SMALL_FISH = ['fish_grey', 'fish_green', 'fish_blue'];
  const BUBBLE_SPRITES = ['bubble_a', 'bubble_b', 'bubble_c'];

  const imgs = {};
  function load(name) {
    const i = new Image();
    i.src = BASE + name + '.png';
    imgs[name] = i;
  }
  FISH_SPRITES.forEach(load);
  BUBBLE_SPRITES.forEach(load);
  if (PERF.flock) SMALL_FISH.forEach(load);
  if (PERF.big) load('turtle2');

  let W = 0, H = 0, dpr = 1;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  // ---- Scroll: cả chuẩn hoá (gradient) lẫn thô (parallax) ----
  let scrollTarget = 0, scrollP = 0, scrollPx = 0;
  function onScroll() {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollPx = window.scrollY;
    scrollTarget = Math.min(1, scrollPx / max);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  let mx = -9999, my = -9999, mActive = false;
  window.addEventListener('pointermove', function (e) {
    mx = e.clientX; my = e.clientY; mActive = true;
  }, { passive: true });
  window.addEventListener('pointerleave', function () { mActive = false; });

  // ---- Click: ripple + nổ bọt + flash ----
  const ripples = [];
  const burst = [];      // bọt li ti từ click
  let flash = null;      // flash sáng điểm click
  window.addEventListener('pointerdown', function (e) {
    ripples.push({ x: e.clientX, y: e.clientY, r: 3, a: 0.45 });
    if (ripples.length > 6) ripples.shift();
    flash = { x: e.clientX, y: e.clientY, a: 0.32 };
    const n = PERF.big ? 9 : 5;
    for (let i = 0; i < n; i++) {
      burst.push({
        x: e.clientX + rand(-6, 6), y: e.clientY + rand(-4, 4),
        vy: rand(26, 80), vx: rand(-16, 16),
        r: rand(1.2, 3.2), a: rand(0.4, 0.8)
      });
    }
    if (burst.length > 60) burst.splice(0, burst.length - 60);
  }, { passive: true });

  // ---- Cá thường ----
  function makeFishProps(depth) {
    const name = pick(FISH_SPRITES);
    const dir = Math.random() < 0.5 ? 1 : -1;
    const scale = (0.5 + depth * 1.6) * (30 / 64);
    const y = rand(H * 0.08, H * 0.85);
    return {
      name: name, dir: dir, scale: scale, depth: depth,
      speed: (20 + depth * 65) * (0.8 + Math.random() * 0.5),
      phase: Math.random() * Math.PI * 2,
      bob: rand(0.5, 1.2),
      slow: rand(0.04, 0.12),          // tần số trôi dọc rất chậm
      tail: rand(4.5, 7.5),            // tần số vẫy đuôi
      baseY: y, y: y
    };
  }
  const fishes = [];
  for (let i = 0; i < PERF.fish; i++) fishes.push(makeFishProps(rand(0.25, 1)));

  // ---- Bầy cá nhỏ ----
  const flock = [];
  for (let g = 0; g < PERF.flock; g++) {
    const count = Math.floor(rand(9, 14));
    const name = SMALL_FISH[g % SMALL_FISH.length];
    const sc = rand(0.5, 0.62);
    for (let j = 0; j < count; j++) {
      flock.push({
        g: g, name: name, sc: sc + rand(-0.05, 0.05),
        x: rand(0, W), y: rand(H * 0.2, H * 0.6),
        vx: rand(10, 40), vy: rand(-6, 6),
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  // ---- Sinh vật lớn ----
  let big = null;
  let bigTimer = rand(8, 20);
  function spawnBig() {
    const dir = Math.random() < 0.5 ? 1 : -1;
    big = {
      dir: dir,
      x: dir > 0 ? -240 : W + 240,
      y: rand(H * 0.16, H * 0.42),
      speed: rand(14, 22),
      bob: rand(0.25, 0.5),
      phase: Math.random() * Math.PI * 2
    };
  }

  // ---- Bụi phù sa ----
  const dust = [];
  for (let i = 0; i < PERF.dust; i++) {
    dust.push({
      x: Math.random(), y: Math.random(),
      r: rand(0.7, 2.0),
      spd: rand(2, 9),
      drift: rand(-4, 4),
      phase: Math.random() * 6.283,
      a: rand(0.06, 0.3)
    });
  }

  // ---- Bong bóng ----
  const bubbles = [];
  for (let i = 0; i < PERF.bubbles; i++) {
    bubbles.push({
      name: pick(BUBBLE_SPRITES),
      x: rand(0, W), y: rand(0, H),
      spd: rand(15, 55), s: rand(0.26, 0.7), sx: rand(-8, 8)
    });
  }

  // ---- God rays ----
  const rays = [];
  for (let i = 0; i < PERF.rays; i++) {
    rays.push({
      x: Math.random(), w: rand(50, 160),
      slant: rand(-0.35, 0.35),
      len: i < 3 ? rand(1.0, 1.3) : rand(0.55, 0.9),   // vài tia dài xuống 1/3-1/2 dưới
      speed: rand(0.05, 0.18), phase: Math.random() * Math.PI * 2,
      amp: rand(30, 90), peak: rand(0.13, 0.26),
      wf: rand(0.3, 0.8), wp: Math.random() * 6.283   // thở bề rộng
    });
  }

  // ---- Sparkles: ánh sáng lấp lánh gần mặt nước ----
  const sparks = [];
  for (let i = 0; i < PERF.spark; i++) {
    sparks.push({
      x: rand(0.02, 0.98), y: rand(0.02, 0.3),
      r: rand(1.2, 2.6),
      f: rand(0.6, 1.8), phase: rand(0, 6.283),
      drift: rand(-6, 10)
    });
  }

  // ---- Khối sương nước (volume fog) ----
  const fogs = [];
  for (let i = 0; i < PERF.fog; i++) {
    fogs.push({
      x: rand(0, 1), y: rand(0.25, 0.9),
      r: rand(0.22, 0.42),              // theo min(W,H)
      a: rand(0.035, 0.06),
      vx: rand(-4, 4), vy: rand(-2, 2),
      phase: rand(0, 6.283)
    });
  }

  // ---- Caustics ----
  const causticBands = [];
  if (PERF.caustics) {
    for (let i = 0; i < 3; i++) {
      causticBands.push({
        yBase: rand(0.04, 0.26),
        spd: rand(0.06, 0.14),
        phase: Math.random() * 6.283,
        alpha: rand(0.035, 0.075),
        wl1: rand(0.012, 0.022),
        wl2: rand(0.003, 0.006)
      });
    }
  }

  function drawSprite(name, x, y, w, h, flipX, alpha) {
    const im = imgs[name];
    if (!im || !im.complete || !im.naturalWidth) return;
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    if (flipX) {
      ctx.translate(x + w, y);
      ctx.scale(-1, 1);
      ctx.drawImage(im, 0, 0, w, h);
    } else {
      ctx.drawImage(im, x, y, w, h);
    }
    ctx.restore();
  }

  // Cá uốn mình: pitch + squash nhẹ theo nhịp vẫy đuôi
  function drawFishSprite(name, cx, cy, w, h, flipX, alpha, t, tail, phase, pitch) {
    const im = imgs[name];
    if (!im || !im.complete || !im.naturalWidth) return;
    const wig = Math.sin(t * tail + phase);
    const squash = 1 + wig * 0.06;               // thân co giãn ngang nhẹ
    const rot = wig * 0.05 + (pitch || 0);       // đầu nhấp lên xuống
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.scale(flipX ? -squash : squash, 1);
    ctx.drawImage(im, -w / 2, -h / 2, w, h);
    ctx.restore();
  }

  function lerp(a, b, p) { return a + (b - a) * p; }

  let start = performance.now();
  let last = start;

  function frame(now) {
    const t = (now - start) / 1000;
    const dt = Math.min(0.05, (now - last) / 1000) || 0.016;
    last = now;

    // ---- Nền: lặn sâu ----
    scrollP += (scrollTarget - scrollP) * Math.min(1, dt * 3);
    const cTop = [lerp(16, 7, scrollP), lerp(80, 30, scrollP), lerp(126, 50, scrollP)];
    const cMid = [lerp(9, 4, scrollP), lerp(51, 18, scrollP), lerp(82, 32, scrollP)];
    const cBot = [lerp(5, 2, scrollP), lerp(29, 10, scrollP), lerp(49, 18, scrollP)];
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, 'rgb(' + Math.round(cTop[0]) + ',' + Math.round(cTop[1]) + ',' + Math.round(cTop[2]) + ')');
    g.addColorStop(0.45, 'rgb(' + Math.round(cMid[0] + 2) + ',' + Math.round(cMid[1] + 12) + ',' + Math.round(cMid[2] + 20) + ')');
    g.addColorStop(1, 'rgb(' + Math.round(cBot[0] + 1) + ',' + Math.round(cBot[1] + 8) + ',' + Math.round(cBot[2] + 14) + ')');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // ---- Khối sương nước trôi (volume) ----
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    fogs.forEach(function (f) {
      const cx = (f.x * W + Math.sin(t * 0.08 + f.phase) * f.vx * 10 + t * f.vx) % (W + 600) - 300;
      const cy = f.y * H + Math.cos(t * 0.06 + f.phase) * f.vy * 12 - scrollPx * 0.04;
      const r = f.r * Math.min(W, H) * (1 + Math.sin(t * 0.1 + f.phase) * 0.12);
      const fg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      fg.addColorStop(0, 'rgba(120,190,235,' + (f.a * (1 - scrollP * 0.5)).toFixed(3) + ')');
      fg.addColorStop(1, 'rgba(120,190,235,0)');
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    // ---- God rays: thoa mềm như nắng xuyên nước (nhiều lớp gradient, không block) ----
    const rayDim = 1 - scrollP * 0.55;
    const tilt = mActive ? ((mx / W) - 0.5) * 0.05 : 0;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    rays.forEach(function (r) {
      const env = 0.5 + 0.5 * Math.sin(t * r.speed * 1.7 + r.phase * 2);
      if (env < 0.06) return;
      const breathe = 0.75 + 0.25 * Math.sin(t * r.wf + r.wp);   // bề rộng thở
      const cx = r.x * W + Math.sin(t * r.speed + r.phase) * r.amp + tilt * r.w * 2.4;
      const yEnd = H * r.len;
      const spread = yEnd * r.slant + r.w * 2.2;
      // vẽ 3 lớp lồng nhau: hẹp sáng (lõi) -> rộng mờ (thoa) -> rất rộng rất mờ (loang)
      for (let L = 0; L < 3; L++) {
        const lw = r.w * (1 + L * 1.6) * breathe;
        const la = r.peak * env * rayDim * (L === 0 ? 1 : L === 1 ? 0.32 : 0.14);
        if (la < 0.01) continue;
        const yEnd2 = yEnd * (1 - L * 0.12);   // lớp ngoài ngắn hơn, thoa loang
        const spread2 = spread * (1 + L * 0.15);
        // gradient chéo dọc: đậm trên, tan dần xuống
        const g1 = ctx.createLinearGradient(cx, 0, cx + spread2 * 0.4, yEnd2);
        g1.addColorStop(0, 'rgba(205,242,255,' + la.toFixed(3) + ')');
        g1.addColorStop(0.45, 'rgba(160,224,255,' + (la * 0.4).toFixed(3) + ')');
        g1.addColorStop(1, 'rgba(120,200,240,0)');
        ctx.beginPath();
        ctx.moveTo(cx - lw / 2, -20);
        ctx.lineTo(cx + lw / 2, -20);
        ctx.lineTo(cx + lw / 2 + spread2, yEnd2);
        ctx.lineTo(cx - lw / 2 + spread2 * 0.5, yEnd2);
        ctx.closePath();
        ctx.fillStyle = g1;
        ctx.fill();
        // gradient ngang thoa 2 mép: giữa đậm, mép tan (làm tia mềm không block)
        const g2 = ctx.createLinearGradient(cx - lw / 2, 0, cx + lw / 2, 0);
        g2.addColorStop(0, 'rgba(255,255,255,0)');
        g2.addColorStop(0.5, 'rgba(255,255,255,' + Math.min(1, la * 1.6).toFixed(3) + ')');
        g2.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g2;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    });
    ctx.restore();

    // ---- Caustics ----
    if (PERF.caustics) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      causticBands.forEach(function (c) {
        const y0 = c.yBase * H + Math.sin(t * c.spd + c.phase) * 7;
        // nét mảnh sáng + nét rộng mờ phía dưới = cảm giác khối sáng loang
        for (let pass = 0; pass < 2; pass++) {
          ctx.beginPath();
          ctx.moveTo(0, y0 + pass * 6);
          for (let x = 0; x <= W; x += 26) {
            const y = y0 + pass * 6 + Math.sin(x * c.wl1 * 6 + t * c.spd * 5 + c.phase) * Math.sin(x * c.wl2 * 6 + t * 0.5) * 9;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = pass === 0
            ? 'rgba(190,235,255,' + c.alpha.toFixed(3) + ')'
            : 'rgba(160,215,250,' + (c.alpha * 0.55).toFixed(3) + ')';
          ctx.lineWidth = pass === 0 ? 1.8 : 6;
          ctx.stroke();
        }
      });
      ctx.restore();
    }

    // ---- Sparkles lấp lánh ----
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    sparks.forEach(function (s) {
      const tw = Math.max(0, Math.sin(t * s.f + s.phase));
      if (tw < 0.15) return;
      const sx = s.x * W + Math.sin(t * 0.2 + s.phase) * s.drift;
      const sy = s.y * H - scrollPx * 0.06;
      if (sy < -10) return;
      const a = (tw - 0.15) * 0.5 * (1 - scrollP * 0.7);
      const gr = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 4);
      gr.addColorStop(0, 'rgba(230,248,255,' + a.toFixed(3) + ')');
      gr.addColorStop(0.4, 'rgba(190,235,255,' + (a * 0.35).toFixed(3) + ')');
      gr.addColorStop(1, 'rgba(190,235,255,0)');
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(sx, sy, s.r * 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    // ---- Bụi phù sa (parallax theo scroll) ----
    ctx.save();
    dust.forEach(function (p) {
      const px = p.x * W + Math.sin(t * 0.3 + p.phase) * p.drift * 6;
      let py = (p.y * H - t * p.spd - scrollPx * 0.1) % H;
      if (py < 0) py += H;
      const tw = 0.5 + 0.5 * Math.sin(t * 0.6 + p.phase);
      const a = p.a * tw;
      if (a < 0.02) return;
      const gr = ctx.createRadialGradient(px, py, 0, px, py, p.r);
      gr.addColorStop(0, 'rgba(207,234,255,' + a.toFixed(3) + ')');
      gr.addColorStop(1, 'rgba(207,234,255,0)');
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    // ---- Bầy cá nhỏ (parallax + sprite) ----
    if (PERF.flock) {
      flock.forEach(function (b) {
        const ax = ((t * 14 + b.g * (W / 3) + Math.sin(t * 0.3 + b.g * 2.1) * W * 0.25) % (W + 240)) - 120;
        const ay = H * 0.3 + Math.sin(t * 0.47 + b.g) * H * 0.16 - scrollPx * 0.05;
        let sx = (ax - b.x), sy = (ay - b.y);
        const d = Math.hypot(sx, sy) || 1;
        sx = sx / d * 32; sy = sy / d * 32;
        for (let k = 0; k < flock.length; k++) {
          const o = flock[k];
          if (o === b) continue;
          const dx = b.x - o.x, dy = b.y - o.y, d2 = dx * dx + dy * dy;
          if (d2 < 420 && d2 > 0) {
            const dd = Math.sqrt(d2);
            sx += (dx / dd) * (26 - dd / 16);
            sy += (dy / dd) * (26 - dd / 16);
          }
        }
        b.vx += (sx - b.vx) * Math.min(1, dt * 2.4);
        b.vy += (sy - b.vy) * Math.min(1, dt * 2.4);
        const sp = Math.hypot(b.vx, b.vy) || 1;
        if (sp > 58) { b.vx = b.vx / sp * 58; b.vy = b.vy / sp * 58; }
        b.x += b.vx * dt;
        b.y += b.vy * dt + Math.sin(t * 5 + b.phase) * 6 * dt;
        if (b.y < H * 0.08) { b.y = H * 0.08; b.vy = Math.abs(b.vy); }
        if (b.y > H * 0.7) { b.y = H * 0.7; b.vy = -Math.abs(b.vy); }
      });
      flock.forEach(function (b) {
        const w = 64 * b.sc, h = 64 * b.sc * 0.72;
        drawFishSprite(b.name, b.x, b.y, w, h, b.vx < 0, 0.62, t, 7 + b.g, b.phase, 0);
      });
    }

    // ---- Cá thường: uốn mình + trôi dọc chậm + né chuột + parallax ----
    fishes.forEach(function (f) {
      const w = 64 * f.scale * 1.6, h = 64 * f.scale * 1.6;
      const par = scrollPx * (0.04 + f.depth * 0.1);   // tầng gần trôi nhanh hơn
      f.x += f.dir * f.speed * dt;
      f.y = f.baseY + Math.sin(t * f.bob + f.phase) * 18 + Math.sin(t * f.slow + f.phase * 2) * 30 - par;
      // wrap khi trôi parallax lên quá đầu trang
      if (f.y < -80) { f.baseY += H + 160; f.y = f.baseY; }
      if (f.y > H + 80) { f.baseY -= H + 160; f.y = f.baseY; }
      let pitch = 0;
      if (mActive) {
        const dx = f.x - mx, dy = f.y - my;
        const d2 = dx * dx + dy * dy;
        const R = 130;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1;
          const push = (1 - d / R) * 240 * dt;
          f.x += (dx / d) * push;
          f.y += (dy / d) * push;
          f.baseY = f.y + par - Math.sin(t * f.bob + f.phase) * 18 - Math.sin(t * f.slow + f.phase * 2) * 30;
          pitch = Math.atan2((dy / d), (dx / d) * f.dir) * 0.4 * f.dir;   // chúi đầu theo hướng tẩu thoát
        }
      }
      if (f.dir > 0 && f.x > W + 120) { Object.assign(f, makeFishProps(rand(0.25, 1))); f.x = -120; }
      if (f.dir < 0 && f.x < -120) { Object.assign(f, makeFishProps(rand(0.25, 1))); f.x = W + 120; }
      const alpha = 0.3 + f.depth * 0.55;
      drawFishSprite(f.name, f.x, f.y, w, h, f.dir < 0, alpha, t, f.tail, f.phase, pitch);
    });

    // ---- Sinh vật lớn ----
    if (PERF.big) {
      if (!big) {
        bigTimer -= dt;
        if (bigTimer <= 0) { spawnBig(); bigTimer = rand(26, 55); }
      }
      if (big) {
        const w = 150;
        const im = imgs['turtle2'];
        const h = im && im.naturalWidth ? w * im.naturalHeight / im.naturalWidth : w * 0.5;
        big.x += big.dir * big.speed * dt;
        big.y += Math.sin(t * big.bob + big.phase) * 10 * dt;
        if ((big.dir > 0 && big.x > W + 260) || (big.dir < 0 && big.x < -260)) {
          big = null;
          bigTimer = rand(26, 55);
        } else {
          drawSprite('turtle2', big.x - w / 2, big.y - h / 2, w, h, big.dir < 0, 0.32);
        }
      }
    }

    // ---- Bong bóng (tăng tốc tương đối khi lặn xuống) ----
    bubbles.forEach(function (b) {
      const w = 24 * b.s, h = 24 * b.s;
      b.y -= (b.spd + scrollP * 30) * dt;
      const bx = b.x + Math.sin(b.y * 0.05) * b.sx;
      if (b.y < -30) { b.y = H + 30; b.x = rand(0, W); }
      drawSprite(b.name, bx - w / 2, b.y - h / 2, w, h, false, 0.5);
    });

    // ---- Nổ bọt từ click ----
    for (let i = burst.length - 1; i >= 0; i--) {
      const p = burst[i];
      p.y -= p.vy * dt;
      p.x += p.vx * dt;
      p.a -= dt * 0.5;
      if (p.a <= 0 || p.y < -10) { burst.splice(i, 1); continue; }
      const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      gr.addColorStop(0, 'rgba(215,242,255,' + p.a.toFixed(3) + ')');
      gr.addColorStop(0.7, 'rgba(200,235,255,' + (p.a * 0.4).toFixed(3) + ')');
      gr.addColorStop(1, 'rgba(200,235,255,0)');
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // ---- Flash sáng tại điểm click ----
    if (flash) {
      flash.a -= dt * 1.4;
      if (flash.a <= 0) flash = null;
      else {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const fr = 90 * (1 - flash.a * 0.6);
        const fg = ctx.createRadialGradient(flash.x, flash.y, 0, flash.x, flash.y, fr);
        fg.addColorStop(0, 'rgba(220,245,255,' + (flash.a * 0.5).toFixed(3) + ')');
        fg.addColorStop(1, 'rgba(220,245,255,0)');
        ctx.fillStyle = fg;
        ctx.beginPath();
        ctx.arc(flash.x, flash.y, fr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // ---- Mặt nước phía trên: chỉ vệt sáng trôi rất nhẹ (không vẽ sóng giả) ----
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const dim = 1 - scrollP * 0.8;
    const breathe = 0.5 + 0.5 * Math.sin(t * 0.35);
    const sg = ctx.createLinearGradient(0, 0, 0, H * 0.42);
    sg.addColorStop(0, 'rgba(175,232,255,' + ((0.16 + 0.08 * breathe) * dim).toFixed(3) + ')');
    sg.addColorStop(1, 'rgba(175,232,255,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, W, H * 0.42);
    // vài vệt sáng dài trôi ngang như nắng lóe trên mặt nước
    for (let i = 0; i < 4; i++) {
      const yl = (14 + i * 12) + Math.sin(t * 0.3 + i * 1.7) * 4;
      const x0 = ((t * (12 + i * 9) + i * W / 4) % (W + 300)) - 150;
      const len = 120 + i * 40;
      const lg = ctx.createLinearGradient(x0, yl, x0 + len, yl);
      lg.addColorStop(0, 'rgba(215,245,255,0)');
      lg.addColorStop(0.5, 'rgba(215,245,255,' + ((0.06 + i * 0.015) * dim).toFixed(3) + ')');
      lg.addColorStop(1, 'rgba(215,245,255,0)');
      ctx.fillStyle = lg;
      ctx.fillRect(x0, yl, len, 2.5);
    }
    ctx.restore();

    // ---- Ripple ----
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.r += 250 * dt;
      r.a *= Math.pow(0.03, dt);
      if (r.a < 0.02 || r.r > 160) { ripples.splice(i, 1); continue; }
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'rgba(190,240,255,' + r.a.toFixed(3) + ')';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(190,240,255,' + (r.a * 0.5).toFixed(3) + ')';
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.r * 0.55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // ---- Vignette (nhẹ hơn cho dưới bớt tối) ----
    const vg = ctx.createLinearGradient(0, H * 0.7, 0, H);
    vg.addColorStop(0, 'rgba(4,23,38,0)');
    vg.addColorStop(1, 'rgba(4,21,35,0.28)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, H * 0.7, W, H * 0.3);

    requestAnimationFrame(frame);
  }

  if (reduce) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#10507e');
    g.addColorStop(1, '#051d31');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  } else {
    requestAnimationFrame(frame);
  }
})();
