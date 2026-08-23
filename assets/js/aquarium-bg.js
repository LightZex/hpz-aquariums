/* HPZ Aquariums - undersea background v2
   Cá vẽ path cong bơi thật + hiệu ứng nước (caustics, tia sáng trôi, plankton, vignette). */
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cv = document.getElementById('aquarium-bg');
  if(!cv) return;
  const ctx = cv.getContext('2d');
  let W, H, dpr, t0 = 0;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth = window.innerWidth;
    H = cv.clientHeight = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  window.addEventListener('resize', resize);
  resize();

  const rand = (a,b)=>a+Math.random()*(b-a);

  // Caustics: lưới sóng sin vẽ overlay sáng mờ, trôi theo thời gian
  function drawCaustics(t){
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const step = 46;
    for(let y=0; y<H+step; y+=step){
      for(let x=0; x<W+step; x+=step){
        const n = Math.sin((x*0.012) + t*0.0006) + Math.cos((y*0.012) - t*0.0005)
                + Math.sin((x+y)*0.008 + t*0.0004);
        const a = Math.max(0, (n-1.2)) * 0.05;
        if(a<=0) continue;
        ctx.fillStyle = `rgba(120,210,240,${a})`;
        ctx.beginPath();
        ctx.arc(x + Math.sin(t*0.0007+y)*8, y + Math.cos(t*0.0006+x)*8, step*0.5, 0, Math.PI*2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  // Tia sáng mặt nước trôi ngang nhẹ
  function drawRays(t){
    const rays = 3;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for(let i=0;i<rays;i++){
      const base = (W/(rays+1))*(i+1) + Math.sin(t*0.0002+i)*40;
      const w = 60;
      const grad = ctx.createLinearGradient(base,0,base+110,H);
      grad.addColorStop(0,'rgba(90,180,220,0.07)');
      grad.addColorStop(1,'rgba(90,180,220,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(base-w/2,0); ctx.lineTo(base+w/2,0);
      ctx.lineTo(base+150+w/2,H); ctx.lineTo(base+90-w/2,H);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }

  // Plankton nhỏ trôi
  const plank = Array.from({length:40},()=>({x:Math.random()*W,y:Math.random()*H,r:rand(0.5,1.8),s:rand(0.1,0.5),dx:rand(-0.15,0.15)}));
  function drawPlank(t){
    ctx.save(); ctx.fillStyle='rgba(180,225,245,0.25)';
    plank.forEach(p=>{
      p.y-=p.s; p.x+=p.dx;
      if(p.y<-5){p.y=H+5;p.x=Math.random()*W;}
      if(p.x<-5)p.x=W+5; if(p.x>W+5)p.x=-5;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    ctx.restore();
  }

  // God-rays: chùm sáng mặt nước rộng, lung linh theo thời gian
  function drawGodRays(t){
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const beams = 4;
    for(let i=0;i<beams;i++){
      const cx = W*(0.2 + 0.2*i) + Math.sin(t*0.0003 + i)*60;
      const sway = Math.sin(t*0.0006 + i*1.3)*0.12;
      const grad = ctx.createLinearGradient(cx,0,cx+200,H);
      grad.addColorStop(0,'rgba(150,225,255,0.10)');
      grad.addColorStop(0.5,'rgba(120,200,240,0.04)');
      grad.addColorStop(1,'rgba(120,200,240,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx-30,0); ctx.lineTo(cx+30,0);
      ctx.lineTo(cx + 260 + sway*200, H); ctx.lineTo(cx - 40 + sway*200, H);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }

  // Bokeh sáng mờ trôi (hạt sáng mờ giống ánh phản chiếu trong nước)
  const bokeh = Array.from({length:14},()=>({x:Math.random()*W,y:Math.random()*H,r:rand(20,70),a:rand(0.02,0.07),s:rand(0.05,0.2),dx:rand(-0.2,0.2)}));
  function drawBokeh(t){
    ctx.save(); ctx.globalCompositeOperation='lighter';
    bokeh.forEach(b=>{
      b.y-=b.s; b.x+=b.dx*0.5;
      if(b.y<-b.r){b.y=H+b.r;b.x=Math.random()*W;}
      const g = ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r);
      g.addColorStop(0,`rgba(160,230,255,${b.a})`);
      g.addColorStop(1,'rgba(160,230,255,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fill();
    });
    ctx.restore();
  }

  function drawVignette(){
    const g = ctx.createRadialGradient(W/2,H*0.42,H*0.25, W/2,H/2,H*0.85);
    g.addColorStop(0,'rgba(0,0,0,0)');
    g.addColorStop(1,'rgba(2,10,18,0.55)');
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
  }

  // ---------- CÁ ----------
  function makeFish(){
    const from = Math.floor(Math.random()*4);
    const speed = rand(0.35,0.8);
    const depth = rand(0.4,1);                 // 0.4 xa -> 1 gần
    const size = 16 + depth*26;
    const alpha = 0.4 + depth*0.6;
    const palette = ['#3fd0ff','#22b8e6','#7fe0ff','#ffb15c','#ff8a3d','#bfefff'];
    const color = palette[Math.floor(Math.random()*palette.length)];
    const fin = Math.random()<0.5 ? '#ffb15c' : '#3fd0ff';
    let x,y,vx,vy;
    if(from===0){ x=-60; y=rand(0,H); vx=speed*(0.6+depth*0.6); vy=rand(-0.25,0.25); }
    else if(from===1){ x=W+60; y=rand(0,H); vx=-speed*(0.6+depth*0.6); vy=rand(-0.25,0.25); }
    else if(from===2){ x=rand(0,W); y=-60; vx=rand(-0.2,0.2); vy=speed*0.7*(0.6+depth*0.6); }
    else { x=rand(0,W); y=H+60; vx=rand(-0.2,0.2); vy=-speed*0.7*(0.6+depth*0.6); }
    return {x,y,vx,vy,size,alpha,depth,color,fin,t:Math.random()*Math.PI*2,phase:Math.random()*Math.PI*2};
  }
  const fishes = Array.from({length:7}, makeFish);

  function drawFish(f,t){
    const dir = f.vx>=0 ? 1 : -1;
    const swim = Math.sin(t*0.005 + f.phase);
    const tail = Math.sin(t*0.012 + f.phase) * f.size*0.4;
    ctx.save();
    ctx.translate(f.x, f.y + swim*f.size*0.15);
    ctx.scale(dir,1);
    ctx.rotate(swim*0.08);
    ctx.globalAlpha = f.alpha;

    // path thân (dùng chung)
    function bodyPath(){
      ctx.beginPath();
      ctx.moveTo(f.size, 0);
      ctx.quadraticCurveTo(f.size*0.1, -f.size*0.55 + swim*f.size*0.2, -f.size*0.7, -f.size*0.18 + tail*0.3);
      ctx.quadraticCurveTo(-f.size*1.0, 0, -f.size*0.7, f.size*0.18 + tail*0.3);
      ctx.quadraticCurveTo(f.size*0.1, f.size*0.55 + swim*f.size*0.2, f.size, 0);
      ctx.closePath();
    }

    // glow mờ dưới cá (ánh sáng hắt)
    ctx.save();
    ctx.globalAlpha = f.alpha*0.5;
    ctx.filter = 'blur('+(f.size*0.25)+'px)';
    bodyPath(); ctx.fillStyle = f.color; ctx.fill();
    ctx.restore();

    // thân có gradient khối (highlight trên + bóng dưới)
    const bg = ctx.createLinearGradient(0,-f.size*0.6,0,f.size*0.6);
    bg.addColorStop(0, lighten(f.color,0.45));
    bg.addColorStop(0.5, f.color);
    bg.addColorStop(1, darken(f.color,0.35));
    bodyPath(); ctx.fillStyle = bg; ctx.fill();

    // rim sáng cạnh (specular edge)
    ctx.lineWidth = Math.max(1, f.size*0.06);
    ctx.strokeStyle = 'rgba(255,255,255,'+(0.35*f.alpha)+')';
    bodyPath(); ctx.stroke();

    // vây lưng
    ctx.fillStyle = f.fin; ctx.globalAlpha=f.alpha*0.85;
    ctx.beginPath();
    ctx.moveTo(f.size*0.1,-f.size*0.5);
    ctx.quadraticCurveTo(-f.size*0.2,-f.size*1.0, -f.size*0.5,-f.size*0.4);
    ctx.closePath(); ctx.fill();
    // vây bụng
    ctx.beginPath();
    ctx.moveTo(f.size*0.05,f.size*0.45);
    ctx.quadraticCurveTo(-f.size*0.2,f.size*0.95, -f.size*0.45,f.size*0.35);
    ctx.closePath(); ctx.fill();
    // đuôi chẻ
    ctx.beginPath();
    ctx.moveTo(-f.size*0.7,0);
    ctx.lineTo(-f.size*1.6, -f.size*0.5 + tail);
    ctx.lineTo(-f.size*1.3, 0);
    ctx.lineTo(-f.size*1.6, f.size*0.5 + tail);
    ctx.closePath(); ctx.fill();
    ctx.globalAlpha = f.alpha;

    // mắt
    ctx.fillStyle='#04121d';
    ctx.beginPath(); ctx.arc(f.size*0.62,-f.size*0.12,f.size*0.11,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.9)';
    ctx.beginPath(); ctx.arc(f.size*0.65,-f.size*0.16,f.size*0.045,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function hexToRgb(h){
    h=h.replace('#',''); if(h.length===3)h=h.split('').map(c=>c+c).join('');
    const n=parseInt(h,16); return [(n>>16)&255,(n>>8)&255,n&255];
  }
  function lighten(h,a){ const [r,g,b]=hexToRgb(h); return `rgb(${r+(255-r)*a|0},${g+(255-g)*a|0},${b+(255-b)*a|0})`; }
  function darken(h,a){ const [r,g,b]=hexToRgb(h); return `rgb(${r*(1-a)|0},${g*(1-a)|0},${b*(1-a)|0})`; }

  function frame(t){
    t0 = t;
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'#0a2c45'); g.addColorStop(0.5,'#062236'); g.addColorStop(1,'#03121f');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    drawCaustics(t);
    drawGodRays(t);
    drawBokeh(t);
    drawRays(t);
    drawPlank(t);
    fishes.forEach(f=>{
      f.x+=f.vx; f.y+=f.vy; f.t+=0.05;
      if(f.x<-80||f.x>W+80||f.y<-80||f.y>H+80){ Object.assign(f, makeFish());
        if(f.x>W)f.x=W+60; if(f.x<-60)f.x=-60; }
      drawFish(f,t);
    });
    drawVignette();
    requestAnimationFrame(frame);
  }

  if(reduce){
    const g=ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'#0a2c45'); g.addColorStop(1,'#03121f');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H); drawCaustics(0); drawVignette();
  } else requestAnimationFrame(frame);
})();
