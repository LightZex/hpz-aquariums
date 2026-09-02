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
    desc: "Cá Đĩa Beo Tuyết (Symphysodon aequifasciatus) là dòng cá đĩa cao cấp được lai tạo chọn lọc qua nhiều thế hệ từ dòng Leopard kết hợp với các dòng Albino, nổi bật với nền thân trắng ngà điểm những đốm đỏ cam rải khắp mình tựa hoa văn beo tuyết. Cá có dáng đĩa tròn dẹp đặc trưng, bơi chậm rãi uyển chuyển, tính cách hiền lành nhưng hơi nhút nhát — thích bể nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    origin: "Lai tạo chọn lọc (Malaysia, Thái Lan) từ cá đĩa Amazon", size: "15–20 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/beo_1.jpg", "assets/img/beo_2.jpg"],
        video: "https://www.facebook.com/reel/2310621016011230/"
      },
  {
    vn: "Cá Pleco L155", en: "Snowball Pleco L155", img: "pleco_1.jpg", photo: true, price: 450000,
    desc: "Cá Pleco L155 (Hypancistrus sp. L155) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon (Brazil), nổi bật với thân đen tuyền điểm những đốm trắng to tròn rải đều khắp thân và vây trông như những quả cầu tuyết. Đây là dòng Hypancistrus thuộc nhóm ăn tạp thiên về thức ăn protein (trùn chỉ, artemia, thức ăn viên chìm) hơn là ăn tảo, hoạt động chủ yếu về đêm, tính cách hiền lành nhưng đực trưởng thành có tính lãnh thổ nhẹ. Phù hợp bể thủy sinh có nhiều hang đá, lũa để trú ẩn, nước mềm ấm 26–30°C.",
    origin: "Sông Amazon, Brazil", size: "12–15 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/pleco_1.jpg", "assets/img/pleco_2.jpg"]
  },
  {
    vn: "Cá Diếc Vảy Rồng", en: "Odessa Barb", img: "odiec_1.jpg", photo: true, price: 32000,
        desc: "Cá Diếc Vảy Rồng (Pethia padamya, thường gọi là Odessa Barb) là dòng cá cảnh nhỏ thuộc họ Cyprinidae có nguồn gốc từ miền trung Myanmar, đặc biệt ở hạ lưu sông Chindwin. Cá nổi bật với thân bạc ánh kim có sọc đen dọc lưng kết hợp dải đỏ cam rực rỡ chạy dọc thân tạo vẻ ngoài sặc sỡ bắt mắt. Là loài cá bơi đàn linh hoạt, hiền lành, dễ chăm — rất phù hợp thả trong các bể thủy sinh cộng đồng, nên nuôi nhóm từ 6–8 con trở lên để cá dạn, lên màu đẹp và bơi theo đàn.",
        origin: "Hạ lưu sông Chindwin, Myanmar", size: "4–5 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/odiec_1.jpg", "assets/img/odiec_2.jpg"],
        video: "https://www.facebook.com/reel/4592676834339117/"
  },
  
  {
    vn: "Cá Cầu Vồng Bleheri", en: "Bleheri Rainbowfish", img: "bleheri_1.jpg", photo: true, price: 150000,
    desc: "Cá Cầu Vồng Bleheri (Melanotaenia bleheri) là dòng cá cảnh nước ngọt nổi bật với thân hình thon dài, vảy ánh kim và màu sắc rực rỡ pha giữa cam, đỏ, vàng, xanh lam hoặc xanh lá. Cá có dáng bơi linh hoạt, tính cách hiền lành, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi và ánh sáng nhẹ để lên màu đẹp. Ăn tạp (cám hạt, thức ăn đông lạnh), khỏe mạnh và dễ chăm sóc.",
    origin: "Sông Après, Papua New Guinea", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:145000,5:136000,10:127000}, gallery: ["assets/img/bleheri_1.jpg", "assets/img/bleheri_2.jpg"]
  },
  {
    vn: "Cá Red Cherry AB Longfin", en: "Red Cherry AB Longfin", img: "redcherry_1.jpg", photo: true, price: 40000,
    desc: "Cá Red Cherry AB Longfin là dòng cá cảnh nước ngọt nổi bật với sắc đỏ rực rỡ cùng bộ vây dài mềm mại, thướt tha khi bơi. Cá có tính cách hiền hòa, hơi nhút nhát, rất phù hợp nuôi theo đàn trong các bể thủy sinh nhiều cây, lũa và đá. Bơi ở tầng giữa, tính xã hội cao — nên nuôi nhóm 6–10 con để cá dạn và lên màu đẹp. Ăn tạp (cám hạt, thức ăn đông lạnh, bổ sung thức ăn thực vật), khỏe mạnh và dễ chăm sóc.",
    origin: "Biến thể lai longfin (Puntius sp.)", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:34000,5:32000,10:32000}, gallery: ["assets/img/redcherry_1.jpg", "assets/img/redcherry_2.jpg"]
  },
  {
    vn: "Cá Goyder", en: "Goyder River Rainbowfish", img: "goyder_1.jpg", photo: true, price: 112000,
    desc: "Cá Goyder (Goyder River Rainbowfish) là loài cá bảy màu Úc nổi tiếng với dải ánh kim lam – tím chạy dọc lưng và thân sau đỏ rực tương phản cực mạnh. Con trưởng thành càng lớn càng đậm màu, đặc biệt con đực trong đàn có màu sắc rực rỡ nhất. Cá khỏe mạnh, hiền lành, bơi nhanh ở tầng giữa, sống chung tốt với mọi loài vừa và nhỏ — lựa chọn tuyệt vời cho bể thủy sinh muốn có điểm nhấn màu đỏ.",
    origin: "Úc (sông Goyder, Bắc Úc)", temp: "22–28°C", size: "6–9 cm", food: "Cám viên mịn, bobo, artemia", promo:"Liên hệ để biết thêm thông tin", contactText:"Liên hệ để biết thêm thông tin", combo:{}, gallery: ["assets/img/goyder_1.jpg", "assets/img/goyder_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Xanh Indo", en: "Blue Rainbowfish", img: "bluerainbow_1.jpg", photo: true, price: 314000,
    desc: "Cá Cầu Vồng Xanh Indo (Melanotaenia lacustris) là dòng cá cảnh nước ngọt nổi bật với thân hình dẹp, dáng bơi nhanh nhẹn và màu xanh lam sáng rực rất bắt mắt. Cá có tính cách hiền lành, dễ thích nghi, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có không gian bơi thoáng. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn đông lạnh hoặc trùn chỉ), khỏe mạnh và dễ chăm sóc.",
    origin: "Hồ Kutubu, Papua New Guinea", size: "6–9 cm", promo:"Mua 4 tặng 1", combo:{3:251000,5:236000,10:204000}, gallery: ["assets/img/bluerainbow_1.jpg", "assets/img/bluerainbow_2.jpg"]
  },
  {
    vn: "Cá Cầu Vồng Kurumoi", en: "Kurumoi Rainbowfish", img: "kurumoi_1.jpg", photo: true, price: 150000,
    desc: "Cá Cầu Vồng Kurumoi (Melanotaenia sp.) là dòng cá cầu vồng nổi bật với thân hình thon dài, dáng bơi linh hoạt và màu sắc rực rỡ pha giữa xanh lam, vàng, đỏ và đen. Cá có tính cách hiền lành, thân thiện, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn khô hoặc thức ăn sống nhỏ), khỏe mạnh và dễ chăm sóc.",
    origin: "Papua New Guinea", size: "6–10 cm", promo:"Không có", combo:{3:145000,5:136000,10:128000}, gallery: ["assets/img/kurumoi_1.jpg", "assets/img/kurumoi_2.jpg"]
  },
  
      {
        vn: "Cá Flame Tetra", en: "Flame Tetra", img: "flame_1.jpg", photo: true, price: 24000,
        desc: "Cá Flame Tetra (Hyphessobrycon flammeus) là dòng tetra nhỏ hiền lành có nguồn gốc từ vùng nước tĩnh ven sông ở Rio de Janeiro, Brazil. Cá nổi bật với thân đỏ cam rực như ngọn lửa, ánh bạc ở thân và các vây đỏ đậm viền đen — đặc biệt con đực trưởng thành lên màu rất đẹp. Nuôi đàn từ 6–10 con trở lên giúp cá dạn, lên màu đẹp và bơi theo nhóm rất bắt mắt. Cá hiền, phù hợp bể cộng đồng có cây thủy sinh, nước mềm hơi acid, ăn tạp (cám nhỏ, trùn chỉ, artemia).",
        origin: "Rio de Janeiro, Brazil", size: "3–4 cm", promo: "Không có", contactText: "", combo:{3:21600,5:20400,10:19200}, gallery: ["assets/img/flame_1.jpg", "assets/img/flame_2.jpg", "assets/img/flame_3.jpg"]
      },
      {
        vn: "Cá Thạch Mỹ Nhân", en: "Rainbowfish Boeseman's", img: "thachmynhan_1.jpg", photo: true, price: 130000,
            desc: "Cá Thạch Mỹ Nhân (Melanotaenia boesemani, thường gọi Boeseman's Rainbowfish) là dòng cá cầu vồng nổi bật với thân hình thon dài chia hai mảng màu rõ rệt — nửa đầu ánh xanh lam ánh kim, nửa thân sau và đuôi chuyển sang cam đỏ rực. Cá hiền lành, bơi đàn rất đẹp, ăn tạp và khỏe mạnh, phù hợp bể thủy sinh cộng đồng rộng có nhiều không gian bơi. Nên nuôi nhóm từ 6 con trở lên để cá phát huy màu sắc đẹp nhất.",
            origin: "Hồ Ayamaru, Tây Papua, Indonesia", size: "10–15 cm", promo: "Không có", contactText: "", combo:{3:124000,5:114000,10:104000}, gallery: ["assets/img/thachmynhan_1.jpg"]
                  },
              {
                vn: "Cá Chuột Cafe AB", en: "Corydoras duplicareus", img: "chuot_cafe_ab.jpg", photo: true, price: 44000,
                desc: "Cá Chuột Cafe AB (Corydoras duplicareus) là dòng cá chuột cảnh nổi bật với thân ánh nâu cafe, dải sọc đậm chạy ngang mắt và một vệt sáng vàng cam ở gáy. Là loài ăn tạp đáy, hiền lành, hoạt động tích cực theo đàn — nên nuôi nhóm từ 6 con trở lên. Phù hợp bể thủy sinh có nền mềm, nhiều cây và lũa để trú ẩn, nước hơi acid đến trung tính, nhiệt 22–26°C.",
                combo: {3:38000,5:35000,10:32000},
                gallery: ["assets/img/chuot_cafe_ab.jpg", "assets/img/chuot_cafe_ab.jpg"]
              },
              {
                vn: "Cá Chuột Vene", en: "Corydoras venezuelanus", img: "chuot_vene.jpg", photo: true, price: 24000,
                desc: "Cá Chuột Vene / Orange Venezuelan Corydoras (Corydoras venezuelanus) là dòng cá chuột nổi bật với đốm đen lớn hình oval ở vai và sắc cam rực dọc lưng khi trưởng thành. Cá hiền, sống theo đàn, ăn tạp đáy — nên nuôi nhóm từ 6 con trở lên để cá dạn và lên màu đẹp. Phù hợp bể thủy sinh cộng đồng, nước mềm hơi acid, 22–26°C.",
                gallery: ["assets/img/chuot_vene.jpg", "assets/img/chuot_vene.jpg"]
              },
              {
                vn: "Cá Chuột Adolfoi", en: "Corydoras adolfoi", img: "chuot_adolfoi.jpg", photo: true, price: 120000,
                desc: "Cá Chuột Adolfoi (Corydoras adolfoi) là dòng cá chuột quý hiếm với vệt cam sáng nổi bật trên đỉnh đầu, dải đen chạy dọc lưng và thân ánh bạc. Cá hiền, bơi theo đàn, hoạt động tầng đáy. Phù hợp bể thủy sinh có nền cát mịn, nhiều cây và hang trú ẩn, nước mềm hơi acid 24–28°C. Nuôi nhóm từ 6 con trở lên.",
                gallery: ["assets/img/chuot_adolfoi.jpg", "assets/img/chuot_adolfoi.jpg"]
              },
              {
                vn: "Cá Chuột Panda", en: "Corydoras panda", img: "chuot_panda.jpg", photo: true, price: 24000,
                desc: "Cá Chuột Panda (Corydoras panda) nổi tiếng với các vệt đen ở mắt, vây lưng và gốc đuôi trên nền thân trắng ngà — tạo hình như gấu trúc. Cá hiền, bơi đàn, ăn tạp đáy. Phù hợp bể thủy sinh cộng đồng, nước mềm hơi acid, 22–26°C. Nuôi nhóm 6 con trở lên để cá dạn và lên màu đẹp.",
                gallery: ["assets/img/chuot_panda.jpg", "assets/img/chuot_panda.jpg"]
              },
              {
                vn: "Cá Chuột Muối Tiêu AB Kì Cao", en: "Corydoras habrosus", img: "chuot_muoi_tieu.jpg", photo: true, price: 26000,
                desc: "Cá Chuột Muối Tiêu AB Kì Cao / Salt and Pepper Cory (Corydoras habrosus) là một trong những dòng cá chuột nhỏ nhất, thân phủ các đốm đen nhỏ li ti trên nền cát sáng trông như hạt muối tiêu. Cá hiền, bơi đàn rất đẹp, phù hợp bể thủy sinh nano hoặc bể cộng đồng nhỏ. Nuôi nhóm 8–10 con trở lên, nước mềm 22–26°C.",
                gallery: ["assets/img/chuot_muoi_tieu.jpg", "assets/img/chuot_muoi_tieu.jpg"]
              },
              {
                vn: "Cá Checkered Bard", en: "Dicrossus filamentosus", img: "checkered_bard.jpg", photo: true, price: 48000,
                desc: "Cá Checkered Bard / Lyretail Checkerboard Cichlid (Dicrossus filamentosus) là cá cichlid lùn đẹp với hoa văn bàn cờ đen trắng đặc trưng trên thân và vây đuôi hình cánh cung dài ở con đực. Cá hiền, thích hợp bể thủy sinh có nhiều cây và lũa, nước mềm hơi acid ấm 25–29°C. Là dòng cichlid nhỏ rất được ưa chuộng.",
                gallery: ["assets/img/chuot_muoi_tieu.jpg", "assets/img/chuot_muoi_tieu.jpg"]
              },
              {
                vn: "Cá Thè Be Viền Vàng", en: "Bujurquina syspilus", img: "the_be_vien_vang.jpg", photo: true, price: 122000,
                desc: "Cá Thè Be Viền Vàng (Bujurquina syspilus) là dòng cichlid Nam Mỹ hiền lành, nổi bật với thân ánh xanh lục, dải sọc đen dọc thân và viền vàng cam rực rỡ ở vây lưng và vây đuôi. Cá thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C. Đẻ trứng trên lá cây — đặc trưng sinh sản khác biệt của giống Bujurquina.",
                gallery: ["assets/img/the_be_vien_vang.jpg", "assets/img/the_be_vien_vang.jpg"]
              },
              {
                vn: "Cá Thè Be Lava", en: "Andinoacara rivulatus 'Gold Saum'", img: "cá_thè_be_lava.jpg", photo: true, price:147000,
                desc: "Cá Thè Be Lava / Gold Saum (Andinoacara rivulatus) là dòng cichlid Nam M�y ấn tượng với thân ánh xanh lục đậm, các vảy lấp lánh ánh cam-vàng và viền vây lưng, vây đuôi màu vàng cam rực như dung nham. Cá có tính lãnh thổ vừa, cần bể rộng, nước sạch ổn định 22–28°C. Trưởng thành đẹp nổi bật trong bể cộng đồng lớn.",
    gallery: ["assets/img/cá_thè_be_lava.jpg"]
              },
              {
                vn: "Cá Thần Tiên Paraiba", en: "Paracheirodon innesi 'Paraiba'", img: "cá_thần_tiên_paraiba.jpg", photo: true, price:25000,
                desc: "Cá Thần Tiên Paraiba (Paracheirodon innesi, dòng phối màu xanh sáng rực) là biến thể lai tạo chọn lọc của Neon Tetra với sắc xanh lam sáng phủ toàn thân, nổi bật trong bể thủy sinh ánh sáng dịu. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng. Nuôi nhóm 8–10 con trở lên, nước mềm hơi acid 22–26°C.",
    gallery: ["assets/img/cá_thần_tiên_paraiba.jpg"]
              },
              {
                vn: "Cá Thần Tiên Mana Red Black", en: "Pterophyllum scalare 'Manacapuru Red Back'", img: "cá_thần_tiên_mana_red_back.jpg", photo: true, price:65000,
                desc: "Cá Thần Tiên Mana Red Black / Manacapuru Redback Angelfish (Pterophyllum scalare, locality Manacapuru) là dòng thần tiên hoang dại nổi bật với viền lưng đỏ cam đậm chạy từ vây lưng xuống cuống đuôi trên nền thân bạc ánh kim. Cá có dáng đĩa dẹp đặc trưng, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
    gallery: ["assets/img/cá_thần_tiên_mana_red_back.jpg"]
              },
                
      {
        vn: "Cá Đĩa Tiger HB", en: "Symphysodon aequifasciatus 'Tiger HB'", img: "cá_đĩa_tiger_hb.jpg", photo: true, price:450000,
        desc: "Cá Đĩa Tiger HB (Symphysodon aequifasciatus, dòng Tiger HB / Heckel cross) là dòng cá đĩa cao cấp với hoa văn sọc dọc đậm nét trên nền thân ánh kim, phối màu xanh lục, đỏ và nâu đặc trưng. Cá tính cách hiền, thích hợp bể rộng có nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    gallery: ["assets/img/cá_đĩa_tiger_hb.jpg"]
      },
      {
        vn: "Cá Đĩa Hoa Hồng", en: "Symphysodon aequifasciatus 'Rose'", img: "cá_đĩa_hoa_hồng.jpg", photo: true, price:260000,
        desc: "Cá Đĩa Hoa Hồng / Rose Discus là dòng cá đĩa cảnh lai tạo nổi bật với sắc hồng cam phủ đều khắp thân và vây, hoa văn sọc nhạt dần khi trưởng thành. Cá hiền, dáng đĩa tròn dẹp đặc trưng, thích hợp bể thủy sinh nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C.",
    gallery: ["assets/img/cá_đĩa_hoa_hồng.jpg"]
      },
      {
        vn: "Cá Đĩa Beo Body", en: "Symphysodon aequifasciatus 'Leopard Body'", img: "cá_đĩa_beo_body.jpg", photo: true, price:450000,
        desc: "Cá Đĩa Beo Body (Symphysodon, dòng Leopard Body) là cá đĩa lai tạo với hoa văn đốm tròn rải đều khắp thân giống da báo trên nền sáng ánh kim. Cá có dáng đĩa tròn dẹp, bơi uyển chuyển, hiền lành. Phù hợp bể thủy sinh cộng đồng rộng, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
    gallery: ["assets/img/cá_đĩa_beo_body.jpg"]
      },
      {
        vn: "Cá Đĩa Bông Nâu", en: "Symphysodon aequifasciatus 'Brown Spotted'", img: "cá_đĩa_bông_nâu.jpg", photo: true, price:190000,
        desc: "Cá Đĩa Bông Nâu (Symphysodon, dòng Brown Spotted) là dòng cá đĩa hoang dã lai tạo với nền thân nâu ấm điểm các đốm sáng nhỏ, sọc dọc nhạt dần khi trưởng thành. Cá hiền, phù hợp bể nhiều cây, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
    gallery: ["assets/img/cá_đĩa_bông_nâu.jpg"]
      },
      {
        vn: "Cá Đĩa Bạch Ngọc", en: "Symphysodon aequifasciatus 'White Pearl'", img: "cá_đĩa_bạch_ngọc.jpg", photo: true, price:190000,
        desc: "Cá Đĩa Bạch Ngọc / White Pearl Discus là dòng cá đĩa lai tạo có nền thân trắng ngà ánh kim, vây trong suốt, hoa văn nhạt. Cá hiền, thích hợp bể nhiều cây và lũa, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    gallery: ["assets/img/cá_đĩa_bạch_ngọc.jpg"]
      },
      {
        vn: "Cá Đĩa Ngũ Sắc Mix", en: "Symphysodon aequifasciatus 'Mixed Colors'", img: "cá_đĩa_ngũ_sắc_mix.jpg", photo: true, price:190000,
        desc: "Cá Đĩa Ngũ Sắc Mix là dòng cá đĩa phối màu lai tạo nhiều kiểu hoa văn (xanh, đỏ, vàng, xanh dương, bạch ngọc) trong cùng đàn. Mỗi con một màu sắc riêng, tạo bể đĩa sinh động. Cá hiền, nước mềm ấm 28–31°C, thích hợp bể rộng nhiều cây.",
    gallery: ["assets/img/cá_đĩa_ngũ_sắc_mix.jpg"]
      },
      {
        vn: "Cá Thần Tiên Koi AB", en: "Pterophyllum scalare 'Koi AB'", img: "cá_thần_tiên_koi_ab.jpg", photo: true, price:81000,
        desc: "Cá Thần Tiên Koi AB (Pterophyllum scalare 'Koi AB') là dòng thần tiên lai tạo nổi bật với phối màu trắng-cam-đen giống cá Koi Nhật, dáng đĩa dẹp và vây dài. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
    gallery: ["assets/img/cá_thần_tiên_koi_ab.jpg"]
      },
      {
        vn: "Cá Hồng Nhung Vây Dài", en: "Symphysodon 'Red Velvet Longfin'", img: "cá_hồng_nhung_vây_dài.jpg", photo: true, price:45000,
        desc: "Cá Hồng Nhung Vây Dài (Symphysodon, dòng Red Velvet Longfin) là cá đĩa lai tạo với thân đỏ nhung đậm phủ đều, vây bơi dài uyển chuyển, hoa văn sọc dọc nhạt dần. Cá hiền, phù hợp bể nhiều cây, lũa, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
    gallery: ["assets/img/cá_hồng_nhung_vây_dài.jpg"]
      },
      {
        vn: "Cá Congo Albino", en: "Phenacogrammus interruptus 'Albino'", img: "cá_congo_albino.jpg", photo: true, price:165000,
        desc: "Cá Congo Albino (Phenacogrammus interruptus, dòng Albino) là biến thể bạch tạng của cá tetra Congo với thân ánh bạc-nâu nhạt và vây dài lượn sóng đặc trưng. Cá hiền, bơi đàn rất đẹp, nên nuôi nhóm 6+ con, nước mềm hơi acid 24–28°C, bể thủy sinh cộng đồng nhiều cây.",
    gallery: ["assets/img/cá_congo_albino.jpg"]
      },
      {
        vn: "Cá Chuột Botia", en: "Botia striata", img: "cá_chuột_botia.jpg", photo: true, price:20000,
        desc: "Cá Chuột Botia / Zebra Loach (Botia striata) là dòng cá tầng đáy nổi bật với sọc vàng-đen chạy dọc thân như ngựa vằn, kích thước nhỏ hiền lành, hoạt động theo đàn. Cá thích hợp bể thủy sinh có nhiều hang trú ẩn, nền cát mịn, nước mềm 23–27°C. Nuôi nhóm 5+ con.",
    gallery: ["assets/img/cá_chuột_botia.jpg"]
      },
      {
        vn: "Cá Thần Tiên Piony", en: "Pterophyllum scalare 'Pinoy'", img: "cá_thần_tiên_piony.jpg", photo: true, price:108000,
        desc: "Cá Thần Tiên Piony (Pterophyllum scalare, dòng Pinoy / Philippines Blue) là thần tiên lai tạo nổi bật với thân ánh xanh lam, vảy bạc và vây dài uyển chuyển. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
    gallery: ["assets/img/cá_thần_tiên_piony.jpg"]
      },
      

    {
      vn: "Cá Ryukin", en: "Ryukin Goldfish", img: "unified_1.jpg", photo: true, price: 198000,
      desc: "Cá Ryukin là dòng cá vàng đuôi dài nổi bật với phần lưng gù cao đặc trưng và vây đuôi xòe rộng ba chia. Cá hiền lành, bơi chậm rãi, phù hợp bể ngoại cảnh hoặc bể trong nhà rộng, nước sạch 18–24°C.",
      origin: "Lai tạo chọn lọc từ cá vàng Nhật Bản", size: "4–5 cm", promo: "Không có", contactText: "", combo: {3:178000,5:168000,10:158000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thần Tiên Altum Peru", en: "Altum Angelfish Peru", img: "unified_1.jpg", photo: true, price: 176000,
      desc: "Cá Thần Tiên Altum Peru (Pterophyllum altum) là dòng thần tiên hoang dã quý hiếm có nguồn gốc từ lưu vực sông Amazon Peru và Colombia, nổi bật với dáng cao, vây dài uyển chuyển và sọc dọc đậm nét. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Sông Amazon, Peru", size: "3–3+ cm", promo: "Không có", contactText: "", combo: {3:360000,5:350000,10:320000}, gallery: ["assets/img/unified_1.jpg"]
    },
    
    {
      vn: "Cá Black Ruby", en: "Black Ruby Barb", img: "unified_1.jpg", photo: true, price: 80000,
      desc: "Cá Black Ruby (Pethia nigrofasciata) là dòng cá cảnh bơi đàn nổi bật với con đực trưởng thành có thân đỏ sậm ánh ruby tương phản với sọc đen dọc thân. Cá hiền, khỏe, phù hợp bể cộng đồng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Sri Lanka", size: "5–6 cm", promo: "Không có", contactText: "", combo: {3:72000,5:68000,10:64000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Tỳ Bà Bướm Muối Tiêu", en: "Salt and Pepper Pleco", img: "unified_1.jpg", photo: true, price: 18000,
      desc: "Cá Tỳ Bà Bướm Muối Tiêu là dòng cá lau kiếng nhỏ nổi bật với thân điểm đốm đen nhỏ li ti trên nền sáng giống hạt muối tiêu. Cá hiền, ăn tảo và thức ăn đáy, phù hợp bể thủy sinh có nhiều lũa đá, nước 22–26°C.",
      origin: "Nam Mỹ", size: "Cối (nhỏ)", promo: "Không có", contactText: "", combo: {3:13000,5:12000,10:11000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Bống Tê Giác", en: "Rhino Goby", img: "unified_1.jpg", photo: true, price: 20000,
      desc: "Cá Bống Tê Giác là dòng cá tầng đáy nổi bật với phần đầu có sừng nhỏ đặc trưng và thân phủ đốm. Cá hiền, ăn tạp đáy, phù hợp bể có nền cát mịn và nhiều hang trú ẩn, nước 22–26°C.",
      origin: "Đông Nam Á", size: "Cối (nhỏ)", promo: "Không có", contactText: "", combo: {3:18000,5:17000,10:16000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Bảo Liên Đăng", en: "Bao Lien Dang", img: "unified_1.jpg", photo: true, price: 92000,
          desc: "Cá Bảo Liên Đăng là dòng cá cảnh nước ngọt nổi bật với sắc cam đỏ ánh kim và vây dài uyển chuyển. Cá hiền, khỏe, bơi đàn, phù hợp bể thủy sinh cộng đồng nhiều cây, nên nuôi nhóm 6+ con, nước 22–26°C.",
          origin: "Châu Á", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:80000,5:74000,10:67000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Hỏa Liên Đăng", en: "Hoa Lien Dang", img: "unified_1.jpg", photo: true, price: 79000,
          desc: "Cá Hỏa Liên Đăng là dòng cá cảnh nước ngọt nổi bật với sắc đỏ ánh lửa và vây dài uyển chuyển. Cá hiền, khỏe, bơi đàn, phù hợp bể thủy sinh cộng đồng nhiều cây, nên nuôi nhóm 6+ con, nước 22–26°C.",
          origin: "Châu Á", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:48000,5:45000,10:42000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Thè Be Bướm TQ Viền Trắng", en: "Chinese Butterfly Cichlid White Edge", img: "unified_1.jpg", photo: true, price: 84000,
          desc: "Cá Thè Be Bướm TQ Viền Trắng là dòng cichlid Trung Quốc nổi bật với viền trắng đặc trưng ở vây lưng và vây đuôi. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
          origin: "Trung Quốc", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:78000,5:72000,10:68000}, gallery: ["assets/img/unified_1.jpg"]
        },
        
        {
          vn: "Cá Rohani", en: "Rohani Barb", img: "unified_1.jpg", photo: true, price: 114000,
          desc: "Cá Rohani (Puntius rohani) là dòng cá cảnh bơi đàn nổi bật với thân ánh kim và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng, nên nuôi nhóm 6+ con, nước 22–26°C.",
          origin: "Đông Nam Á", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:104000,5:96000,10:88000}, gallery: ["assets/img/unified_1.jpg"]
        },
        
        {
          vn: "Cá Longfin 24k", en: "24k Longfin Goldfish", img: "unified_1.jpg", photo: true, price: 86000,
          desc: "Cá Longfin 24k là dòng cá vàng vây dài nổi bật với sắc vàng ánh kim óng ánh và bộ vây dài uyển chuyển. Cá hiền, bơi chậm, phù hợp bể rộng nước sạch 18–24°C.",
          origin: "Lai tạo chọn lọc", size: "4–5 cm", promo: "Không có", contactText: "", combo: {3:74000,5:72000,10:65000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Thần Tiên Blue Ghost", en: "Blue Ghost Angelfish", img: "unified_1.jpg", photo: true, price: 21000,
          desc: "Cá Thần Tiên Blue Ghost là dòng thần tiên lai tạo nổi bật với sắc xanh lam nhạt ánh bạc đặc trưng. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
          origin: "Lai tạo chọn lọc", size: "3–3+ cm", promo: "Không có", contactText: "", combo: {3:15000,5:14000,10:13000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Hải Hồ AB", en: "Short Seahorse", img: "unified_1.jpg", photo: true, price: 473000,
          desc: "Cá Hải Hồ Short là dòng cá cảnh nước ngọt nổi bật với dáng đứng đặc trưng và kích tháng nhỏ gọn. Cá hiền, hoạt động chậm, thích hợp bể riêng yên tĩnh có nhiều cây và hang trú ẩn, nước ổn định 24–28°C.",
          origin: "Lai tạo chọn lọc", size: "6–8 cm", promo: "Không có", contactText: "", combo: {3:455000,5:438000,10:420000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Thần Tiên Isabel", en: "Isabel Angelfish", img: "unified_1.jpg", photo: true, price: 378000,
          desc: "Cá Thần Tiên Isabel là dòng thần tiên lai tạo nổi bật với sắc vàng ánh kim và hoa văn độc đáo trên thân. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
          origin: "Lai tạo chọn lọc", size: "5–6 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Shortfin 24k", en: "24k Shortfin Goldfish", img: "unified_1.jpg", photo: true, price: 45000,
          desc: "Cá Shortfin 24k là dòng cá vàng vây ngắn nổi bật với sắc vàng ánh kim óng ánh đặc trưng. Cá hiền, bơi chậm, phù hợp bể rộng nước sạch 18–24°C.",
          origin: "Lai tạo chọn lọc", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:41000,5:40000,10:39000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Kim Thơm", en: "Severum Gold", img: "unified_1.jpg", photo: true, price: 270000,
          dedesc: "Cá Đĩa Bông Xanh (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với sắc xanh ánh kim phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:250000,5:235000,10:221000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Đĩa Xanh Lam", en: "Blue Discus", img: "unified_1.jpg", photo: true, price: 319000,
          desc: "Cá Đĩa Xanh Lam (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với sắc xanh lam ánh kim phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:301000,5:283000,10:248000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Đĩa Chỉ Nâu", en: "Brown Streak Discus", img: "unified_1.jpg", photo: true, price: 265000,
          desc: "Cá Đĩa Chỉ Nâu (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với các sọc nâu đậm chạy dọc thân trên nền ánh kim. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:250000,5:235000,10:221000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Đĩa Da Beo", en: "Leopard Discus", img: "unified_1.jpg", photo: true, price: 393000,
          desc: "Cá Đĩa Da Beo (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với hoa văn đốm tròn rải đều khắp thân giống da báo. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:373000,5:352000,10:311000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Đĩa Bồ Câu Đỏ", en: "Red Pigeon Discus", img: "unified_1.jpg", photo: true, price: 208000,
          desc: "Cá Đĩa Bồ Câu Đỏ (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với sắc đỏ cam phủ đều khắp thân tựa màu lông bồ câu đỏ. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:195000,5:182000,10:169000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
          vn: "Cá Đĩa Panda Đỏ", en: "Red Panda Discus", img: "unified_1.jpg", photo: true, price: 208000,
          desc: "Cá Đĩa Panda Đỏ (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với các vệt đỏ đậm trên nền trắng tựa hình gấu trúc đỏ. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:195000,5:182000,10:169000}, gallery: ["assets/img/unified_1.jpg"]
        },
        {
      vn: "Cá Pleco L190", en: "Royal Pleco L190", img: "unified_1.jpg", photo: true, price: 1429000,
      desc: "Cá Pleco L190 (Panaque sp.) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon, nổi bật với thân lớn và vảy ánh kim đặc trưng. Cá hiền, ăn tạp, hoạt động về đêm, thích hợp bể rộng có nhiều lũa đá trú ẩn, nước mềm ấm 26–30°C.",
      origin: "Sông Amazon, Nam Mỹ", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:1509000,5:1429000,10:1350000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Pleco L191", en: "Dull Eyed Royal Pleco L191", img: "unified_1.jpg", photo: true, price: 1191000,
      desc: "Cá Pleco L191 (Panaque sp.) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon, nổi bật với thân lớn và vảy ánh kim đặc trưng. Cá hiền, ăn tạp, hoạt động về đêm, thích hợp bể rộng có nhiều lũa đá trú ẩn, nước mềm ấm 26–30°C.",
      origin: "Sông Amazon, Nam Mỹ", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:1131000,5:1042000,10:953000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thè Be Trung Quốc", en: "Chinese Severum", img: "unified_1.jpg", photo: true, price: 57000,
      desc: "Cá Thè Be Trung Quốc là dòng cichlid Trung Quốc nổi bật với sắc cam ánh kim và vây dài đặc trưng. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
      origin: "Trung Quốc", size: "8–10 cm", promo: "Không có", contactText: "", combo: {3:51000,5:48000,10:46000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Mương Hoa TQ", en: "Chinese Zacco", img: "unified_1.jpg", photo: true, price: 161000,
      desc: "Cá Mương Hoa TQ là dòng cá mương nước ngọt có nguồn gốc từ Trung Quốc, nổi bật với sắc ánh kim và vây dài đặc trưng. Cá hiền, bơi khỏe, ưa sống theo đàn — phù hợp bể biotope suối đá có dòng chảy, nước sạch, nhiều oxy, nền sỏi đá.",
      origin: "Trung Quốc", size: "10–13 cm", promo: "Không có", contactText: "", combo: {3:132000,5:125000,10:117000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Trâm Galaxy", en: "Galaxy Rasbora", img: "unified_1.jpg", photo: true, price: 45000,
      desc: "Cá Trâm Galaxy (Danio margaritatus) là dòng cá cảnh nhỏ nổi bật với thân phủ đốm ánh kim lấp lánh như dải ngân hà. Cá hiền, bơi đàn, phù hợp bể thủy sinh nano nhiều cây, nên nuôi nhóm 8–10 con, nước mềm hơi acid 22–26°C.",
      origin: "Myanmar", size: "2–2+ cm", promo: "Không có", contactText: "", combo: {3:40000,5:38000,10:36000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Cánh Cụt Đuôi Đỏ", en: "Red Tail Penguin Tetra", img: "unified_1.jpg", photo: true, price: 45000,
      desc: "Cá Cánh Cụt Đuôi Đỏ / Red Tail Penguin Tetra (Thayeria boehlkei) là dòng tetra bơi nghiêng nổi bật với thân bạc ánh kim và vây đuôi đỏ cam đặc trưng. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng nhiều cây, nên nuôi nhóm 8+ con, nước mềm 22–26°C.",
      origin: "Amazon, Peru", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:40000,5:36000,10:34000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Congo", en: "Congo Tetra", img: "unified_1.jpg", photo: true, price: 80000,
      desc: "Cá Congo Tetra (Phenacogrammus interruptus) là dòng tetra lớn nổi bật với vây dài lượn sóng và sắc ánh kim rực rỡ. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng nhiều cây, nên nuôi nhóm 6+ con, nước mềm hơi acid 24–28°C.",
      origin: "Lưu vực sông Congo, châu Phi", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:76000,5:72000,10:68000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thè Be Bướm TQ Viền Đỏ", en: "Chinese Butterfly Cichlid Red Edge", img: "unified_1.jpg", photo: true, price: 198000,
      desc: "Cá Thè Be Bướm TQ Viền Đỏ là dòng cichlid Trung Quốc nổi bật với viền đỏ rực ở vây lưng và vây đuôi. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
      origin: "Trung Quốc", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:187000,5:177000,10:166000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thè Be Ngũ Sắc", en: "Multicolor Severum", img: "unified_1.jpg", photo: true, price: 27000,
      desc: "Cá Thè Be Ngũ Sắc là dòng cichlid Nam Mỹ nổi bật với hoa văn nhiều màu sắc rực rỡ trên thân. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
      origin: "Nam Mỹ", size: "6–9 cm", promo: "Không có", contactText: "", combo: {3:24000,5:23000,10:18000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bạch Ngọc 10-11", en: "White Pearl Discus 10-11", img: "unified_1.jpg", photo: true, price: 450000,
      desc: "Cá Đĩa Bạch Ngọc (Symphysodon aequifasciatus, dòng White Pearl size 10-11) là dòng cá đĩa lai tạo có nền thân trắng ngà ánh kim, vây trong suốt. Cá hiền, thích hợp bể nhiều cây và lũa, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
      origin: "Lai tạo chọn lọc", size: "10–11 cm", promo: "Không có", contactText: "", combo: {3:425000,5:400000,10:375000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Tiger High Body", en: "Tiger High Body Discus", img: "unified_1.jpg", photo: true, price: 534000,
      desc: "Cá Đĩa Tiger High Body (Symphysodon aequifasciatus) là dòng cá đĩa cao cấp với thân hình dày và hoa văn sọc dọc đậm nét đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:507000,5:454000,10:427000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bông Nâu 7-8", en: "Brown Spotted Discus 7-8", img: "unified_1.jpg", photo: true, price: 208000,
      desc: "Cá Đĩa Bông Nâu (Symphysodon aequifasciatus, dòng Brown Spotted size 7-8) là dòng cá đĩa hoang dã lai tạo với nền thân nâu ấm điểm các đốm sáng nhỏ, sọc dọc nhạt dần khi trưởng thành. Cá hiền, phù hợp bể nhiều cây, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:195000,5:182000,10:169000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Hoa Hồng 7-8", en: "Rose Discus 7-8", img: "unified_1.jpg", photo: true, price: 208000,
      desc: "Cá Đĩa Hoa Hồng (Symphysodon aequifasciatus, dòng Rose size 7-8) là dòng cá đĩa cảnh lai tạo nổi bật với sắc hồng cam phủ đều khắp thân và vây. Cá hiền, dáng đĩa tròn dẹp đặc trưng, thích hợp bể thủy sinh nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:195000,5:182000,10:169000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Đỏ 7-8", en: "Red Discus 7-8", img: "unified_1.jpg", photo: true, price: 208000,
      desc: "Cá Đĩa Đỏ (Symphysodon aequifasciatus, dòng Red size 7-8) là dòng cá đĩa lai tạo nổi bật với sắc đỏ rực phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:195000,5:182000,10:169000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Red Devil AB 8-9", en: "Red Devil Discus 8-9", img: "unified_1.jpg", photo: true, price: 655000,
      desc: "Cá Đĩa Red Devil AB (Symphysodon aequifasciatus, dòng Red Devil AB size 8-9) là dòng cá đĩa cao cấp nổi bật với sắc đỏ rực và hoa văn đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "8–9 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Tiger HB HR 7-8", en: "Tiger HB HR Discus 7-8", img: "unified_1.jpg", photo: true, price: 440000,
      desc: "Cá Đĩa Tiger HB HR (Symphysodon aequifasciatus, dòng Tiger HB HR size 7-8) là dòng cá đĩa cao cấp với hoa văn sọc dọc đậm nét trên nền ánh kim. Cá tính cách hiền, thích hợp bể rộng có nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:380000,5:360000,10:320000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bồ Câu Đỏ HR 8-9", en: "Red Pigeon HR Discus 8-9", img: "unified_1.jpg", photo: true, price: 352000,
      desc: "Cá Đĩa Bồ Câu Đỏ HR (Symphysodon aequifasciatus, dòng Red Pigeon HR size 8-9) là dòng cá đĩa lai tạo nổi bật với sắc đỏ cam phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:320000,5:304000,10:272000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bông Xanh 6-7 LN", en: "Blue Diamond Discus 6-7 LN", img: "unified_1.jpg", photo: true, price: 210000,
      desc: "Cá Đĩa Bông Xanh (Symphysodon aequifasciatus, dòng Blue Diamond LN size 6-7) là dòng cá đĩa lai tạo nổi bật với sắc xanh ánh kim phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:190000,5:185000,10:165000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bông Xanh 8-9 LN", en: "Blue Diamond Discus 8-9 LN", img: "unified_1.jpg", photo: true, price: 74000,
      desc: "Cá Đĩa Bông Xanh (Symphysodon aequifasciatus, dòng Blue Diamond LN size 8-9) là dòng cá đĩa lai tạo nổi bật với sắc xanh ánh kim phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
      origin: "Lai tạo chọn lọc", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:68000,5:65000,10:61000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bông Nâu 6-7 LN", en: "Brown Spotted Discus 6-7 LN", img: "unified_1.jpg", photo: true, price: 273000,
      desc: "Cá Đĩa Bông Nâu (Symphysodon aequifasciatus, dòng Brown Spotted LN size 6-7) là dòng cá đĩa hoang dã lai tạo với nền thân nâu ấm điểm các đốm sáng nhỏ. Cá hiền, phù hợp bể nhiều cây, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:247000,5:241000,10:215000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bông Nâu 8-9 LN", en: "Brown Spotted Discus 8-9 LN", img: "unified_1.jpg", photo: true, price: 449000,
      desc: "Cá Đĩa Bông Nâu (Symphysodon aequifasciatus, dòng Brown Spotted LN size 8-9) là dòng cá đĩa hoang dã lai tạo với nền thân nâu ấm điểm các đốm sáng nhỏ. Cá hiền, phù hợp bể nhiều cây, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:390000,5:370000,10:350000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Chỉ Đỏ 6-7 LN", en: "Red Streak Discus 6-7 LN", img: "unified_1.jpg", photo: true, price: 210000,
      desc: "Cá Đĩa Chỉ Đỏ (Symphysodon aequifasciatus, dòng Red Streak LN size 6-7) là dòng cá đĩa lai tạo nổi bật với các vệt đỏ chạy dọc thân. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:190000,5:185000,10:165000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Valentine Đỏ 6-7 LN", en: "Valentine Red Discus 6-7 LN", img: "unified_1.jpg", photo: true, price: 273000,
      desc: "Cá Đĩa Valentine Đỏ (Symphysodon aequifasciatus, dòng Valentine Red LN size 6-7) là dòng cá đĩa lai tạo nổi bật với sắc đỏ valentine đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:247000,5:241000,10:215000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Xanh Cobalt 6-7 LN", en: "Cobalt Blue Discus 6-7 LN", img: "unified_1.jpg", photo: true, price: 210000,
      desc: "Cá Đĩa Xanh Cobalt (Symphysodon aequifasciatus, dòng Cobalt Blue LN size 6-7) là dòng cá đĩa lai tạo nổi bật với sắc xanh cobalt rực rỡ. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:190000,5:185000,10:165000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Bồ Câu Đỏ/Vàng 8-9 LN", en: "Red Yellow Pigeon Discus 8-9 LN", img: "unified_1.jpg", photo: true, price: 369000,
      desc: "Cá Đĩa Bồ Câu Đỏ/Vàng (Symphysodon aequifasciatus, dòng Red Yellow Pigeon LN size 8-9) là dòng cá đĩa lai tạo nổi bật với sắc đỏ vàng phối hợp. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:351000,5:333000,10:315000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Beo Bi EL", en: "Leopard Discus EL", img: "unified_1.jpg", photo: true, price: 396000,
      desc: "Cá Đĩa Beo Bi (Symphysodon aequifasciatus, dòng Leopard EL) là dòng cá đĩa lai tạo nổi bật với hoa văn đốm beo trên nền ánh kim. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:369000,5:351000,10:324000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Red AB Devil 5-6", en: "Red Devil Discus 5-6", img: "unified_1.jpg", photo: true, price: 169000,
      desc: "Cá Đĩa Red Devil AB (Symphysodon aequifasciatus, dòng Red Devil AB size 5-6) là dòng cá đĩa lai tạo nổi bật với sắc đỏ rực và hoa văn đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "5–6 cm", promo: "Không có", contactText: "", combo: {3:152000,5:144000,10:140000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thần Tiên Altum Atabapo F1", en: "Altum Atabapo F1 Angelfish", img: "unified_1.jpg", photo: true, price: 592000,
      desc: "Cá Thần Tiên Altum Atabapo F1 (Pterophyllum altum) là dòng thần tiên hoang dã F1 quý hiếm có nguồn gốc từ lưu vực sông Atabapo, Nam Mỹ. Cá nổi bật với dáng cao, vây dài uyển chuyển và sọc dọc đậm nét. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Sông Atabapo, Nam Mỹ", size: "3–3+ cm", promo: "Không có", contactText: "", combo: {3:544000,5:512000,10:480000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Hồng My Bóng Đêm Fila", en: "Fila Shark Minnow", img: "unified_1.jpg", photo: true, price: 111000,
      desc: "Cá Hồng My Bóng Đêm Fila là dòng cá cảnh bơi đàn nổi bật với thân ánh kim và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "7–10 cm", promo: "Không có", contactText: "", combo: {3:100000,5:94000,10:83000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Hồng My Bóng Đêm Tambra", en: "Tambra Shark Minnow", img: "unified_1.jpg", photo: true, price: 70000,
      desc: "Cá Hồng My Bóng Đêm Tambra là dòng cá cảnh bơi đàn nổi bật với dáng thon dài và màu ánh kim đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "4–9 cm", promo: "Không có", contactText: "", combo: {3:64000,5:60000,10:56000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Mương Hoa Lục An", en: "Lục An Zacco", img: "luclan_1.jpg", photo: true, price: 362000,
      desc: "Cá Mương Hoa Lục An (Zacco platypus) là dòng cá mương nước ngọt có nguồn gốc từ khu vực Lục An, An Huy, Trung Quốc. Cá hiền, bơi khỏe, ưa sống theo đàn và hoạt động liên tục — phù hợp bể suối có dòng chảy, nước sạch, nhiều oxy, nền sỏi đá.",
      origin: "Lục An, An Huy, Trung Quốc", size: "12–15 cm", promo: "Cá mới về", contactText: "", combo: {3:326000,5:308000,10:271000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Hồng My Ấn Độ", en: "Rosy Barb", img: "unified_1.jpg", photo: true, price: 46000,
      desc: "Cá Hồng My Ấn Độ / Rosy Barb (Pethia conchonius) là dòng cá cảnh bơi đàn nổi bật với sắc hồng ánh kim phủ đều thân và vây. Cá hiền, khỏe, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Nên nuôi nhóm 6–8 con trở lên để cá dạn và lên màu đẹp, nước 22–26°C.",
      origin: "Ấn Độ, Bangladesh", size: "4–10 cm", promo: "Không có", contactText: "", combo: {3:44000,5:38000,10:35000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Chuột Cafe", en: "Corydoras Cafe", img: "unified_1.jpg", photo: true, price: 15000,
      desc: "Cá Chuột Cafe (Corydoras sp.) là dòng cá chuột cảnh nhỏ nổi bật với thân ánh nâu cafe và các vệt sáng đặc trưng. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây và lũa, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
      origin: "Nam Mỹ", size: "3–7 cm", promo: "Không có", contactText: "", combo: {3:14000,5:13000,10:12000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Mị Nương Ngọc Lam", en: "Blue Crystal Parrotfish", img: "unified_1.jpg", photo: true, price: 200000,
      desc: "Cá Mị Nương Ngọc Lam là dòng cá cảnh Trung Quốc nổi bật với sắc xanh ngọc lam ánh kim và dáng thuôn dài đặc trưng. Cá hiền, thích hợp bể cộng đồng rộng, nước mềm 22–26°C.",
      origin: "Trung Quốc", size: "10–18 cm", promo: "Không có", contactText: "", combo: {3:184000,5:168000,10:152000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thần Tiên Pinoy Phẩm Cao", en: "Pinoy Premium Angelfish", img: "unified_1.jpg", photo: true, price: 108000,
      desc: "Cá Thần Tiên Pinoy Phẩm Cao (Pterophyllum scalare, dòng Pinoy phẩm cao size 5-6) là thần tiên lai tạo nổi bật với thân ánh xanh lam, vảy bạc và vây dài uyển chuyển — dòng phẩm cao chọn lọc. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Lai tạo chọn lọc", size: "5–6 cm", promo: "Không có", contactText: "", combo: {3:102000,5:96000,10:90000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Thần Tiên Mana Red Black Phẩm Cao", en: "Mana Red Black Premium Angelfish", img: "unified_1.jpg", photo: true, price: 100000,
      desc: "Cá Thần Tiên Mana Red Black Phẩm Cao (Pterophyllum scalare, dòng Manacapuru Red Back phẩm cao size 3-4) là thần tiên hoang dã nổi bật với viền lưng đỏ cam đậm — dòng phẩm cao chọn lọc. Cá có dáng đĩa dẹp đặc trưng, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Lai tạo chọn lọc", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:93000,5:85000,10:80000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Đĩa Beo Tuyết 9-10", en: "Snow Leopard Discus 9-10", img: "unified_1.jpg", photo: true, price: 630000,
      desc: "Cá Đĩa Beo Tuyết 9-10 (Symphysodon aequifasciatus, dòng Snow Leopard size 9-10 hiền ruby) là dòng cá đĩa cao cấp được lai tạo chọn lọc qua nhiều thế hệ. Cá có nền thân trắng ngà điểm những đốm đỏ cam rải khắp mình tựa hoa văn beo tuyết. Cá hiền lành nhưng hơi nhút nhát — thích bể nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "9–10 cm", promo: "Không có", contactText: "", combo: {3:595000,5:560000,10:525000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Chuột Black Vene", en: "Black Vene Cory", img: "unified_1.jpg", photo: true, price: 116000,
      desc: "Cá Chuột Black Vene là dòng cá chuột cảnh nổi bật với thân đen ánh kim và hoa văn đặc trưng. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây và lũa, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
      origin: "Lai tạo chọn lọc", size: "4–5 cm", promo: "Không có", contactText: "", combo: {3:107000,5:99000,10:96000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá HMBD Tambra", en: "HMBD Tambra Shark", img: "unified_1.jpg", photo: true, price: 368000,
      desc: "Cá HMBD Tambra là dòng cá cảnh bơi đàn nổi bật với dáng thon dài và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "8–10 cm", promo: "Không có", contactText: "", combo: {3:345000,5:334000,10:322000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Tambra 10 Kì Dài", en: "Tambra Long Fin 10cm", img: "unified_1.jpg", photo: true, price: 414000,
      desc: "Cá Tambra 10 Kì Dài là dòng cá cảnh bơi đàn nổi bật với vây kì dài uyển chuyển và màu ánh kim. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "10 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá HMBD Rohani", en: "HMBD Rohani Shark", img: "unified_1.jpg", photo: true, price: 117000,
      desc: "Cá HMBD Rohani là dòng cá cảnh bơi đàn nổi bật với dáng thon dài và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "8–10 cm", promo: "Không có", contactText: "", combo: {3:111000,5:104000,10:98000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Hồng My Gold 6-7", en: "Gold Rosy Barb 6-7", img: "unified_1.jpg", photo: true, price: 449000,
      desc: "Cá Hồng My Gold 6-7 là dòng cá cảnh bơi đàn nổi bật với sắc vàng ánh kim phủ đều thân và vây. Cá hiền, khỏe, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Nên nuôi nhóm 6–8 con trở lên, nước 22–26°C.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Mương Hoa Chiết Giang", en: "Opsariichthys evolans", img: "muonghoa_1.jpg", photo: true, price: 186000,
      desc: "Cá Mương Hoa (Opsariichthys evolans) là một loài cá suối bản địa nổi bật với thân hình thuôn dài, vây dài và những đường vân hoa đẹp mắt. Đây là dòng cá nước ngọt có tính cách thân thiện, ưa hoạt động và rất thích bơi lội. Phân bố chủ yếu ở Đông Nam Trung Quốc, Đài Loan và các vùng Đông Bắc Á.",
      origin: "Đông Nam Trung Quốc, Đài Loan", size: "7–14 cm", promo: "Không có", contactText: "", combo: {3:170000,5:162000,10:145000}, gallery: ["assets/img/unified_1.jpg"]
    },
    {
      vn: "Cá Chuột Mỹ", en: "United States Cory", img: "cá_chuột_mỹ.jpg", photo: true, price: 60000,
      desc: "Cá Chuột Mỹ (Corydoras sp. dòng Mỹ) là dòng cá chuột cảnh lớn nổi bật với thân ánh bạc có đốm đen lớn ở vây lưng và đuôi, kích thước lớn hơn các dòng Corydoras thông thường. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
      origin: "Hoa Kỳ", size: "3–9 cm", promo: "Không có", contactText: "", combo: {3:54000,5:50000,10:46000}, gallery: ["assets/img/unified_1.jpg"]
    },

    ].map(f => ({ ...f, src: (f.photo ? 'assets/img/' : SPR) + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));
