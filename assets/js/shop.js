/* HPZ Aquariums - catalogue: search + pagination 9/page */
(function(){
  const grid = document.getElementById('fish-grid');
  const search = document.getElementById('fish-search');
  const pager = document.getElementById('pager');
  if(!grid) return;
  const PER = 12;
  let filtered = FISH.slice();
  let page = 1;

  function cardHTML(f){
    const style = f.filter ? ` style="filter:${f.filter}"` : '';
    return `<article class="card">
      <div class="ph">
        <img class="fish-sprite" src="${f.src}" alt="${f.vn}" loading="lazy"${style}></div>
      <div class="body"><div class="vn">${f.vn}</div><div class="en">${f.en}</div></div>
    </article>`;
  }

  function render(){
    const start = (page-1)*PER;
    const slice = filtered.slice(start, start+PER);
    grid.innerHTML = slice.length ? slice.map(cardHTML).join('')
      : `<p style="color:var(--muted);grid-column:1/-1">Không tìm thấy cá phù hợp.</p>`;
    const pages = Math.max(1, Math.ceil(filtered.length/PER));
    pager.innerHTML = `
      <button id="prev" ${page===1?'disabled':''}>← Trước</button>
      <span class="page-info">Trang ${page}/${pages} · ${filtered.length} cá</span>
      <button id="next" ${page===pages?'disabled':''}>Sau →</button>`;
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    if(prev) prev.onclick = ()=>{ if(page>1){page--; render();} };
    if(next) next.onclick = ()=>{ if(page<pages){page++; render();} };
  }

  if(search){
    search.addEventListener('input', ()=>{
      const q = search.value.trim().toLowerCase();
      filtered = FISH.filter(f =>
        f.vn.toLowerCase().includes(q) || f.en.toLowerCase().includes(q));
      page = 1; render();
    });
  }
  render();
})();
