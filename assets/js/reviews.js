/* HPZ Aquariums - reviews carousel: chạy marquee LIÊN TỤC, chậm + mượt (không nhảy slide) */
(function(){
  const track = document.getElementById('review-track');
  if(!track || typeof REVIEWS==='undefined' || !REVIEWS.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  track.innerHTML = REVIEWS.map(r=>`
    <div class="slide"><div class="review-card">
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
      <div class="quote">“${r.quote}”</div>
      <div class="who">— ${r.who}</div>
    </div></div>`).join('');

  if(reduce) return; // người tắt animation -> giữ tĩnh, hiện review đầu

  // nhân đôi list để loop liền mạch
  track.innerHTML += track.innerHTML;

  // tốc độ: px/giây — chậm rãi, đều
  const SPEED = 42;
  let offset = 0;
  let half = 0;

  function measure(){
    // nửa đầu của track = 1 bộ review đầy đủ (kể cả gap)
    half = track.scrollWidth / 2;
  }
  measure();
  window.addEventListener('resize', measure);

  let last = performance.now();
  function frame(now){
    const dt = (now - last) / 1000;
    last = now;
    offset += SPEED * dt;
    if(half > 0 && offset >= half) offset -= half; // quay vòng không giật
    track.style.transform = `translateX(${-offset}px)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
