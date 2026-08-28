// HPZ Aquariums - fish catalogue data
// Mỗi phần tử: tên VN, tên EN (dùng lọc search), giá niêm yết (đồng), mô tả + thông tin chăm sóc.
// Ảnh = sprite cá 2D trong scene/ (+ hue xoay màu riêng), hoặc ảnh thật (photo: true).
// Trường chi tiết: he (Hệ), tank (Phù hợp bể), status (Tình trạng), eventPrice (giá event),
//   origin/temp/size/temperament/food (thông số). Thêm cá = thêm 1 object vào mảng.
// Click card -> fish.html?fish=<en>
const SPR = 'assets/img/scene/';
const FISH = [
  {
    vn: "Cá Goyder", en: "Goyder River Rainbowfish", img: "goyder_1.jpg", photo: true, price: 112000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Goyder (Goyder River Rainbowfish) là loài cá bảy màu Úc nổi tiếng với dải ánh kim lam – tím chạy dọc lưng và thân sau đỏ rực tương phản cực mạnh. Con trưởng thành càng lớn càng đậm màu, đặc biệt con đực trong đàn có màu sắc rực rỡ nhất. Cá khỏe mạnh, hiền lành, bơi nhanh ở tầng giữa, sống chung tốt với mọi loài vừa và nhỏ — lựa chọn tuyệt vời cho bể thủy sinh muốn có điểm nhấn màu đỏ.",
    origin: "Úc (sông Goyder, Bắc Úc)", temp: "22–28°C", size: "6–9 cm", food: "Cám viên mịn, bobo, artemia", gallery: ["assets/img/goyder_1.jpg", "assets/img/goyder_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Xanh Indo", en: "Blue Rainbowfish", img: "bluerainbow_1.jpg", photo: true, price: 314000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Cầu Vồng", status: "stock", eventPrice: "150.000₫",
    desc: "Cá Cầu Vồng Xanh Indo (Melanotaenia lacustris) là dòng cá cảnh nước ngọt nổi bật với thân hình dẹp, dáng bơi nhanh nhẹn và màu xanh lam sáng rực rất bắt mắt. Cá có tính cách hiền lành, dễ thích nghi, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có không gian bơi thoáng. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn đông lạnh hoặc trùn chỉ), khỏe mạnh và dễ chăm sóc.",
    origin: "Hồ Kutubu, Papua New Guinea", size: "6–9 cm", gallery: ["assets/img/bluerainbow_1.jpg", "assets/img/bluerainbow_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Kurumoi", en: "Kurumoi Rainbowfish", img: "kurumoi_1.jpg", photo: true, price: 150000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Cầu Vồng Kurumoi (Melanotaenia sp.) là dòng cá cầu vồng nổi bật với thân hình thon dài, dáng bơi linh hoạt và màu sắc rực rỡ pha giữa xanh lam, vàng, đỏ và đen. Cá có tính cách hiền lành, thân thiện, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn khô hoặc thức ăn sống nhỏ), khỏe mạnh và dễ chăm sóc.",
    origin: "Papua New Guinea", size: "6–10 cm", gallery: ["assets/img/kurumoi_1.jpg", "assets/img/kurumoi_2.jpg"]
  },
  {
    vn: "Cá Mương Hoa Triết Giang", en: "Opsariichthys evolans", img: "muonghoa_1.jpg", photo: true, price: 206000,
    he: "Hệ Suối", tank: "Thủy Sinh, Suối, Biotop", status: "stock", eventPrice: "149.000₫",
    desc: "Cá Mương Hoa (Opsariichthys evolans) là một loài cá suối bản địa nổi bật với thân hình thuôn dài, vây dài và những đường vân hoa đẹp mắt. Đây là dòng cá nước ngọt có tính cách thân thiện, ưa hoạt động và rất thích bơi lội. Đặc điểm sinh học và hình thái: tên khoa học Opsariichthys evolans; kích thước tối đa 10–15 cm; là loài cá bơi tầng mặt, ưa sống theo các đàn nhỏ tại khu vực suối, sông; phân bố chủ yếu ở Đông Nam Trung Quốc, Đài Loan và các vùng Đông Bắc Á.",
    origin: "Đông Nam Trung Quốc, Đài Loan và Đông Bắc Á", size: "10–15 cm", gallery: ["assets/img/muonghoa_1.jpg", "assets/img/muonghoa_2.jpg"]
  },
].map(f => ({ ...f, src: (f.photo ? 'assets/img/' : SPR) + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));
