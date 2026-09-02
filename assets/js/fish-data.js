// HPZ Aquariums - fish catalogue data
// Mỗi phần tử: tên VN, tên EN (dùng lọc search), giá niêm yết (đồng), mô tả + thông tin chăm sóc.
// Ảnh = sprite cá 2D trong scene/ (+ hue xoay màu riêng), hoặc ảnh thật (photo: true).
// Trường chi tiết: he (Hệ), tank (Phù hợp bể), status (Tình trạng), eventPrice (giá event),
//   origin/temp/size/temperament/food (thông số). Thêm cá = thêm 1 object vào mảng.
// Click card -> fish.html?fish=<en>
const SPR = 'assets/img/scene/';
const FISH = [
  {
    vn: "Cá Đĩa Beo Tuyết", en: "Snow Leopard Discus", img: "beo_1.jpg", photo: true, price: 595000,
    he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Đĩa Beo Tuyết (Symphysodon aequifasciatus) là dòng cá đĩa cao cấp được lai tạo chọn lọc qua nhiều thế hệ từ dòng Leopard kết hợp với các dòng Albino, nổi bật với nền thân trắng ngà điểm những đốm đỏ cam rải khắp mình tựa hoa văn beo tuyết. Cá có dáng đĩa tròn dẹp đặc trưng, bơi chậm rãi uyển chuyển, tính cách hiền lành nhưng hơi nhút nhát — thích bể nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    origin: "Lai tạo chọn lọc (Malaysia, Thái Lan) từ cá đĩa Amazon", size: "15–20 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/beo_1.jpg", "assets/img/beo_2.jpg"],
        video: "https://www.facebook.com/reel/2310621016011230/"
      },
  {
    vn: "Cá Pleco L155", en: "Snowball Pleco L155", img: "pleco_1.jpg", photo: true, price: 450000,
    he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Tảo", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Pleco L155 (Hypancistrus sp. L155) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon (Brazil), nổi bật với thân đen tuyền điểm những đốm trắng to tròn rải đều khắp thân và vây trông như những quả cầu tuyết. Đây là dòng Hypancistrus thuộc nhóm ăn tạp thiên về thức ăn protein (trùn chỉ, artemia, thức ăn viên chìm) hơn là ăn tảo, hoạt động chủ yếu về đêm, tính cách hiền lành nhưng đực trưởng thành có tính lãnh thổ nhẹ. Phù hợp bể thủy sinh có nhiều hang đá, lũa để trú ẩn, nước mềm ấm 26–30°C.",
    origin: "Sông Amazon, Brazil", size: "12–15 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/pleco_1.jpg", "assets/img/pleco_2.jpg"]
  },
  {
    vn: "Cá Diếc Vảy Rồng", en: "Odessa Barb", img: "odiec_1.jpg", photo: true, price: 32000,
        he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Diếc Vảy Rồng (Pethia padamya, thường gọi là Odessa Barb) là dòng cá cảnh nhỏ thuộc họ Cyprinidae có nguồn gốc từ miền trung Myanmar, đặc biệt ở hạ lưu sông Chindwin. Cá nổi bật với thân bạc ánh kim có sọc đen dọc lưng kết hợp dải đỏ cam rực rỡ chạy dọc thân tạo vẻ ngoài sặc sỡ bắt mắt. Là loài cá bơi đàn linh hoạt, hiền lành, dễ chăm — rất phù hợp thả trong các bể thủy sinh cộng đồng, nên nuôi nhóm từ 6–8 con trở lên để cá dạn, lên màu đẹp và bơi theo đàn.",
        origin: "Hạ lưu sông Chindwin, Myanmar", size: "4–5 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/odiec_1.jpg", "assets/img/odiec_2.jpg"],
        video: "https://www.facebook.com/reel/4592676834339117/"
  },
  {
    vn: "Cá Mương Hoa Lục An", en: "Lục An Zacco", img: "luclan_1.jpg", photo: true, price: 366000,
    he: "Hệ Suối", tank: "Suối, Biotope, Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Mương Hoa Lục An (Zacco platypus) là dòng cá mương nước ngọt có nguồn gốc từ khu vực Lục An, An Huy, Trung Quốc. Đây là dòng cá suối được ưa chuộng nhờ màu sắc nổi bật, dáng bơi linh hoạt và rất hợp với các bể biotope suối đá. Cá hiền, bơi khỏe, ưa sống theo đàn và hoạt động liên tục — phù hợp bể suối có dòng chảy, nước sạch, nhiều oxy, nền sỏi đá.",
    origin: "Lục An, An Huy, Trung Quốc", size: "20 cm", promo: "Cá mới về", contactText: "", combo: {3:348000,5:312000,10:294000}, gallery: ["assets/img/luclan_1.jpg", "assets/img/luclan_2.jpg"]
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
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Goyder (Goyder River Rainbowfish) là loài cá bảy màu Úc nổi tiếng với dải ánh kim lam – tím chạy dọc lưng và thân sau đỏ rực tương phản cực mạnh. Con trưởng thành càng lớn càng đậm màu, đặc biệt con đực trong đàn có màu sắc rực rỡ nhất. Cá khỏe mạnh, hiền lành, bơi nhanh ở tầng giữa, sống chung tốt với mọi loài vừa và nhỏ — lựa chọn tuyệt vời cho bể thủy sinh muốn có điểm nhấn màu đỏ.",
    origin: "Úc (sông Goyder, Bắc Úc)", temp: "22–28°C", size: "6–9 cm", food: "Cám viên mịn, bobo, artemia", promo:"Liên hệ để biết thêm thông tin", contactText:"Liên hệ để biết thêm thông tin", combo:{}, gallery: ["assets/img/goyder_1.jpg", "assets/img/goyder_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Xanh Indo", en: "Blue Rainbowfish", img: "bluerainbow_1.jpg", photo: true, price: 314000,
    he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Cầu Vồng", status: "stock", eventPrice: "Không hỗ trợ",
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
    he: "Hệ Suối", tank: "Thủy Sinh, Suối, Biotop", status: "stock", eventPrice: "Không hỗ trợ",
    desc: "Cá Mương Hoa (Opsariichthys evolans) là một loài cá suối bản địa nổi bật với thân hình thuôn dài, vây dài và những đường vân hoa đẹp mắt. Đây là dòng cá nước ngọt có tính cách thân thiện, ưa hoạt động và rất thích bơi lội. Đặc điểm sinh học và hình thái: tên khoa học Opsariichthys evolans; kích thước tối đa 10–15 cm; là loài cá bơi tầng mặt, ưa sống theo các đàn nhỏ tại khu vực suối, sông; phân bố chủ yếu ở Đông Nam Trung Quốc, Đài Loan và các vùng Đông Bắc Á.",
    origin: "Đông Nam Trung Quốc, Đài Loan và Đông Bắc Á", size: "10–15 cm", promo:"Event 30 days", combo:{3:186000,5:176000,10:167000}, gallery: ["assets/img/muonghoa_1.jpg", "assets/img/muonghoa_2.jpg"]
      },
      {
        vn: "Cá Kim Thơm Hoàng Đế", en: "Emperor Severum", img: "severum_1.jpg", photo: true, price: 414000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Kim Thơm Hoàng Đế / Emperor Severum (Heros severus / Cichlasoma severum) là dòng cá cảnh Nam Mỹ nổi bật với thân hình trứng dẹt, form đô và màu sắc rất rực rỡ. Cá có nền đỏ cam kết hợp các sọc đen đậm chạy dọc thân, điểm thêm ánh xanh lam ở mặt và vây, tạo vẻ đẹp mạnh mẽ, sang và rất nổi bật trong bể. Đặc điểm sinh học và hình thái: tên khoa học Heros severus / Cichlasoma severum; kích thước trưởng thành khoảng 20–25 cm, size phổ biến 10–15 cm; cá bơi tầng giữa, ăn tạp (cám, sâu mồi, giun, thức ăn tươi sạch); khi nhỏ đi theo đàn, khi trưởng thành bắt cặp và có thể hơi lãnh thổ vào mùa sinh sản. Phù hợp bể rộng, nước sạch, nước mềm, pH ổn định.",
        origin: "Nam Mỹ (Amazon)", size: "20–25 cm", promo: "Không có", contactText: "", combo:{3:379500,5:368000,10:345000}, gallery: ["assets/img/severum_1.jpg"]
      },
      {
        vn: "Cá Flame Tetra", en: "Flame Tetra", img: "flame_1.jpg", photo: true, price: 24000,
        he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Flame Tetra (Hyphessobrycon flammeus) là dòng tetra nhỏ hiền lành có nguồn gốc từ vùng nước tĩnh ven sông ở Rio de Janeiro, Brazil. Cá nổi bật với thân đỏ cam rực như ngọn lửa, ánh bạc ở thân và các vây đỏ đậm viền đen — đặc biệt con đực trưởng thành lên màu rất đẹp. Nuôi đàn từ 6–10 con trở lên giúp cá dạn, lên màu đẹp và bơi theo nhóm rất bắt mắt. Cá hiền, phù hợp bể cộng đồng có cây thủy sinh, nước mềm hơi acid, ăn tạp (cám nhỏ, trùn chỉ, artemia).",
        origin: "Rio de Janeiro, Brazil", size: "3–4 cm", promo: "Không có", contactText: "", combo:{3:21600,5:20400,10:19200}, gallery: ["assets/img/flame_1.jpg", "assets/img/flame_2.jpg", "assets/img/flame_3.jpg"]
      },
      {
        vn: "Cá Thạch Mỹ Nhân", en: "Rainbowfish Boeseman's", img: "thachmynhan_1.jpg", photo: true, price: 130000,
            he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
            desc: "Cá Thạch Mỹ Nhân (Melanotaenia boesemani, thường gọi Boeseman's Rainbowfish) là dòng cá cầu vồng nổi bật với thân hình thon dài chia hai mảng màu rõ rệt — nửa đầu ánh xanh lam ánh kim, nửa thân sau và đuôi chuyển sang cam đỏ rực. Cá hiền lành, bơi đàn rất đẹp, ăn tạp và khỏe mạnh, phù hợp bể thủy sinh cộng đồng rộng có nhiều không gian bơi. Nên nuôi nhóm từ 6 con trở lên để cá phát huy màu sắc đẹp nhất.",
            origin: "Hồ Ayamaru, Tây Papua, Indonesia", size: "10–15 cm", promo: "Không có", contactText: "", combo:{3:124000,5:114000,10:104000}, gallery: ["assets/img/thachmynhan_1.jpg"]
                  },
              {
                vn: "Cá Chuột Cafe AB", en: "Corydoras duplicareus", img: "unified_1.jpg?v=2", photo: true, price: 44000,
                he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Chuột Cafe AB (Corydoras duplicareus) là dòng cá chuột cảnh nổi bật với thân ánh nâu cafe, dải sọc đậm chạy ngang mắt và một vệt sáng vàng cam ở gáy. Là loài ăn tạp đáy, hiền lành, hoạt động tích cực theo đàn — nên nuôi nhóm từ 6 con trở lên. Phù hợp bể thủy sinh có nền mềm, nhiều cây và lũa để trú ẩn, nước hơi acid đến trung tính, nhiệt 22–26°C.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Chuột Vene", en: "Corydoras venezuelanus", img: "unified_1.jpg?v=2", photo: true, price: 24000,
                he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Chuột Vene / Orange Venezuelan Corydoras (Corydoras venezuelanus) là dòng cá chuột nổi bật với đốm đen lớn hình oval ở vai và sắc cam rực dọc lưng khi trưởng thành. Cá hiền, sống theo đàn, ăn tạp đáy — nên nuôi nhóm từ 6 con trở lên để cá dạn và lên màu đẹp. Phù hợp bể thủy sinh cộng đồng, nước mềm hơi acid, 22–26°C.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Chuột Adolfoi", en: "Corydoras adolfoi", img: "unified_1.jpg?v=2", photo: true, price: 120000,
                he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Chuột Adolfoi (Corydoras adolfoi) là dòng cá chuột quý hiếm với vệt cam sáng nổi bật trên đỉnh đầu, dải đen chạy dọc lưng và thân ánh bạc. Cá hiền, bơi theo đàn, hoạt động tầng đáy. Phù hợp bể thủy sinh có nền cát mịn, nhiều cây và hang trú ẩn, nước mềm hơi acid 24–28°C. Nuôi nhóm từ 6 con trở lên.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Chuột Panda", en: "Corydoras panda", img: "unified_1.jpg?v=2", photo: true, price: 24000,
                he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Chuột Panda (Corydoras panda) nổi tiếng với các vệt đen ở mắt, vây lưng và gốc đuôi trên nền thân trắng ngà — tạo hình như gấu trúc. Cá hiền, bơi đàn, ăn tạp đáy. Phù hợp bể thủy sinh cộng đồng, nước mềm hơi acid, 22–26°C. Nuôi nhóm 6 con trở lên để cá dạn và lên màu đẹp.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Chuột Muối Tiêu AB Kì Cao", en: "Corydoras habrosus", img: "unified_1.jpg?v=2", photo: true, price: 26000,
                he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn, Nhỏ", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Chuột Muối Tiêu AB Kì Cao / Salt and Pepper Cory (Corydoras habrosus) là một trong những dòng cá chuột nhỏ nhất, thân phủ các đốm đen nhỏ li ti trên nền cát sáng trông như hạt muối tiêu. Cá hiền, bơi đàn rất đẹp, phù hợp bể thủy sinh nano hoặc bể cộng đồng nhỏ. Nuôi nhóm 8–10 con trở lên, nước mềm 22–26°C.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Checked Bard", en: "Dicrossus filamentosus", img: "unified_1.jpg?v=2", photo: true, price: 48000,
                he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhỏ", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Checked Bard / Lyretail Checkerboard Cichlid (Dicrossus filamentosus) là cá cichlid lùn đẹp với hoa văn bàn cờ đen trắng đặc trưng trên thân và vây đuôi hình cánh cung dài ở con đực. Cá hiền, thích hợp bể thủy sinh có nhiều cây và lũa, nước mềm hơi acid ấm 25–29°C. Là dòng cichlid nhỏ rất được ưa chuộng.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Thè Be Viền Vàng", en: "Bujurquina syspilus", img: "unified_1.jpg?v=2", photo: true, price: 122000,
                he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Cộng Đồng", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Thè Be Viền Vàng (Bujurquina syspilus) là dòng cichlid Nam Mỹ hiền lành, nổi bật với thân ánh xanh lục, dải sọc đen dọc thân và viền vàng cam rực rỡ ở vây lưng và vây đuôi. Cá thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C. Đẻ trứng trên lá cây — đặc trưng sinh sản khác biệt của giống Bujurquina.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Thè Be Lava", en: "Andinoacara rivulatus 'Gold Saum'", img: "unified_1.jpg?v=2", photo: true, price: 147000,
                he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Cộng Đồng", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Thè Be Lava / Gold Saum (Andinoacara rivulatus) là dòng cichlid Nam M�y ấn tượng với thân ánh xanh lục đậm, các vảy lấp lánh ánh cam-vàng và viền vây lưng, vây đuôi màu vàng cam rực như dung nham. Cá có tính lãnh thổ vừa, cần bể rộng, nước sạch ổn định 22–28°C. Trưởng thành đẹp nổi bật trong bể cộng đồng lớn.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Thần Tiên Paraiba", en: "Paracheirodon innesi 'Paraiba'", img: "unified_1.jpg?v=2", photo: true, price: 25000,
                he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Thần Tiên Paraiba (Paracheirodon innesi, dòng phối màu xanh sáng rực) là biến thể lai tạo chọn lọc của Neon Tetra với sắc xanh lam sáng phủ toàn thân, nổi bật trong bể thủy sinh ánh sáng dịu. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng. Nuôi nhóm 8–10 con trở lên, nước mềm hơi acid 22–26°C.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
              {
                vn: "Cá Thần Tiên Mana Red Black", en: "Pterophyllum scalare 'Manacapuru Red Back'", img: "unified_1.jpg?v=2", photo: true, price: 65000,
                he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Cộng Đồng", status: "stock", eventPrice: "Không hỗ trợ",
                desc: "Cá Thần Tiên Mana Red Black / Manacapuru Redback Angelfish (Pterophyllum scalare, locality Manacapuru) là dòng thần tiên hoang dại nổi bật với viền lưng đỏ cam đậm chạy từ vây lưng xuống cuống đuôi trên nền thân bạc ánh kim. Cá có dáng đĩa dẹp đặc trưng, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
                gallery: ["assets/img/unified_1.jpg?v=2"]
              },
                
      {
        vn: "Cá Đĩa Tiger HB", en: "Symphysodon aequifasciatus 'Tiger HB'", img: "unified_1.jpg", photo: true, price: 450000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Đĩa Tiger HB (Symphysodon aequifasciatus, dòng Tiger HB / Heckel cross) là dòng cá đĩa cao cấp với hoa văn sọc dọc đậm nét trên nền thân ánh kim, phối màu xanh lục, đỏ và nâu đặc trưng. Cá tính cách hiền, thích hợp bể rộng có nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
        origin: "Lai tạo (gốc Amazon)", size: "15–20 cm", promo: "Không có", contactText: "", combo:{3:413000,5:388000,10:375000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Đĩa Hoa Hồng", en: "Symphysodon aequifasciatus 'Rose'", img: "unified_1.jpg", photo: true, price: 260000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Đĩa Hoa Hồng / Rose Discus là dòng cá đĩa cảnh lai tạo nổi bật với sắc hồng cam phủ đều khắp thân và vây, hoa văn sọc nhạt dần khi trưởng thành. Cá hiền, dáng đĩa tròn dẹp đặc trưng, thích hợp bể thủy sinh nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C.",
        origin: "Lai tạo (Malaysia, Thái Lan)", size: "15–20 cm", promo: "Không có", contactText: "", combo:{3:247000,5:234000,10:221000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Đĩa Beo Body", en: "Symphysodon aequifasciatus 'Leopard Body'", img: "unified_1.jpg", photo: true, price: 450000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Đĩa Beo Body (Symphysodon, dòng Leopard Body) là cá đĩa lai tạo với hoa văn đốm tròn rải đều khắp thân giống da báo trên nền sáng ánh kim. Cá có dáng đĩa tròn dẹp, bơi uyển chuyển, hiền lành. Phù hợp bể thủy sinh cộng đồng rộng, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
        origin: "Lai tạo (Malaysia, Thái Lan)", size: "15–20 cm", promo: "Không có", contactText: "", combo:{3:438000,5:425000,10:400000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Đĩa Bông Nâu", en: "Symphysodon aequifasciatus 'Brown Spotted'", img: "unified_1.jpg", photo: true, price: 190000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Đĩa Bông Nâu (Symphysodon, dòng Brown Spotted) là dòng cá đĩa hoang dã lai tạo với nền thân nâu ấm điểm các đốm sáng nhỏ, sọc dọc nhạt dần khi trưởng thành. Cá hiền, phù hợp bể nhiều cây, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
        origin: "Lai tạo (gốc Amazon)", size: "15–20 cm", promo: "Không có", contactText: "", combo:{3:180000,5:170000,10:150000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Đĩa Bạch Ngọc", en: "Symphysodon aequifasciatus 'White Pearl'", img: "unified_1.jpg", photo: true, price: 190000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Đĩa Bạch Ngọc / White Pearl Discus là dòng cá đĩa lai tạo có nền thân trắng ngà ánh kim, vây trong suốt, hoa văn nhạt. Cá hiền, thích hợp bể nhiều cây và lũa, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
        origin: "Lai tạo (Malaysia, Thái Lan)", size: "15–20 cm", promo: "Không có", contactText: "", combo:{3:180000,5:170000,10:150000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Đĩa Ngũ Sắc Mix", en: "Symphysodon aequifasciatus 'Mixed Colors'", img: "unified_1.jpg", photo: true, price: 190000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Đĩa Ngũ Sắc Mix là dòng cá đĩa phối màu lai tạo nhiều kiểu hoa văn (xanh, đỏ, vàng, xanh dương, bạch ngọc) trong cùng đàn. Mỗi con một màu sắc riêng, tạo bể đĩa sinh động. Cá hiền, nước mềm ấm 28–31°C, thích hợp bể rộng nhiều cây.",
        origin: "Lai tạo (Malaysia, Thái Lan)", size: "15–20 cm", promo: "Không có", contactText: "", combo:{3:180000,5:170000,10:140000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Thần Tiên Koi AB", en: "Pterophyllum scalare 'Koi AB'", img: "unified_1.jpg", photo: true, price: 81000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Cộng Đồng", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Thần Tiên Koi AB (Pterophyllum scalare 'Koi AB') là dòng thần tiên lai tạo nổi bật với phối màu trắng-cam-đen giống cá Koi Nhật, dáng đĩa dẹp và vây dài. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
        origin: "Lai tạo (Brazil, Đông Nam Á)", size: "10–15 cm", promo: "Không có", contactText: "", combo:{3:78000,5:72000,10:66000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Hồng Nhung Vây Dài", en: "Symphysodon 'Red Velvet Longfin'", img: "unified_1.jpg", photo: true, price: 45000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Nhiệt Đới", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Hồng Nhung Vây Dài (Symphysodon, dòng Red Velvet Longfin) là cá đĩa lai tạo với thân đỏ nhung đậm phủ đều, vây bơi dài uyển chuyển, hoa văn sọc dọc nhạt dần. Cá hiền, phù hợp bể nhiều cây, lũa, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
        origin: "Lai tạo (Malaysia, Thái Lan)", size: "15–18 cm", promo: "Không có", contactText: "", combo:{3:42000,5:39000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Congo Albino", en: "Phenacogrammus interruptus 'Albino'", img: "unified_1.jpg", photo: true, price: 165000,
        he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Congo Albino (Phenacogrammus interruptus, dòng Albino) là biến thể bạch tạng của cá tetra Congo với thân ánh bạc-nâu nhạt và vây dài lượn sóng đặc trưng. Cá hiền, bơi đàn rất đẹp, nên nuôi nhóm 6+ con, nước mềm hơi acid 24–28°C, bể thủy sinh cộng đồng nhiều cây.",
        origin: "Lai tạo (gốc Cộng hòa Congo)", size: "6–8 cm", promo: "Không có", contactText: "", combo:{3:150000,5:135000,10:131000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Chuột Botia", en: "Botia striata", img: "unified_1.jpg", photo: true, price: 20000,
        he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Chuột Botia / Zebra Loach (Botia striata) là dòng cá tầng đáy nổi bật với sọc vàng-đen chạy dọc thân như ngựa vằn, kích thước nhỏ hiền lành, hoạt động theo đàn. Cá thích hợp bể thủy sinh có nhiều hang trú ẩn, nền cát mịn, nước mềm 23–27°C. Nuôi nhóm 5+ con.",
        origin: "Ấn Độ (Tây Ghats)", size: "7–10 cm", promo: "Không có", contactText: "", combo:{3:18000,5:17000,10:15000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Thần Tiên Piony", en: "Pterophyllum scalare 'Pinoy'", img: "unified_1.jpg", photo: true, price: 108000,
        he: "Hệ Nhiệt Đới", tank: "Thủy Sinh, Cộng Đồng", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Thần Tiên Piony (Pterophyllum scalare, dòng Pinoy / Philippines Blue) là thần tiên lai tạo nổi bật với thân ánh xanh lam, vảy bạc và vây dài uyển chuyển. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
        origin: "Lai tạo (Philippines, Đông Nam Á)", size: "10–15 cm", promo: "Không có", contactText: "", combo:{3:102000,5:96000,10:90000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },
      {
        vn: "Cá Chuột Mỹ", en: "Corydoras sp. 'United States'", img: "unified_1.jpg", photo: true, price: 157000,
        he: "Hệ Thủy Sinh", tank: "Thủy Sinh, Đàn", status: "stock", eventPrice: "Không hỗ trợ",
        desc: "Cá Chuột Mỹ (Corydoras sp. dòng Mỹ) là dòng cá chuột cảnh lớn nổi bật với thân ánh bạc có đốm đen lớn ở vây lưng và đuôi, kích thước lớn hơn các dòng Corydoras thông thường. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
        origin: "Lai tạo (Hoa Kỳ)", size: "6–8 cm", promo: "Không có", contactText: "", combo:{3:147000,5:143000,10:137000}, gallery: ["assets/img/unified_1.jpg?v=2"]
      },

    ].map(f => ({ ...f, src: (f.photo ? 'assets/img/' : SPR) + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));
