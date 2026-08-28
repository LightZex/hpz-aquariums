/* HPZ Aquariums - fish detail page (fish.html?fish=<en>) */
(function(){
  const root = document.getElementById('detail-root');
  if(!root) return;
  const q = new URLSearchParams(location.search).get('fish') || '';
  const ql = q.toLowerCase().trim();
  const f = FISH.find(x => x.en.toLowerCase() === ql)
        || FISH.find(x => x.en.toLowerCase().includes(ql))
        || FISH.find(x => x.vn.toLowerCase().includes(ql))
        || FISH[0];
  const vnd = n => n.toLocaleString('vi-VN') + '₫';

  if(!f){
    root.innerHTML = `<p style="color:var(--muted)">Không tìm thấy thông tin cá. <a href="beca.html">Xem toàn bộ bể cá →</a></p>`;
    document.title = 'Không tìm thấy — HPZ Aquariums';
    return;
  }
  document.title = f.vn + ' — HPZ Aquariums';

  const idx = FISH.findIndex(x => x.en.toLowerCase() === (f.en||'').toLowerCase());
  const prevF = FISH[(idx - 1 + FISH.length) % FISH.length];
  const nextF = FISH[(idx + 1) % FISH.length];

  const style = f.filter ? ` style="filter:${f.filter}"` : '';
  const gallery = (f.gallery && f.gallery.length ? f.gallery : [f.src]);
  const imgs = gallery.map((g,i) =>
    `<img src="${g}" alt="${f.vn} ${i+1}" class="detail-img${f.photo?'':' fish-sprite'}" ${!f.photo&&i===0?style:''} loading="lazy">`).join('');
  const priceNum = (f.price || 0).toLocaleString('vi-VN');
  const sliderId = 'g' + Math.random().toString(36).slice(2,8);

  const STATUS = { 'stock':'Còn hàng', 'pre-order':'Đặt trước', 'sold out':'Hết hàng', 'hết hàng':'Hết hàng' };
  const statusText = STATUS[(f.status||'').toLowerCase()] || f.status || '';
  const ct = f.contactText || 'Liên hệ';
  const row = (label, val) => val ? `
    <div class="spec-row"><span class="spec-label">${label}</span><span class="spec-val">${val}</span></div>` : '';

  root.innerHTML = `
  <nav class="fish-nav">
    <a class="nav-btn" href="fish.html?fish=${encodeURIComponent(prevF.en)}">‹ Quay lại</a>
    <a class="nav-btn nav-next" href="fish.html?fish=${encodeURIComponent(nextF.en)}">Chuyển tiếp ›</a>
  </nav>
  <article class="detail">
    <div class="detail-layer layer-media">
      <div class="gallery-track">${imgs}</div>
    </div>
    <div class="detail-layer layer-price">
      <div class="price-row">
        <span class="pl">Giá Niêm Yết</span>
        <span class="pv">${priceNum}₫</span>
      </div>
    </div>
    <div class="detail-layer layer-info">
      <h2 class="detail-name">${f.vn}</h2>
      <p class="detail-en">${f.en}</p>
      <p class="detail-desc">${f.desc}</p>
      <div class="detail-actions" style="margin-top:20px">
        <a class="btn primary" href="index.html#contact">Liên hệ mua cá</a>
        <a class="btn ghost" href="beca.html">← Xem thêm cá khác</a>
      </div>
    </div>
  </article>`;
})();
