/* HPZ Aquariums - fish detail page (fish.html?fish=<en>) */
(function(){
  const root = document.getElementById('detail-root');
  if(!root) return;
  const q = new URLSearchParams(location.search).get('fish') || '';
  const f = FISH.find(x => x.en.toLowerCase() === q.toLowerCase())
        || FISH.find(x => x.en.toLowerCase().includes(q.toLowerCase()));
  const vnd = n => n.toLocaleString('vi-VN') + '₫';

  if(!f){
    root.innerHTML = `<p style="color:var(--muted)">Không tìm thấy thông tin cá. <a href="beca.html">Xem toàn bộ bể cá →</a></p>`;
    document.title = 'Không tìm thấy — HPZ Aquariums';
    return;
  }
  document.title = f.vn + ' — HPZ Aquariums';

  const style = f.filter ? ` style="filter:${f.filter}"` : '';
  const gallery = (f.gallery && f.gallery.length ? f.gallery : [f.src]);
  const imgs = gallery.map((g,i) =>
    `<img src="${g}" alt="${f.vn} ${i+1}" class="detail-img${f.photo?'':' fish-sprite'}" ${!f.photo&&i===0?style:''} loading="lazy">`).join('');

  const STATUS = { 'stock':'Còn hàng', 'pre-order':'Đặt trước', 'sold out':'Hết hàng', 'hết hàng':'Hết hàng' };
  const statusText = STATUS[(f.status||'').toLowerCase()] || f.status || '';
  const row = (label, val) => val ? `
    <div class="spec-row"><span class="spec-label">${label}</span><span class="spec-val">${val}</span></div>` : '';

  root.innerHTML = `
  <article class="detail">
    <div class="detail-media">${imgs}</div>
    <div class="detail-info">
      <h2 class="section-title" style="margin-bottom:4px">${f.vn}</h2>
      <p class="detail-en">${f.en}</p>
      <p class="detail-desc">${f.desc}</p>
      <div class="specs">
        ${row('Hệ', f.he)}
        ${row('Phù Hợp Bể', f.tank)}
        ${row('Size', f.size)}
        ${row('Tình Trạng', statusText)}
        ${row('Giá Niêm Yết', vnd(f.price || 0))}
        ${row('Giá Event', f.eventPrice || 'Không hỗ trợ')}
      </div>
      <div class="detail-actions">
        <a class="btn primary" href="index.html#contact">Liên hệ mua cá</a>
        <a class="btn ghost" href="beca.html">← Xem thêm cá khác</a>
      </div>
    </div>
  </article>`;
})();
