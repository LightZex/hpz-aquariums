/* HPZ Aquariums - Underwater 2D scene (sprite-based, Kenney CC0 assets)
   Nền biển + god rays + cá bơi nhiều lớp + rong 2 bên + đá/cát + bong bóng. */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.getElementById('aquarium-bg');
  if (!container) return;
  const cv = document.createElement('canvas');
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  container.appendChild(cv);
  const ctx = cv.getContext('2d');
  const BASE = 'assets/img/scene/';

  const assets = {
    fish: ['fish_blue','fish_brown','fish_green','fish_grey','fish_grey_long_a','fish_grey_long_b','fish_orange','fish_pink','fish_red'],
    rock: ['rock_a','rock_b'],
    sand: ['terrain_sand_a','terrain_sand_top_a'],
    bubble: ['bubble_a','bubble_b','bubble_c']
  };

  const imgs = {};
  let loaded = 0, total = 0;
  function load(name, cb) {
    total++;
    const i = new Image();
    i.onload = () => { loaded++; cb && cb(); };
    i.onerror = () => { loaded++; };
    i.src = BASE + name + '.png';
    imgs[name] = i;
  }
  assets.fish.forEach(n => load(n));
  assets.rock.forEach(n => load(n));
  assets.sand.forEach(n => load(n));
  assets.bubble.forEach(n => load(n));

  let W = 0, H = 0, dpr = 1;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  // ---- Cá ----
  const fishes = [];
  function spawnFish(depth) {
    const name = pick(assets.fish);
    const dir = Math.random() < 0.5 ? 1 : -1;
    const scale = (0.5 + depth * 1.4) * (28 / 64); // base 28px gần, nhỏ dần xa
    const f = {
      name, dir, scale,
      depth,
      x: dir > 0 ? -100 : W + 100,
      y: rand(H * 0.1, H * 0.85),
      speed: (20 + depth * 60) * (0.8 + Math.random() * 0.5),
      phase: Math.random() * Math.PI * 2,
      bob: rand(0.5, 1.2),
      baseY: 0
    };
    f.baseY = f.y;
    fishes.push(f);
  }
  for (let i = 0; i < 14; i++) spawnFish(rand(0.25, 1));

  // ---- Đá dưới đáy (trong canvas nền) ----
  const rocks = [];
  for (let i = 0; i < 6; i++) rocks.push({ name: pick(assets.rock), x: rand(0, W), s: rand(0.7, 1.6) });

  // ---- Bong bóng ----
  const bubbles = [];
  for (let i = 0; i < 30; i++) bubbles.push({
    name: pick(assets.bubble),
    x: rand(0, W), y: rand(0, H),
    spd: rand(15, 45), s: rand(0.4, 1.1), sx: rand(-8, 8)
  });

  // ---- God rays (ánh nắng xuyên xuống biển, random + sáng hơn) ----
  const rays = [];
  function makeRay() {
    return {
      x: Math.random(),             // vị trí ngang random mỗi lần tải
      w: rand(50, 160),             // bề rộng đỉnh tia
      slant: rand(-0.35, 0.35),     // độ nghiêng random
      len: rand(0.55, 1.0),         // chiều dài chiếu xuống (% màn hình)
      speed: rand(0.05, 0.18),
      phase: Math.random() * Math.PI * 2,
      amp: rand(30, 90),            // biên lượn ngang
      peak: rand(0.16, 0.32)        // độ sáng đỉnh
    };
  }
  for (let i = 0; i < 9; i++) rays.push(makeRay());

  function drawRays(t) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    rays.forEach(r => {
      // mỗi tia thở riêng: sáng lên mờ đi không đều nhau -> trông random tự nhiên
      const env = 0.5 + 0.5 * Math.sin(t * r.speed * 1.7 + r.phase * 2);
      if (env < 0.06) return;
      const cx = r.x * W + Math.sin(t * r.speed + r.phase) * r.amp;
      const yEnd = H * r.len;
      const spread = yEnd * r.slant + r.w * 2.2;
      const g = ctx.createLinearGradient(cx, 0, cx + spread * 0.4, yEnd);
      g.addColorStop(0, 'rgba(205,242,255,' + (r.peak * env).toFixed(3) + ')');
      g.addColorStop(0.35, 'rgba(155,222,255,' + (r.peak * env * 0.45).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(120,200,240,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(cx - r.w / 2, -20); ctx.lineTo(cx + r.w / 2, -20);
      ctx.lineTo(cx + r.w / 2 + spread, yEnd); ctx.lineTo(cx - r.w / 2 + spread * 0.5, yEnd);
      ctx.closePath(); ctx.fill();
    });
    // vầng sáng mặt nước loang từ trên xuống
    const sg = ctx.createLinearGradient(0, 0, 0, H * 0.38);
    sg.addColorStop(0, 'rgba(175,232,255,0.26)');
    sg.addColorStop(1, 'rgba(175,232,255,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, W, H * 0.38);
    ctx.restore();
  }

  function drawSprite(name, x, y, w, h, flipX, alpha) {
    const im = imgs[name];
    if (!im || !im.complete || !im.naturalWidth) return;
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    if (flipX) { ctx.translate(x + w, y); ctx.scale(-1, 1); ctx.drawImage(im, 0, 0, w, h); }
    else ctx.drawImage(im, x, y, w, h);
    ctx.restore();
  }

  let start = performance.now();
  function frame(now) {
    const t = (now - start) / 1000;
    // nền gradient biển (sáng nhẹ hơn)
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#10507e');
    g.addColorStop(0.45, '#093352');
    g.addColorStop(1, '#051d31');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    drawRays(t);

    // đá dưới đáy
    rocks.forEach(r => {
      const w = 80 * r.s, h = 80 * r.s;
      drawSprite(r.name, r.x - w / 2, H - h * 0.7, w, h, false, 0.9);
    });

    // cá
    fishes.forEach(f => {
      const w = 64 * f.scale * 1.6, h = 64 * f.scale * 1.6;
      f.x += f.dir * f.speed * 0.016;
      f.y = f.baseY + Math.sin(t * f.bob + f.phase) * 18;
      if (f.dir > 0 && f.x > W + 120) { Object.assign(f, makeFishProps(rand(0.25, 1))); f.x = -120; }
      if (f.dir < 0 && f.x < -120) { Object.assign(f, makeFishProps(rand(0.25, 1))); f.x = W + 120; }
      drawSprite(f.name, f.x - w / 2, f.y - h / 2, w, h, f.dir < 0, 0.55 + f.depth * 0.45);
    });

    // bong bóng
    bubbles.forEach(b => {
      const w = 24 * b.s, h = 24 * b.s;
      b.y -= b.spd * 0.016;
      const bx = b.x + Math.sin(b.y * 0.05) * b.sx;
      if (b.y < -30) { b.y = H + 30; b.x = rand(0, W); }
      drawSprite(b.name, bx - w / 2, b.y - h / 2, w, h, false, 0.5);
    });

    // vignette nhẹ dưới
    const vg = ctx.createLinearGradient(0, H * 0.7, 0, H);
    vg.addColorStop(0, 'rgba(4,23,38,0)');
    vg.addColorStop(1, 'rgba(4,23,38,0.5)');
    ctx.fillStyle = vg; ctx.fillRect(0, H * 0.7, W, H * 0.3);

    requestAnimationFrame(frame);
  }

  function makeFishProps(depth) {
    const name = pick(assets.fish);
    const dir = Math.random() < 0.5 ? 1 : -1;
    const scale = (0.5 + depth * 1.4) * (28 / 64);
    const y = rand(H * 0.1, H * 0.85);
    return { name, dir, scale, depth, speed: (20 + depth * 60) * (0.8 + Math.random() * 0.5), phase: Math.random() * Math.PI * 2, bob: rand(0.5, 1.2), baseY: y, y };
  }

  if (reduce) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#10507e'); g.addColorStop(1, '#051d31');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  } else {
    requestAnimationFrame(frame);
  }
})();
