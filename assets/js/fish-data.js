// HPZ Aquariums - fish catalogue data
// Mỗi phần tử: tên VN, tên EN (dùng lọc search), giá niêm yết (đồng), mô tả + thông tin chăm sóc.
// Ảnh = sprite cá 2D trong scene/ (+ hue xoay màu riêng), hoặc ảnh thật (photo: true).
// Trường chi tiết: he (Hệ), tank (Phù hợp bể), status (Tình trạng), eventPrice (giá event),
//   origin/temp/size/temperament/food (thông số). Thêm cá = thêm 1 object vào mảng.
// Click card -> fish.html?fish=<en>
const SPR = 'assets/img/scene/';
const FISH = [
  {
    vn: "Cá Mương Hoa Lục An", en: "Lục An Zacco", img: "luclan_1.jpg", photo: true, price: 362000,
    he: "Hệ Suối", tank: "Suối, Biotope, Thủy Sinh", status: "stock", eventPrice: "299.000₫",
    desc: "Cá Mương Hoa Lục An (Zacco platypus) là dòng cá mương nước ngọt có nguồn gốc từ khu vực Lục An, An Huy, Trung Quốc. Đây là dòng cá suối được ưa chuộng nhờ màu sắc nổi bật, dáng bơi linh hoạt và rất hợp với các bể biotope suối đá. Cá hiền, bơi khỏe, ưa sống theo đàn và hoạt động liên tục — phù hợp bể suối có dòng chảy, nước sạch, nhiều oxy, nền sỏi đá.",
    origin: "Lục An, An Huy, Trung Quốc", size: "20 cm", promo: "Cá mới về", contactText: "", combo: {3:326000,5:308000,10:271000}, gallery: ["assets/img/luclan_1.jpg", "assets/img/luclan_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Bleheri", en: "Bleheri Rainbowfish", img: "bleheri_1.jpg", photo: true, price: 150000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Cầu Vồng Bleheri (Melanotaenia bleheri) là dòng cá cảnh nước ngọt nổi bật với thân hình thon dài, vảy ánh kim và màu sắc rực rỡ pha giữa cam, đỏ, vàng, xanh lam hoặc xanh lá. Cá có dáng bơi linh hoạt, tính cách hiền lành, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi và ánh sáng nhẹ để lên màu đẹp. Ăn tạp (cám hạt, thức ăn đông lạnh), khỏe mạnh và dễ chăm sóc.",
    origin: "Sông Après, Papua New Guinea", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:145000,5:136000,10:127000}, gallery: ["assets/img/bleheri_1.jpg", "assets/img/bleheri_2.jpg"]
  },
  {
    vn: "Cá Red Cherry AB Longfin", en: "Red Cherry AB Longfin", img: "redcherry_1.jpg", photo: true, price: 40000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Red Cherry AB Longfin là dòng cá cảnh nước ngọt nổi bật với sắc đỏ rực rỡ cùng bộ vây dài mềm mại, thướt tha khi bơi. Cá có tính cách hiền hòa, hơi nhút nhát, rất phù hợp nuôi theo đàn trong các bể thủy sinh nhiều cây, lũa và đá. Bơi ở tầng giữa, tính xã hội cao — nên nuôi nhóm 6–10 con để cá dạn và lên màu đẹp. Ăn tạp (cám hạt, thức ăn đông lạnh, bổ sung thức ăn thực vật), khỏe mạnh và dễ chăm sóc.",
    origin: "Biến thể lai longfin (Puntius sp.)", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:34000,5:32000,10:31000}, gallery: ["assets/img/redcherry_1.jpg", "assets/img/redcherry_2.jpg"]
  },
  {
    vn: "Cá Goyder", en: "Goyder River Rainbowfish", img: "goyder_1.jpg", photo: true, price: 112000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Liên hệ để biết thêm thông tin",
    desc: "Cá Goyder (Goyder River Rainbowfish) là loài cá bảy màu Úc nổi tiếng với dải ánh kim lam – tím chạy dọc lưng và thân sau đỏ rực tương phản cực mạnh. Con trưởng thành càng lớn càng đậm màu, đặc biệt con đực trong đàn có màu sắc rực rỡ nhất. Cá khỏe mạnh, hiền lành, bơi nhanh ở tầng giữa, sống chung tốt với mọi loài vừa và nhỏ — lựa chọn tuyệt vời cho bể thủy sinh muốn có điểm nhấn màu đỏ.",
    origin: "Úc (sông Goyder, Bắc Úc)", temp: "22–28°C", size: "6–9 cm", food: "Cám viên mịn, bobo, artemia", promo:"Liên hệ để biết thêm thông tin", contactText:"Liên hệ để biết thêm thông tin", combo:{}, gallery: ["assets/img/goyder_1.jpg", "assets/img/goyder_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Xanh Indo", en: "Blue Rainbowfish", img: "bluerainbow_1.jpg", photo: true, price: 314000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Cầu Vồng", status: "stock", eventPrice: "150.000₫",
    desc: "Cá Cầu Vồng Xanh Indo (Melanotaenia lacustris) là dòng cá cảnh nước ngọt nổi bật với thân hình dẹp, dáng bơi nhanh nhẹn và màu xanh lam sáng rực rất bắt mắt. Cá có tính cách hiền lành, dễ thích nghi, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có không gian bơi thoáng. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn đông lạnh hoặc trùn chỉ), khỏe mạnh và dễ chăm sóc.",
    origin: "Hồ Kutubu, Papua New Guinea", size: "6–9 cm", promo:"Mua 4 tặng 1", combo:{3:251000,5:236000,10:204000}, gallery: ["assets/img/bluerainbow_1.jpg", "assets/img/bluerainbow_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Kurumoi", en: "Kurumoi Rainbowfish", img: "kurumoi_1.jpg", photo: true, price: 150000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Cầu Vồng Kurumoi (Melanotaenia sp.) là dòng cá cầu vồng nổi bật với thân hình thon dài, dáng bơi linh hoạt và màu sắc rực rỡ pha giữa xanh lam, vàng, đỏ và đen. Cá có tính cách hiền lành, thân thiện, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn khô hoặc thức ăn sống nhỏ), khỏe mạnh và dễ chăm sóc.",
    origin: "Papua New Guinea", size: "6–10 cm", promo:"Không có", combo:{3:145000,5:136000,10:127000}, gallery: ["assets/img/kurumoi_1.jpg", "assets/img/kurumoi_2.jpg"]
  },
  {
    vn: "Cá Mương Hoa Chiết Giang", en: "Opsariichthys evolans", img: "muonghoa_1.jpg", photo: true, price: 206000,
    he: "Hệ Suối", tank: "Thủy Sinh, Suối, Biotop", status: "stock", eventPrice: "149.000₫",
    desc: "Cá Mương Hoa (Opsariichthys evolans) là một loài cá suối bản địa nổi bật với thân hình thuôn dài, vây dài và những đường vân hoa đẹp mắt. Đây là dòng cá nước ngọt có tính cách thân thiện, ưa hoạt động và rất thích bơi lội. Đặc điểm sinh học và hình thái: tên khoa học Opsariichthys evolans; kích thước tối đa 10–15 cm; là loài cá bơi tầng mặt, ưa sống theo các đàn nhỏ tại khu vực suối, sông; phân bố chủ yếu ở Đông Nam Trung Quốc, Đài Loan và các vùng Đông Bắc Á.",
    origin: "Đông Nam Trung Quốc, Đài Loan và Đông Bắc Á", size: "10–15 cm", promo:"Event 30 days", combo:{3:186000,5:176000,10:167000}, gallery: ["assets/img/muonghoa_1.jpg", "assets/img/muonghoa_2.jpg"]
  },
  {
    vn: "Cá Betta", en: "Betta splendens", img: "betta.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bé Nuôi Riêng", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Betta (Betta splendens) — còn gọi là cá lia thìa, nổi bật với bộ vây dài xòe rộng và màu sắc rực rỡ. Cá có tính cách hung hăng với đồng loại nên thường nuôi đơn lẻ. Rất thích hợp cho bể nhỏ, dễ chăm sóc, chịu được nước kém oxy nhờ cơ quan hô hấp phụ (labyrinth).",
    origin: "Đông Nam Á (Thái Lan, Việt Nam, Campuchia)", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/betta.jpg"]
  },
  {
    vn: "Cá Bảy Màu", en: "Poecilia reticulata", img: "guppy.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Bảy Màu (Poecilia reticulata) là loài cá đẻ con nhỏ bé với đuôi quạt sặc sỡ, đa dạng màu sắc và hoa văn. Cá hiền lành, sống theo đàn, dễ sinh sản và rất phù hợp cho người mới bắt đầu nuôi cá cảnh.",
    origin: "Nam Mỹ (Venezuela, Guyana, Brazil)", size: "3–5 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/guppy.jpg"]
  },
  {
    vn: "Cá Neon", en: "Paracheirodon innesi", img: "neon.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Neon (Paracheirodon innesi) nổi bật với dải xanh neon chạy dọc lưng và vùng đỏ rực ở nửa dưới thân. Cá bơi thành đàn lớn, hiền lành, ưa nước mềm hơi acid và ánh sáng dịu — lựa chọn kinh điển cho bể thủy sinh.",
    origin: "Lưu vực sông Amazon, Nam Mỹ", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/neon.jpg"]
  },
  {
    vn: "Cá Molly", en: "Poecilia sp.", img: "molly.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Molly (Poecilia sp.) là loài cá đẻ con dễ tính, thích nghi tốt với cả nước ngọt và nước hơi mặn (thi thoảng cần bổ sung một ít muối). Cá ăn tạp, màu sắc đa dạng (đen, bạch tạng, cam, bướm), hiền lành và dễ nuôi.",
    origin: "Trung Mỹ và Bắc Nam Mỹ", size: "5–10 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/molly.jpg"]
  },
  {
    vn: "Cá Platy", en: "Xiphophorus maculatus", img: "platy.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Platy (Xiphophorus maculatus) là loài cá đẻ con nhỏ, nhiều màu sắc rực rỡ, tính cách hiền lành và cực kỳ dễ chăm sóc. Cá thích hợp cho người mới bắt đầu, sống hòa đồng theo đàn trong bể thủy sinh nhỏ và vừa.",
    origin: "Trung Mỹ (Mexico, Guatemala)", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/platy.jpg"]
  },
  {
    vn: "Cá Đuôi Kiếm", en: "Xiphophorus helleri", img: "swordtail.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Đuôi Kiếm (Xiphophorus helleri) được đặt tên theo đuôi dài nhọn như thanh kiếm của con đực. Cá đẻ con, hiền lành, bơi hoạt bát ở tầng giữa và sống tốt theo đàn trong bể thủy sinh rộng.",
    origin: "Trung Mỹ (Mexico, Honduras)", size: "6–12 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/swordtail.jpg"]
  },
  {
    vn: "Cá Ngựa Vằn", en: "Danio rerio", img: "zebra.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Ngựa Vằn (Danio rerio) — còn gọi là cá zebra, có thân trong suốt với những sọc ngang xanh bạc đặc trưng. Cá bơi cực nhanh thành đàn lớn ở tầng trên, khỏe mạnh, chịu được nhiều điều kiện nước và rất dễ nuôi.",
    origin: "Nam Á (Ấn Độ, Bangladesh, Myanmar)", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/zebra.jpg"]
  },
  {
    vn: "Cá Rasbora", en: "Rasbora sp.", img: "rasbora.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Rasbora là nhóm cá đàn nhỏ với thân hình thon, trong suốt, thường có một sọc hoặc dấu màu đặc trưng. Cá hiền lành, bơi thành đàn dày, rất hợp với bể thủy sinh có nhiều cây — tạo cảm giác tự nhiên và sinh động.",
    origin: "Đông Nam Á (Malaysia, Indonesia, Thái Lan)", size: "3–5 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/rasbora.jpg"]
  },
  {
    vn: "Cá Lai", en: "Trichogaster sp.", img: "gourami.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Lai (Trichogaster sp.) — hay gọi cá gourami, có đôi râu ngực nhạy cảm và cơ quan hô hấp phụ giúp thở không khí mặt nước. Cá màu sắc đa dạng (xanh, vàng, ngọc trai), tính cách hiền, bơi chậm ở tầng giữa và trên.",
    origin: "Nam Á và Đông Nam Á", size: "8–12 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/gourami.jpg"]
  },
  {
    vn: "Cá Cory", en: "Corydoras sp.", img: "corydoras.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Cá Đáy", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Cory (Corydoras sp.) là loài cá đáy hiền lành, sống thành đàn, thường lục lọi nền cát tìm thức ăn thừa giúp giữ bể sạch. Cá có gai ngực phòng vệ, thích nền mịn và bể có nhiều chỗ trú ẩn.",
    origin: "Nam Mỹ (lưu vực Amazon)", size: "4–7 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/corydoras.jpg"]
  },
  {
    vn: "Cá Pleco", en: "Hypostomus plecostomus", img: "pleco.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Cá Đáy", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Pleco (Hypostomus plecostomus) là cá dọn bể nổi tiếng với miệng hút chân không bám chặt vào mặt kính và đá để gặm rêu. Cá lớn chậm, ăn tạp (rêu, thức ăn đáy, rau), thích hợp cho bể có nhiều rêu cần kiểm soát.",
    origin: "Nam Mỹ (lưu vực Amazon, Paraguay)", size: "15–45 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/pleco.jpg"]
  },
  {
    vn: "Cá Ram", en: "Mikrogeophagus ramirezi", img: "ram.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Ram (Mikrogeophagus ramirezi) — còn gọi cá dĩa lùn, có màu sắc rực rỡ (xanh, vàng, đỏ) và dải đen đặc trưng qua mắt. Cá hiền lành, bơi chậm, ưa nước ấm (26–30°C) và bể thủy sinh có nhiều cây, rất được ưa chuộng làm cá cảnh nhỏ.",
    origin: "Nam Mỹ (lưu vực sông Orinoco, Venezuela)", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/ram.jpg"]
  },
  {
    vn: "Cá Thần Tiên", en: "Pterophyllum scalare", img: "angelfish.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Cao", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Thần Tiên (Pterophyllum scalare) — cá angelfish, có thân dẹt cao hình tam giác và vây dài thướt tha, dáng bơi thanh lịch. Cá hiền với đồng loại cùng size, ưa bể cao có nhiều không gian bơi và ánh sáng dịu.",
    origin: "Nam Mỹ (lưu vực sông Amazon)", size: "10–15 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/angelfish.jpg"]
  },
  {
    vn: "Cá Đĩa", en: "Symphysodon sp.", img: "discus.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Đàn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Đĩa (Symphysodon sp.) được mệnh danh là 'vua của cá cảnh nước ngọt' nhờ thân tròn dẹt, màu sắc sặc sỡ (đỏ, xanh, nâu, hoa văn) và dáng bơi từ tốn. Cá khó tính, cần nước sạch, mềm, ấm và chăm sóc kỹ — dành cho người nuôi có kinh nghiệm.",
    origin: "Lưu vực sông Amazon, Nam Mỹ", size: "12–20 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/discus.jpg"]
  },
  {
    vn: "Cá Ông Hoàng", en: "Astronotus ocellatus", img: "oscar.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Thủy Sinh, Bể Lớn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Ông Hoàng (Astronotus ocellatus) — cá oscar, là loài cá lớn thông minh, có thể nhận biết chủ và đòi ăn khi thấy người. Cá hung hăng với cá khác, cần bể rộng, lọc mạnh và thức ăn tươi (cá, tôm).",
    origin: "Nam Mỹ (lưu vực Amazon, Paraguay)", size: "25–35 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/oscar.jpg"]
  },
  {
    vn: "Cá Vàng", en: "Carassius auratus", img: "goldfish.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Hồ / Bể Lớn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Vàng (Carassius auratus) là loài cá cảnh cổ điển với thân hình tròn, đuôi chẻ dài và màu vàng cam rực rỡ. Cá cứng cáp, nuôi được trong hồ ngoài trời hoặc bể lớn có oxy tốt, ăn tạp và rất quen thuộc với người nuôi cá Việt Nam.",
    origin: "Trung Quốc (thuần hóa từ cá chép)", size: "15–30 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/goldfish.jpg"]
  },
  {
    vn: "Cá Koi", en: "Cyprinus carpio", img: "koi.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Hồ Ngoài Trời", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Koi (Cyprinus carpio) là cá chép chúa Nhật Bản, biểu tượng của may mắn và thịnh vượng, với hoa văn trắng – đỏ – đen thanh lịch. Cá nuôi trong hồ ngoài trời có hệ thống lọc tốt, lớn nhanh, sống lâu và có thể nhận chủ.",
    origin: "Nhật Bản (thuần hóa từ cá chép)", size: "30–80 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/koi.jpg"]
  },
  {
    vn: "Cá Rồng", en: "Scleropages formosus", img: "arowana.jpg", photo: true, price: 0,
    he: "Hệ Nước Ngọt", tank: "Bể Lớn", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Rồng (Scleropages formosus) — arowana, là cá cảnh cao cấp với thân dài vảy sáng lấp lánh như đồng tiền, miệng hơi nhô và râu dài. Cá bơi chậm, uy nghi, được xem là mang lại tài lộc; cần bể rất rộng, nước sạch và thức ăn tươi.",
    origin: "Đông Nam Á (Indonesia, Malaysia, Myanmar)", size: "50–90 cm", promo: "Không có", contactText: "", combo: {3:0,5:0,10:0}, gallery: ["assets/img/arowana.jpg"]
  },
].map(f => ({ ...f, src: (f.photo ? 'assets/img/' : SPR) + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));
