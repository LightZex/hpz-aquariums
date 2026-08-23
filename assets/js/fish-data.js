// HPZ Aquariums - fish catalogue data
// Mỗi phần tử: tên VN, tên EN (dùng lọc search), ảnh = sprite cá 2D trong scene/ + hue xoay màu riêng
// Thêm cá = thêm 1 object vào mảng, pagination tự chia 12/page.
const SPR = 'assets/img/scene/';
const FISH = [
  // --- Trang 1 ---
  { vn: "Cá Lia Thia",        en: "Betta",          img: "fish_red.png" },
  { vn: "Cá Chép Nhật Koi",   en: "Koi",            img: "fish_orange.png" },
  { vn: "Cá Bảy Màu",         en: "Guppy",          img: "fish_pink.png" },
  { vn: "Cá Neon",            en: "Neon Tetra",     img: "fish_blue.png" },
  { vn: "Cá Moly",            en: "Molly",          img: "fish_green.png" },
  { vn: "Cá Vàng",            en: "Goldfish",       img: "fish_orange.png", hue: -35 },
  { vn: "Cá Thiên Thần",      en: "Angelfish",      img: "fish_grey_long_a.png" },
  { vn: "Cá Óscar",           en: "Oscar",          img: "fish_brown.png" },
  { vn: "Cá Platý",           en: "Platy",          img: "fish_red.png",   hue: 45 },
  // --- Trang 2 ---
  { vn: "Cá Đĩa",             en: "Discus",         img: "fish_blue.png",  hue: 70 },
  { vn: "Cá Rồng",            en: "Arowana",        img: "fish_grey_long_b.png" },
  { vn: "Cá Chuột",           en: "Corydoras",      img: "fish_grey.png" },
  { vn: "Cá Thần Tiên Gourami", en: "Gourami",      img: "fish_pink.png",  hue: 130 },
  { vn: "Cá Rasbora",         en: "Rasbora",        img: "fish_red.png",   hue: 95 },
  { vn: "Cá Kiếm",            en: "Swordtail",      img: "fish_orange.png", hue: 30 },
  { vn: "Cá Lai (Cá Bám)",    en: "Pleco",          img: "fish_grey_long_a.png", hue: 170 },
  { vn: "Cá Ram",             en: "Ram",            img: "fish_blue.png",  hue: 145 },
  { vn: "Cá Ngựa Vằn",        en: "Zebra Danio",    img: "fish_grey.png",  hue: 200 },
].map(f => ({ ...f, src: SPR + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));
