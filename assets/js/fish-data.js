// HPZ Aquariums - fish catalogue data
// Mỗi phần tử: tên VN, tên EN (dùng lọc search), giá tạm (đồng), mô tả + thông tin chăm sóc.
// Ảnh = sprite cá 2D trong scene/ (+ hue xoay màu riêng), hoặc ảnh thật (photo: true).
// Thêm cá = thêm 1 object vào mảng, pagination tự chia 12/page. Click card -> fish.html?fish=<en>
const SPR = 'assets/img/scene/';
const FISH = [
  // --- Trang 1 ---
  {
    vn: "Cá Lia Thia", en: "Betta", img: "fish_red.png", price: 35000,
    desc: "Cá Lia Thia (cá betta, cá fighting Thái) là một trong những loài cá cảnh phổ biến nhất Việt Nam. Con đực có màu sắc rực rỡ và bộ vây dài mềm mại như dải lụa, tính cách mạnh mẽ và rất thông minh — có thể nhận biết chủ. Betta hô hấp bằng cả mang và cơ quan hô hấp khí cung (labyrinth) nên chịu thiếu oxy tốt.",
    origin: "Thái Lan, Campuchia", temp: "24–30°C", size: "6–7 cm", temperament: "Đực hung hăng, nuôi riêng", food: "Cám viên, trùn chỉ, artemia"
  },
  {
    vn: "Cá Chép Nhật Koi", en: "Koi", img: "fish_orange.png", price: 250000,
    desc: "Koi là cá chép Nhật được lai tạo hàng trăm năm để có màu sắc đẹp — trắng, đỏ, vàng, đen phối hợp thành nhiều giống giá trị cao. Koi rất thông minh, sống lâu (20–50 năm), lớn nhanh và dạn người, có thể học ăn trực tiếp từ tay chủ. Nuôi tốt ở hồ koi ngoài trời hoặc bể lớn có lọc mạnh.",
    origin: "Nhật Bản", temp: "15–25°C", size: "50–70 cm", temperament: "Hiền, dạn người", food: "Cám koi, rau xanh, tôm"
  },
  {
    vn: "Cá Bảy Màu", en: "Guppy", img: "fish_pink.png", price: 15000,
    desc: "Cá Bảy Màu (guppy) là loài cá cảnh dễ nuôi nhất cho người mới bắt đầu. Con đực có đuôi rộng sặc sỡ đủ màu, sinh sản nhanh và mạnh khỏe, ăn tạp, chịu được nhiều điều kiện nước. Rất phù hợp bể thủy sinh nhỏ và bể cá community.",
    origin: "Nam Mỹ", temp: "22–28°C", size: "4–6 cm", temperament: "Hiền, bơi lội năng động", food: "Cám viên mịn, bo bo, trùn chỉ"
  },
  {
    vn: "Cá Neon", en: "Neon Tetra", img: "fish_blue.png", price: 10000,
    desc: "Cá Neon có sọc xanh lam phát sáng chạy dọc thân kết hợp đỏ ở nửa sau — nổi bật nhất khi bơi thành đàn trong bể thủy sinh nền tối. Nuôi đàn từ 10 con trở lên để thấy được vẻ đẹp và cá bớt stress. Nhỏ nhẹ, hiền, sống chung tốt với mọi loài.",
    origin: "Nam Mỹ (sông Amazon)", temp: "20–26°C", size: "3–4 cm", temperament: "Hiền, cần nuôi theo đàn", food: "Cám mịn, bobo, thức ăn đông lạnh"
  },
  {
    vn: "Cá Moly", en: "Molly", img: "fish_green.png", price: 20000,
    desc: "Cá Moly là cá sống khỏe, dễ nuôi, có nhiều biến thể màu (đen, vàng, cam, marble). Thích nước hơi có muối nhẹ và ăn cả rau xanh — giúp hạn chế rêu trong bể. Sinh con đẻ mỏi nhanh như guppy, phù hợp người mới.",
    origin: "Trung & Nam Mỹ", temp: "24–28°C", size: "6–10 cm", temperament: "Hiền, hoạt bát", food: "Cám viên, rau luộc, tôm"
  },
  {
    vn: "Cá Vàng", en: "Goldfish", img: "fish_orange.png", hue: -35, price: 30000,
    desc: "Cá Vàng là loài cá cảnh cổ điển được nuôi phổ biến nhất thế giới hàng trăm năm. Có nhiều giống: đầu sư tử, mắt trời, oranda, ranchu... Cá vàng sống khỏe, chịu lạnh tốt, thông minh và nhớ lâu. Cần bể rộng, lọc mạnh vì cá ăn nhiều và thải nhiều.",
    origin: "Trung Quốc", temp: "18–24°C", size: "10–20 cm", temperament: "Hiền, chậm rãi", food: "Cám viên, rau xanh, trùn"
  },
  {
    vn: "Cá Thiên Thần", en: "Angelfish", img: "fish_grey_long_a.png", price: 60000,
    desc: "Cá Thiên Thần (angelfish) có thân dẹt hình tam giác với vây dài thanh thoát, bơi chậm rất sang trọng. Là loài cá cảnh trung cao cấp được ưa chuộng, có nhiều dòng màu: koi, đen, vàng, marble. Nuôi được cặp đẻ và tự chăm con.",
    origin: "Nam Mỹ (sông Amazon)", temp: "24–30°C", size: "10–15 cm", temperament: "Hiền, hơi lãnh thổ khi đẻ", food: "Cám viên, tôm, trùn chỉ"
  },
  {
    vn: "Cá Óscar", en: "Oscar", img: "fish_brown.png", price: 90000,
    desc: "Cá Óscar là cá cảnh hung dữ lớn nhanh, thông minh bậc nhất trong các loài cá nước ngọt — nhận chủ, cho ăn tay được và biết 'vẽ lại' bể theo ý mình. Màu sắc biến đổi theo tuổi và dòng (tiger, red, albino). Cần bể lớn từ 200L trở lên.",
    origin: "Nam Mỹ", temp: "22–28°C", size: "30–40 cm", temperament: "Hung dữ, cần nuôi riêng hoặc cá to", food: "Cám viên lớn, cá tạp, tôm"
  },
  {
    vn: "Cá Platý", en: "Platy", img: "fish_red.png", hue: 45, price: 10000,
    desc: "Cá Platý nhỏ nhắn, màu tươi (đỏ, cam, vàng), cực kỳ dễ nuôi và sinh sản nhanh — lựa chọn kinh điển cho bể gia đình. Hiền lành, sống chung tốt với guppy, moly, neon. Ít bệnh, chịu được môi trường nước đa dạng.",
    origin: "Trung Mỹ", temp: "20–26°C", size: "4–6 cm", temperament: "Hiền, năng động", food: "Cám mịn, bobo, rau"
  },
  // --- Trang 2 ---
  {
    vn: "Cá Đĩa", en: "Discus", img: "fish_blue.png", hue: 70, price: 450000,
    desc: "Cá Đĩa (discus) được mệnh danh là 'vua cá cảnh nước ngọt' — thân tròn dẹt như đĩa với màu sắc lộng lẫy và vây dài. Là loài cao cấp đòi hỏi nước sạch ổn định, nhiệt độ cao và thức ăn chất lượng. Nuôi thành công discus là niềm tự hào của người chơi cá.",
    origin: "Nam Mỹ (sông Amazon)", temp: "28–31°C", size: "15–20 cm", temperament: "Hiền, nhạy cảm", food: "Trùn chỉ, tôm, cám discus chuyên dụng"
  },
  {
    vn: "Cá Rồng", en: "Arowana", img: "fish_grey_long_b.png", price: 1200000,
    desc: "Cá Rồng là loài cá cảnh phong thủy hàng đầu ở châu Á, biểu tượng tài lộc và may mắn. Thân dài uy nghi, vảy kim tuyến ánh kim, bơi oai vệ. Cá lớn cần bể tối thiểu 1.5m, lọc cực mạnh. Các dòng phổ biến: hồng long, kim long, thanh long.",
    origin: "Đông Nam Á", temp: "24–30°C", size: "60–90 cm", temperament: "Hung dữ, săn mồi", food: "Cá tạp, tôm, côn trùng"
  },
  {
    vn: "Cá Chuột", en: "Corydoras", img: "fish_grey.png", price: 12000,
    desc: "Cá Chuột (corydoras) là 'nhân viên dọn dẹp' đáng yêu của bể cá — lượn đáy tìm thức ăn rơi vãi, ria mép ngộ nghĩnh và bơi theo đàn vui nhộn. Rất hiền, không phá thủy sinh, giúp bể sạch hơn. Nuôi đàn 5 con trở lên.",
    origin: "Nam Mỹ", temp: "22–26°C", size: "4–7 cm", temperament: "Hiền, sống đáy", food: "Cám viên chìm, trùn chỉ, bobo"
  },
  {
    vn: "Cá Thần Tiên Gourami", en: "Gourami", img: "fish_pink.png", hue: 130, price: 40000,
    desc: "Cá Gourami có vây dài mềm như tơ, màu ánh ngọc trai, bơi chậm rãi thanh lịch. Cũng như betta, gourami có cơ quan hô hấp phụ nên chịu thiếu oxy tốt. Hiền lành, dễ nuôi, phù hợp bể thủy sinh tĩnh lặng.",
    origin: "Đông Nam Á", temp: "24–28°C", size: "10–12 cm", temperament: "Hiền, hơi nhút nhát", food: "Cám viên, rau, trùn chỉ"
  },
  {
    vn: "Cá Rasbora", en: "Rasbora", img: "fish_red.png", hue: 95, price: 12000,
    desc: "Cá Rasbora (đặc biệt là harlequin) bơi thành đàn đông màu cam đồng nhất, tạo hiệu ứng màu rất đẹp trong bể thủy sinh. Mạnh khỏe, hiền, ít bệnh — loài đàn hoàn hảo cho bể community. Nuôi đàn 10 con trở lên.",
    origin: "Đông Nam Á", temp: "22–27°C", size: "4–5 cm", temperament: "Hiền, cần nuôi đàn", food: "Cám mịn, bobo, thức ăn đông lạnh"
  },
  {
    vn: "Cá Kiếm", en: "Swordtail", img: "fish_orange.png", hue: 30, price: 15000,
    desc: "Cá Kiếm con đực có vây đuôi dưới kéo dài như thanh kiếm — đặc điểm nhận diện độc đáo. Màu sắc tươi sáng, khỏe mạnh, sinh sản nhanh, dễ lai tạo ra nhiều màu mới. Hiền lành và sống chung tốt trong bể community.",
    origin: "Trung Mỹ (Mexico)", temp: "22–28°C", size: "8–10 cm", temperament: "Hiền, hoạt bát", food: "Cám viên, bobo, rau xanh"
  },
  {
    vn: "Cá Lai (Cá Bám)", en: "Pleco", img: "fish_grey_long_a.png", hue: 170, price: 50000,
    desc: "Cá Bám (pleco) là 'cảnh sát vệ sinh' của bể — bám kiếng ăn rêu ngày đêm giúp mặt kiếng và lá thủy sinh luôn sạch. Bộ giáp xương cứng cáp, khỏe mạnh ít bệnh. Cần gỗ lũa để nhai và nơi trú ẩn ban ngày.",
    origin: "Nam Mỹ", temp: "22–28°C", size: "12–30 cm", temperament: "Hiền, sống đáy về đêm", food: "Rêu, rau luộc, cám chìm, gỗ lũa"
  },
  {
    vn: "Cá Ram", en: "Ram", img: "fish_blue.png", hue: 145, price: 70000,
    desc: "Cá Ram (German Blue Ram) là cá cảnh nhỏ cao cấp với màu xanh lam óng, đầu đỏ cam và viền đen nét — một trong những loài đẹp nhất họ Cá hồng kim. Kích thước nhỏ phù hợp bể thủy sinh chi tiết, hiền và thông minh.",
    origin: "Nam Mỹ (Orinoco)", temp: "26–30°C", size: "5–6 cm", temperament: "Hiền, hơi kén nước", food: "Cám mịn, trùn chỉ, artemia"
  },
  {
    vn: "Cá Ngựa Vằn", en: "Zebra Danio", img: "fish_grey.png", hue: 200, price: 8000,
    desc: "Cá Ngựa Vằn có sọc đen trắng chạy dọc thân, bơi cực nhanh và năng động ở tầng giữa – mặt bể. Sống khỏe tuyệt đối, chịu lạnh tốt, là lựa chọn kinh điển cho người mới. Bơi đàn tạo hiệu ứng sọc chuyển động rất đẹp.",
    origin: "Ấn Độ", temp: "18–24°C", size: "4–5 cm", temperament: "Hiền, cực năng động", food: "Cám mịn, bobo, artemia"
  },
  // --- Mới ---
  {
    vn: "Cá Goyder", en: "Goyder River Rainbowfish", img: "goyder_1.jpg", photo: true, price: 112000,
    desc: "Cá Goyder (Goyder River Rainbowfish) là loài cá bảy màu Úc nổi tiếng với dải ánh kim lam – tím chạy dọc lưng và thân sau đỏ rực tương phản cực mạnh. Con trưởng thành càng lớn càng đậm màu, đặc biệt con đực trong đàn có màu sắc rực rỡ nhất. Cá khỏe mạnh, hiền lành, bơi nhanh ở tầng giữa, sống chung tốt với mọi loài vừa và nhỏ — lựa chọn tuyệt vời cho bể thủy sinh muốn có điểm nhấn màu đỏ.",
    origin: "Úc (sông Goyder, Bắc Úc)", temp: "22–28°C", size: "6–9 cm", temperament: "Hiền, cần nuôi đàn", food: "Cám viên mịn, bobo, artemia", gallery: ["assets/img/goyder_1.jpg", "assets/img/goyder_2.jpg"]
  },
].map(f => ({ ...f, src: (f.photo ? 'assets/img/' : SPR) + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));
