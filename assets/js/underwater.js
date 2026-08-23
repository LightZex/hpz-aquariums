/* HPZ Aquariums - Underwater fish background (three.js)
   Góc nhìn dưới biển: cá bơi, tia sáng mặt trời từ trên, bong bóng, caustics.
   Màu xanh HPZ. Nhẹ, không cần GPU mạnh. */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.getElementById('aquarium-bg');
  if (!container) return;
  if (typeof THREE === 'undefined') { console.warn('underwater: THREE missing'); return; }
  if (reduce) return;

  const W = () => window.innerWidth;
  const H = () => window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(W(), H());
  renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x041726, 0.018);

  // Camera góc nhìn dưới biển, hơi ngẩng lên thấy mặt nước
  const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 200);
  camera.position.set(0, 2, 18);
  camera.lookAt(0, 1, 0);

  const clock = new THREE.Clock();
  const cyan = new THREE.Color('#3fd0ff');
  const deep = new THREE.Color('#041726');
  const lightBlue = new THREE.Color('#aef3ff');

  // ---------- Tia sáng mặt trời (god rays) ----------
  const rayMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uCol: { value: lightBlue } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec2 vUv; uniform float uTime; uniform vec3 uCol;
      void main(){
        float beams = 0.0;
        for(int i=0;i<5;i++){
          float fi = float(i);
          float x = (fi+0.5)/5.0;
          float sway = sin(uTime*0.15 + fi*1.7)*0.06;
          float d = abs(vUv.x - x + sway);
          float beam = smoothstep(0.05, 0.0, d);
          float fade = smoothstep(0.0,0.4,vUv.y); // sáng ở trên
          beams += beam * fade * (0.5 + 0.5*sin(uTime*0.3+fi));
        }
        gl_FragColor = vec4(uCol, beams*0.18);
      }`
  });
  const rays = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), rayMat);
  rays.position.set(0, 16, -10);
  scene.add(rays);

  // ---------- Caustics mặt nước (mặt trên) ----------
  const causticMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uCol: { value: cyan } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec2 vUv; uniform float uTime; uniform vec3 uCol;
      void main(){
        vec2 p = vUv*8.0;
        float n = sin(p.x+uTime*0.5)+cos(p.y-uTime*0.4)+sin((p.x+p.y)*0.7+uTime*0.3);
        float c = smoothstep(1.5, 3.0, n);
        gl_FragColor = vec4(uCol, c*0.12);
      }`
  });
  const caustic = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), causticMat);
  caustic.rotation.x = -Math.PI / 2;
  caustic.position.set(0, 22, 0);
  scene.add(caustic);

  // ---------- Cá (vẽ bằng shape + body gradient) ----------
  function makeFishMesh(colorHex) {
    const g = new THREE.Group();
    const col = new THREE.Color(colorHex);
    const bodyMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.92 });
    const finMat = new THREE.MeshBasicMaterial({ color: col.clone().offsetHSL(0, 0, 0.15), transparent: true, opacity: 0.7 });
    // thân: elip dẹt
    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), bodyMat);
    body.scale.set(1.8, 1.0, 0.5);
    g.add(body);
    // đuôi
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.4, 4), finMat);
    tail.rotation.z = Math.PI / 2;
    tail.position.x = -2.0;
    tail.scale.set(0.6, 1.0, 0.3);
    g.add(tail);
    // vây lưng
    const dorsal = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 4), finMat);
    dorsal.position.set(0.2, 0.9, 0);
    dorsal.scale.set(1.0, 1.0, 0.3);
    g.add(dorsal);
    return g;
  }

  const palette = ['#3fd0ff', '#22b8e6', '#aef3ff', '#7fe0ff', '#ff8a3d'];
  const fishes = [];
  const FISH_N = 9;
  for (let i = 0; i < FISH_N; i++) {
    const mesh = makeFishMesh(palette[i % palette.length]);
    const depth = 0.35 + Math.random() * 0.65; // 0.35 xa -> 1 gần
    const scale = 0.5 + depth * 1.1;
    mesh.scale.setScalar(scale);
    mesh.userData = {
      depth,
      speed: 1.5 + depth * 2.5 + Math.random() * 1.5,
      dir: Math.random() < 0.5 ? 1 : -1,
      y: (Math.random() - 0.5) * 16,
      z: -4 - Math.random() * 22,
      phase: Math.random() * Math.PI * 2,
      bob: 0.4 + Math.random() * 0.8,
      vert: (Math.random() - 0.5) * 0.6
    };
    mesh.position.set((Math.random() - 0.5) * 40, mesh.userData.y, mesh.userData.z);
    mesh.rotation.y = mesh.userData.dir > 0 ? 0 : Math.PI;
    scene.add(mesh);
    fishes.push(mesh);
  }

  // ---------- Bong bóng ----------
  const bubbleGeo = new THREE.SphereGeometry(0.12, 6, 6);
  const bubbleMat = new THREE.MeshBasicMaterial({ color: 0xcdeeff, transparent: true, opacity: 0.35 });
  const bubbles = [];
  for (let i = 0; i < 40; i++) {
    const b = new THREE.Mesh(bubbleGeo, bubbleMat);
    const s = 0.4 + Math.random() * 1.2;
    b.scale.setScalar(s);
    b.userData = { x: (Math.random() - 0.5) * 50, y: -20 - Math.random() * 30, spd: 1 + Math.random() * 2, x2: (Math.random() - 0.5) * 2 };
    b.position.set(b.userData.x, b.userData.y, -5 - Math.random() * 20);
    scene.add(b);
    bubbles.push(b);
  }

  // ---------- Hàm update ----------
  function tick() {
    const t = clock.getElapsedTime();
    rayMat.uniforms.uTime.value = t;
    causticMat.uniforms.uTime.value = t;

    fishes.forEach(f => {
      const u = f.userData;
      f.position.x += u.dir * u.speed * 0.016;
      f.position.y = u.y + Math.sin(t * u.bob + u.phase) * 1.2;
      f.position.y += u.vert * 0.016;
      // quay nhẹ theo hướng
      const targetRotY = u.dir > 0 ? 0 : Math.PI;
      f.rotation.y += (targetRotY - f.rotation.y) * 0.05;
      if (u.dir > 0 && f.position.x > 24) { u.dir = -1; f.rotation.y = Math.PI; }
      if (u.dir < 0 && f.position.x < -24) { u.dir = 1; f.rotation.y = 0; }
    });

    bubbles.forEach(b => {
      const u = b.userData;
      b.position.y += u.spd * 0.016;
      b.position.x = u.x + Math.sin(b.position.y * 0.1) * u.x2;
      if (b.position.y > 24) { b.position.y = -22; u.x = (Math.random() - 0.5) * 50; }
    });

    // camera nhẹ nhàng lắc
    camera.position.x = Math.sin(t * 0.1) * 1.5;
    camera.position.y = 2 + Math.sin(t * 0.13) * 0.6;
    camera.lookAt(0, 1, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  function onResize() {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  }
  window.addEventListener('resize', onResize);

  // dừng khi tab không visible
  let running = true;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { running = false; }
    else if (!running) { running = true; clock.getDelta(); tick(); }
  });

  tick();
})();
