/* HPZ Aquaroom - Underwater 2D scene v3 (sprite-based, Kenney CC0 assets)
   Lặn sâu theo scroll + caustics mảnh + bụi phù sa tròn mềm + cá né chuột
   + bầy cá nhỏ SPRITE THẬT bơi theo đàn + ripple click + god rays nghiêng
   theo chuột + depth fog cho cá xa. Tự giảm hiệu ứng trên mobile. */
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
    ? { fish: 10, flock: 0, dust: 55, bubbles: 24, caustics: false, big: false, rays: 6 }
    : { fish: 16, flock: 3, dust: 110, bubbles: 44, caustics: true, big: true, rays: 9 };

  const FISH_SPRITES = ['fish_blue', 'fish_brown', 'fish_green', 'fish_grey', 'fish_grey_long_a', 'fish_grey_long_b', 'fish_orange', 'fish_pink', 'fish_red'];
  const SMALL_FISH = ['fish_grey', 'fish_green', 'fish_blue'];
  const ROCK_SPRITES = ['rock_a', 'rock_b'];
  const BUBBLE_SPRITES = ['bubble_a', 'bubble_b', 'bubble_c'];

  const imgs = {};
  function load(name) {
    const i = new Image();
    i.src = BASE + name + '.png';
    imgs[name] = i;
  }
  FISH_SPRITES.forEach(load);
  ROCK_SPRITES.forEach(load);
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

  let scrollTarget = 0, scrollP = 0;
  window.addEventListener('scroll', function () {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollTarget = Math.min(1, window.scrollY / max);
  }, { passive: true });

  let mx = -9999, my = -9999, mActive = false;
  window.addEventListener('pointermove', function (e) {
    mx = e.clientX; my = e.clientY; mActive = true;
  }, { passive: true });
  window.addEventListener('pointerleave', function () { mActive = false; });

  const ripples = [];
  window.addEventListener('pointerdown', function (e) {
    ripples.push({ x: e.clientX, y: e.clientY, r: 3, a: 0.45 });
    if (ripples.length > 6) ripples.shift();
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
      baseY: y, y: y
    };
  }
  const fishes = [];
  for (let i = 0; i < PERF.fish; i++) fishes.push(makeFishProps(rand(0.25, 1)));

  // ---- Bầy cá nhỏ sprite thật ----
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

  // ---- Bụi phù sa (chấm tròn mềm, không phải ô vuông) ----
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
      slant: rand(-0.35, 0.35), len: rand(0.55, 1.0),
      speed: rand(0.05, 0.18), phase: Math.random() * Math.PI * 2,
      amp: rand(30, 90), peak: rand(0.13, 0.26)
    });
  }

  // ---- Caustics: các dải sáng mềm dạng mesh nhẹ ----
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

  const rocks = [];
  for (let i = 0; i < 6; i++) {
    rocks.push({ name: pick(ROCK_SPRITES), x: rand(0, W), s: rand(0.7, 1.6) });
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

  function lerp(a, b, p) { return a + (b - a) * p; }

  let start = performance.now();
  let last = start;

  function frame(now) {
    const t = (now - start) / 1000;
    const dt = Math.min(0.05, (now - last) / 1000) || 0.016;
    last = now;

    // ---- Nền: lặn sâu theo scroll ----
    scrollP += (scrollTarget - scrollP) * Math.min(1, dt * 3);
    const cTop = [lerp(16, 7, scrollP), lerp(80, 30, scrollP), lerp(126, 50, scrollP)];
    const cMid = [lerp(9, 4, scrollP), lerp(51, 18, scrollP), lerp(82, 32, scrollP)];
    const cBot = [lerp(5, 2, scrollP), lerp(29, 10, scrollP), lerp(49, 18, scrollP)];
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, 'rgb(' + Math.round(cTop[0]) + ',' + Math.round(cTop[1]) + ',' + Math.round(cTop[2]) + ')');
    g.addColorStop(0.45, 'rgb(' + Math.round(cMid[0]) + ',' + Math.round(cMid[1]) + ',' + Math.round(cMid[2]) + ')');
    g.addColorStop(1, 'rgb(' + Math.round(cBot[0]) + ',' + Math.round(cBot[1]) + ',' + Math.round(cBot[2]) + ')');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // ---- God rays ----
    const tilt = mActive ? ((mx / W) - 0.5) * 0.05 : 0;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    rays.forEach(function (r) {
      const env = 0.5 + 0.5 * Math.sin(t * r.speed * 1.7 + r.phase * 2);
      if (env < 0.06) return;
      const cx = r.x * W + Math.sin(t * r.speed + r.phase) * r.amp + tilt * r.w * 2.4;
      const yEnd = H * r.len;
      const spread = yEnd * r.slant + r.w * 2.2;
      const rg = ctx.createLinearGradient(cx, 0, cx + spread * 0.4, yEnd);
      rg.addColorStop(0, 'rgba(205,242,255,' + (r.peak * env).toFixed(3) + ')');
      rg.addColorStop(0.35, 'rgba(155,222,255,' + (r.peak * env * 0.45).toFixed(3) + ')');
      rg.addColorStop(1, 'rgba(120,200,240,0)');
      ctx.fillStyle = rg;
      ctx.beginPath();
      ctx.moveTo(cx - r.w / 2, -20);
      ctx.lineTo(cx + r.w / 2, -20);
      ctx.lineTo(cx + r.w / 2 + spread, yEnd);
      ctx.lineTo(cx - r.w / 2 + spread * 0.5, yEnd);
      ctx.closePath();
      ctx.fill();
    });
    ctx.restore();

    // ---- Caustics mảnh: đường sin mềm, alpha thấp ----
    if (PERF.caustics) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      causticBands.forEach(function (c) {
        const y0 = c.yBase * H + Math.sin(t * c.spd + c.phase) * 7;
        ctx.beginPath();
        ctx.moveTo(0, y0);
        for (let x = 0; x <= W; x += 26) {
          const y = y0 + Math.sin(x * c.wl1 * 6 + t * c.spd * 5 + c.phase) * Math.sin(x * c.wl2 * 6 + t * 0.5) * 9;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(190,235,255,' + c.alpha.toFixed(3) + ')';
        ctx.lineWidth = 1.8;
        ctx.stroke();
      });
      ctx.restore();
    }

    // ---- Bụi phù sa: chấm tròn gradient mềm ----
    ctx.save();
    dust.forEach(function (p) {
      const px = p.x * W + Math.sin(t * 0.3 + p.phase) * p.drift * 6;
      let py = (p.y * H - t * p.spd) % H;
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

    // ---- Đá ----
    rocks.forEach(function (r) {
      const w = 80 * r.s, h = 80 * r.s;
      drawSprite(r.name, r.x - w / 2, H - h * 0.7, w, h, false, 0.9);
    });

    // ---- Bầy cá nhỏ: sprite thật, alpha + fog theo độ sâu đàn ----
    if (PERF.flock) {
      flock.forEach(function (b) {
        const ax = ((t * 14 + b.g * (W / 3) + Math.sin(t * 0.3 + b.g * 2.1) * W * 0.25) % (W + 240)) - 120;
        const ay = H * 0.3 + Math.sin(t * 0.47 + b.g) * H * 0.16;
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
        drawSprite(b.name, b.x - w / 2, b.y - h / 2, w, h, b.vx < 0, 0.62);
      });
    }

    // ---- Cá thường + né chuột + depth fog ----
    fishes.forEach(function (f) {
      const w = 64 * f.scale * 1.6, h = 64 * f.scale * 1.6;
      f.x += f.dir * f.speed * dt;
      f.y = f.baseY + Math.sin(t * f.bob + f.phase) * 18;
      if (mActive) {
        const dx = f.x - mx, dy = f.y - my;
        const d2 = dx * dx + dy * dy;
        const R = 130;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1;
          const push = (1 - d / R) * 240 * dt;
          f.x += (dx / d) * push;
          f.y += (dy / d) * push;
          f.baseY = f.y;
        }
      }
      if (f.dir > 0 && f.x > W + 120) { Object.assign(f, makeFishProps(rand(0.25, 1))); f.x = -120; }
      if (f.dir < 0 && f.x < -120) { Object.assign(f, makeFishProps(rand(0.25, 1))); f.x = W + 120; }
      // cá xa (depth thấp) mờ + ngả xanhdepth
      const alpha = 0.3 + f.depth * 0.55;
      drawSprite(f.name, f.x - w / 2, f.y - h / 2, w, h, f.dir < 0, alpha);
    });

    // ---- Sinh vật lớn: mờ, chậm, như ở tầng xa ----
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
          // vẽ 2 lớp: sprite mờ + hơi blur cảm giác xa
          drawSprite('turtle2', big.x - w / 2, big.y - h / 2, w, h, big.dir < 0, 0.32);
        }
      }
    }

    // ---- Bong bóng ----
    bubbles.forEach(function (b) {
      const w = 24 * b.s, h = 24 * b.s;
      b.y -= b.spd * dt;
      const bx = b.x + Math.sin(b.y * 0.05) * b.sx;
      if (b.y < -30) { b.y = H + 30; b.x = rand(0, W); }
      drawSprite(b.name, bx - w / 2, b.y - h / 2, w, h, false, 0.5);
    });

    // ---- Vầng sáng mặt nước ----
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const breathe = 0.5 + 0.5 * Math.sin(t * 0.35);
    const sg = ctx.createLinearGradient(0, 0, 0, H * 0.42);
    sg.addColorStop(0, 'rgba(175,232,255,' + (0.16 + 0.08 * breathe).toFixed(3) + ')');
    sg.addColorStop(1, 'rgba(175,232,255,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, W, H * 0.42);
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const y0 = 8 + i * 14;
      ctx.moveTo(0, y0);
      for (let x = 0; x <= W; x += 18) {
        ctx.lineTo(x, y0 + Math.sin(x * 0.02 + t * (0.7 + i * 0.3) + i * 2) * 3);
      }
      ctx.strokeStyle = 'rgba(215,245,255,' + (0.08 + i * 0.02).toFixed(3) + ')';
      ctx.lineWidth = 1.5;
      ctx.stroke();
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

    // ---- Vignette ----
    const vg = ctx.createLinearGradient(0, H * 0.7, 0, H);
    vg.addColorStop(0, 'rgba(4,23,38,0)');
    vg.addColorStop(1, 'rgba(4,21,35,0.5)');
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
