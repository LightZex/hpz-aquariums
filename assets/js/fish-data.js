// HPZ Aquariums - fish catalogue data
// Mỗi phần tử: tên VN, tên EN (dùng lọc search), giá niêm yết (đồng), mô tả + thông tin chăm sóc.
// Ảnh = sprite cá 2D trong scene/ (+ hue xoay màu riêng), hoặc ảnh thật (photo: true).
// Trường chi tiết: he (Hệ), tank (Phù hợp bể), status (Tình trạng), eventPrice (giá event),
//   origin/temp/size/temperament/food (thông số). Thêm cá = thêm 1 object vào mảng.
// Click card -> fish.html?fish=<en>
const SPR = 'assets/img/scene/';
const FISH = [
  {
    vn: "Cá Đĩa Beo Tuyết", en: "Snow Leopard Discus", img: "beo_1.jpg", photo: true, price: "595.000đ - 630.000đ",
    desc: "Cá Đĩa Beo Tuyết (Symphysodon aequifasciatus) là dòng cá đĩa cao cấp được lai tạo chọn lọc qua nhiều thế hệ từ dòng Leopard kết hợp với các dòng Albino, nổi bật với nền thân trắng ngà điểm những đốm đỏ cam rải khắp mình tựa hoa văn beo tuyết. Cá có dáng đĩa tròn dẹp đặc trưng, bơi chậm rãi uyển chuyển, tính cách hiền lành nhưng hơi nhút nhát — thích bể nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    origin: "Lai tạo chọn lọc (Malaysia, Thái Lan) từ cá đĩa Amazon", size: "9–20 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/beo_1.jpg", "assets/img/beo_2.jpg"],
        video: "https://www.facebook.com/reel/2310621016011230/"
      },
{
    vn: "Cá Pleco L155", en: "Snowball Pleco L155", img: "pleco_1.jpg", photo: true, price: 450000,
    desc: "Cá Pleco L155 (Hypancistrus sp. L155) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon (Brazil), nổi bật với thân đen tuyền điểm những đốm trắng to tròn rải đều khắp thân và vây trông như những quả cầu tuyết. Đây là dòng Hypancistrus thuộc nhóm ăn tạp thiên về thức ăn protein (trùn chỉ, artemia, thức ăn viên chìm) hơn là ăn tảo, hoạt động chủ yếu về đêm, tính cách hiền lành nhưng đực trưởng thành có tính lãnh thổ nhẹ. Phù hợp bể thủy sinh có nhiều hang đá, lũa để trú ẩn, nước mềm ấm 26–30°C.",
    origin: "Sông Amazon, Brazil", size: "12–15 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/pleco_1.jpg", "assets/img/pleco_2.jpg"]
  },
{
    vn: "Cá Diếc Vảy Rồng", en: "Odessa Barb", img: "odiec_1.jpg", photo: true, price: "48.000đ",
        desc: "Cá Diếc Vảy Rồng (Pethia padamya, thường gọi là Odessa Barb) là dòng cá cảnh nhỏ thuộc họ Cyprinidae có nguồn gốc từ miền trung Myanmar, đặc biệt ở hạ lưu sông Chindwin. Cá nổi bật với thân bạc ánh kim có sọc đen dọc lưng kết hợp dải đỏ cam rực rỡ chạy dọc thân tạo vẻ ngoài sặc sỡ bắt mắt. Là loài cá bơi đàn linh hoạt, hiền lành, dễ chăm — rất phù hợp thả trong các bể thủy sinh cộng đồng, nên nuôi nhóm từ 6–8 con trở lên để cá dạn, lên màu đẹp và bơi theo đàn.",
        origin: "Hạ lưu sông Chindwin, Myanmar", size: "4–5 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/odiec_1.jpg", "assets/img/odiec_2.jpg"],
        video: "https://www.facebook.com/reel/4592676834339117/"
  },
{
      vn: "Cá Mương Hoa Lục An", en: "Lục An Zacco", img: "luclan_1.jpg", photo: true, price: "366.000đ",
      desc: "Cá Mương Hoa Lục An (Zacco platypus) là dòng cá mương nước ngọt có nguồn gốc từ khu vực Lục An, An Huy, Trung Quốc. Cá hiền, bơi khỏe, ưa sống theo đàn và hoạt động liên tục — phù hợp bể suối có dòng chảy, nước sạch, nhiều oxy, nền sỏi đá.",
      origin: "Lục An, An Huy, Trung Quốc", size: "13–15 cm", promo: "Cá mới về", contactText: "", combo: {3:"348.000đ",5:"312.000đ",10:"294.000đ"}, gallery: ["assets/img/unified_1.jpg"]
    },
{
    vn: "Cá Cầu Vồng Bleheri", en: "Bleheri Rainbowfish", img: "bleheri_1.jpg", photo: true, price: 150000,
    desc: "Cá Cầu Vồng Bleheri (Melanotaenia bleheri) là dòng cá cảnh nước ngọt nổi bật với thân hình thon dài, vảy ánh kim và màu sắc rực rỡ pha giữa cam, đỏ, vàng, xanh lam hoặc xanh lá. Cá có dáng bơi linh hoạt, tính cách hiền lành, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi và ánh sáng nhẹ để lên màu đẹp. Ăn tạp (cám hạt, thức ăn đông lạnh), khỏe mạnh và dễ chăm sóc.",
    origin: "Sông Après, Papua New Guinea", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:145000,5:136000,10:127000}, gallery: ["assets/img/bleheri_1.jpg", "assets/img/bleheri_2.jpg"]
  },
{
    vn: "Cá Red Cherry AB Longfin", en: "Red Cherry AB Longfin", img: "redcherry_1.jpg", photo: true, price: "40.000đ",
    desc: "Cá Red Cherry AB Longfin là dòng cá cảnh nước ngọt nổi bật với sắc đỏ rực rỡ cùng bộ vây dài mềm mại, thướt tha khi bơi. Cá có tính cách hiền hòa, hơi nhút nhát, rất phù hợp nuôi theo đàn trong các bể thủy sinh nhiều cây, lũa và đá. Bơi ở tầng giữa, tính xã hội cao — nên nuôi nhóm 6–10 con để cá dạn và lên màu đẹp. Ăn tạp (cám hạt, thức ăn đông lạnh, bổ sung thức ăn thực vật), khỏe mạnh và dễ chăm sóc.",
    origin: "Biến thể lai longfin (Puntius sp.)", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:"34.000đ",5:"32.000đ",10:"32.000đ"}, gallery: ["assets/img/redcherry_1.jpg", "assets/img/redcherry_2.jpg"]
  },
{
    vn: "Cá Goyder", en: "Goyder River Rainbowfish", img: "goyder_1.jpg", photo: true, price: 112000,
    desc: "Cá Goyder (Goyder River Rainbowfish) là loài cá bảy màu Úc nổi tiếng với dải ánh kim lam – tím chạy dọc lưng và thân sau đỏ rực tương phản cực mạnh. Con trưởng thành càng lớn càng đậm màu, đặc biệt con đực trong đàn có màu sắc rực rỡ nhất. Cá khỏe mạnh, hiền lành, bơi nhanh ở tầng giữa, sống chung tốt với mọi loài vừa và nhỏ — lựa chọn tuyệt vời cho bể thủy sinh muốn có điểm nhấn màu đỏ.",
    origin: "Úc (sông Goyder, Bắc Úc)", temp: "22–28°C", size: "6–9 cm", food: "Cám viên mịn, bobo, artemia", promo:"Liên hệ để biết thêm thông tin", contactText:"Liên hệ để biết thêm thông tin", combo:{}, gallery: ["assets/img/goyder_1.jpg", "assets/img/goyder_2.jpg"]
  },
{
    vn: "Cá Cầu Vồng Xanh Indo", en: "Blue Rainbowfish", img: "bluerainbow_1.jpg", photo: true, price: "234.000đ - 314.000đ",
    desc: "Cá Cầu Vồng Xanh Indo (Melanotaenia lacustris) là dòng cá cảnh nước ngọt nổi bật với thân hình dẹp, dáng bơi nhanh nhẹn và màu xanh lam sáng rực rất bắt mắt. Cá có tính cách hiền lành, dễ thích nghi, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có không gian bơi thoáng. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn đông lạnh hoặc trùn chỉ), khỏe mạnh và dễ chăm sóc.",
    origin: "Hồ Kutubu, Papua New Guinea", size: "6–7 cm", promo:"Mua 4 tặng 1", combo:{3:"211.000đ - 251.000đ",5:"199.000đ - 236.000đ",10:"187.000đ - 204.000đ"}, gallery: ["assets/img/bluerainbow_1.jpg", "assets/img/bluerainbow_2.jpg"]
  },
{
    vn: "Cá Cầu Vồng Kurumoi", en: "Kurumoi Rainbowfish", img: "kurumoi_1.jpg", photo: true, price: 150000,
    desc: "Cá Cầu Vồng Kurumoi (Melanotaenia sp.) là dòng cá cầu vồng nổi bật với thân hình thon dài, dáng bơi linh hoạt và màu sắc rực rỡ pha giữa xanh lam, vàng, đỏ và đen. Cá có tính cách hiền lành, thân thiện, sống hòa đồng theo đàn — rất phù hợp nuôi trong các bể thủy sinh rộng có nhiều không gian bơi. Bơi ở tầng giữa, ăn tạp (cám hạt, thức ăn khô hoặc thức ăn sống nhỏ), khỏe mạnh và dễ chăm sóc.",
    origin: "Papua New Guinea", size: "6–10 cm", promo:"Không có", combo:{3:145000,5:136000,10:128000}, gallery: ["assets/img/kurumoi_1.jpg", "assets/img/kurumoi_2.jpg"]
  },
{
      vn: "Cá Mương Hoa Chiết Giang", en: "Opsariichthys evolans", img: "muonghoa_1.jpg", photo: true, price: "186.000đ - 206.000đ",
      desc: "Cá Mương Hoa (Opsariichthys evolans) là một loài cá suối bản địa nổi bật với thân hình thuôn dài, vây dài và những đường vân hoa đẹp mắt. Đây là dòng cá nước ngọt có tính cách thân thiện, ưa hoạt động và rất thích bơi lội. Phân bố chủ yếu ở Đông Nam Trung Quốc, Đài Loan và các vùng Đông Bắc Á.",
      origin: "Đông Nam Trung Quốc, Đài Loan", size: "7–14 cm", promo: "Không có", contactText: "", combo: {3:"170.000đ - 186.000đ",5:"162.000đ - 176.000đ",10:"146.000đ - 167.000đ"}, gallery: ["assets/img/unified_1.jpg"]
    },
{
        vn: "Cá Flame Tetra", en: "Flame Tetra", img: "flame_1.jpg", photo: true, price: "24.000đ",
        desc: "Cá Flame Tetra (Hyphessobrycon flammeus) là dòng tetra nhỏ hiền lành có nguồn gốc từ vùng nước tĩnh ven sông ở Rio de Janeiro, Brazil. Cá nổi bật với thân đỏ cam rực như ngọn lửa, ánh bạc ở thân và các vây đỏ đậm viền đen — đặc biệt con đực trưởng thành lên màu rất đẹp. Nuôi đàn từ 6–10 con trở lên giúp cá dạn, lên màu đẹp và bơi theo nhóm rất bắt mắt. Cá hiền, phù hợp bể cộng đồng có cây thủy sinh, nước mềm hơi acid, ăn tạp (cám nhỏ, trùn chỉ, artemia).",
        origin: "Rio de Janeiro, Brazil", size: "3 cm", promo: "Không có", contactText: "", combo:{3:"22.000đ",5:"20.000đ",10:"19.000đ"}, gallery: ["assets/img/flame_1.jpg", "assets/img/flame_2.jpg", "assets/img/flame_3.jpg"]
      },
{
        vn: "Cá Thạch Mỹ Nhân", en: "Rainbowfish Boeseman's", img: "thachmynhan_1.jpg", photo: true, price: "130.000đ",
            desc: "Cá Thạch Mỹ Nhân (Melanotaenia boesemani, thường gọi Boeseman's Rainbowfish) là dòng cá cầu vồng nổi bật với thân hình thon dài chia hai mảng màu rõ rệt — nửa đầu ánh xanh lam ánh kim, nửa thân sau và đuôi chuyển sang cam đỏ rực. Cá hiền lành, bơi đàn rất đẹp, ăn tạp và khỏe mạnh, phù hợp bể thủy sinh cộng đồng rộng có nhiều không gian bơi. Nên nuôi nhóm từ 6 con trở lên để cá phát huy màu sắc đẹp nhất.",
            origin: "Hồ Ayamaru, Tây Papua, Indonesia", size: "6–7 cm", promo: "Không có", contactText: "", combo:{3:"124.000đ",5:"114.000đ",10:"104.000đ"}, gallery: ["assets/img/thachmynhan_1.jpg"]
                  },
{
                vn: "Cá Chuột Cafe AB", en: "Corydoras duplicareus", img: "chuot_cafe_ab.jpg", photo: true, price: "44.000đ",
                desc: "Cá Chuột Cafe AB (Corydoras duplicareus) là dòng cá chuột cảnh nổi bật với thân ánh nâu cafe, dải sọc đậm chạy ngang mắt và một vệt sáng vàng cam ở gáy. Là loài ăn tạp đáy, hiền lành, hoạt động tích cực theo đàn — nên nuôi nhóm từ 6 con trở lên. Phù hợp bể thủy sinh có nền mềm, nhiều cây và lũa để trú ẩn, nước hơi acid đến trung tính, nhiệt 22–26°C.",
                combo: {3:"38.000đ",5:"35.000đ",10:"32.000đ"},
                gallery: ["assets/img/chuot_cafe_ab.jpg", "assets/img/chuot_cafe_ab.jpg"]
              },
{
                vn: "Cá Chuột Vene", en: "Corydoras venezuelanus", img: "chuot_vene.jpg", photo: true, price: "24.000đ",
                desc: "Cá Chuột Vene / Orange Venezuelan Corydoras (Corydoras venezuelanus) là dòng cá chuột nổi bật với đốm đen lớn hình oval ở vai và sắc cam rực dọc lưng khi trưởng thành. Cá hiền, sống theo đàn, ăn tạp đáy — nên nuôi nhóm từ 6 con trở lên để cá dạn và lên màu đẹp. Phù hợp bể thủy sinh cộng đồng, nước mềm hơi acid, 22–26°C.",
                gallery: ["assets/img/chuot_vene.jpg", "assets/img/chuot_vene.jpg"]
              },
{
                vn: "Cá Chuột Adolfoi", en: "Corydoras adolfoi", img: "chuot_adolfoi.jpg", photo: true, price: "120.000đ",
                desc: "Cá Chuột Adolfoi (Corydoras adolfoi) là dòng cá chuột quý hiếm với vệt cam sáng nổi bật trên đỉnh đầu, dải đen chạy dọc lưng và thân ánh bạc. Cá hiền, bơi theo đàn, hoạt động tầng đáy. Phù hợp bể thủy sinh có nền cát mịn, nhiều cây và hang trú ẩn, nước mềm hơi acid 24–28°C. Nuôi nhóm từ 6 con trở lên.",
                gallery: ["assets/img/chuot_adolfoi.jpg", "assets/img/chuot_adolfoi.jpg"]
              },
{
                vn: "Cá Chuột Panda", en: "Corydoras panda", img: "chuot_panda.jpg", photo: true, price: "24.000đ",
                desc: "Cá Chuột Panda (Corydoras panda) nổi tiếng với các vệt đen ở mắt, vây lưng và gốc đuôi trên nền thân trắng ngà — tạo hình như gấu trúc. Cá hiền, bơi đàn, ăn tạp đáy. Phù hợp bể thủy sinh cộng đồng, nước mềm hơi acid, 22–26°C. Nuôi nhóm 6 con trở lên để cá dạn và lên màu đẹp.",
                gallery: ["assets/img/chuot_panda.jpg", "assets/img/chuot_panda.jpg"]
              },
{
                vn: "Cá Chuột Muối Tiêu AB Kì Cao", en: "Corydoras habrosus", img: "chuot_muoi_tieu.jpg", photo: true, price: "26.000đ",
                desc: "Cá Chuột Muối Tiêu AB Kì Cao / Salt and Pepper Cory (Corydoras habrosus) là một trong những dòng cá chuột nhỏ nhất, thân phủ các đốm đen nhỏ li ti trên nền cát sáng trông như hạt muối tiêu. Cá hiền, bơi đàn rất đẹp, phù hợp bể thủy sinh nano hoặc bể cộng đồng nhỏ. Nuôi nhóm 8–10 con trở lên, nước mềm 22–26°C.",
                gallery: ["assets/img/chuot_muoi_tieu.jpg", "assets/img/chuot_muoi_tieu.jpg"]
              },
{
                vn: "Cá Checkered Bard", en: "Dicrossus filamentosus", img: "checkered_bard.jpg", photo: true, price: 48000,
                desc: "Cá Checkered Bard / Lyretail Checkerboard Cichlid (Dicrossus filamentosus) là cá cichlid lùn đẹp với hoa văn bàn cờ đen trắng đặc trưng trên thân và vây đuôi hình cánh cung dài ở con đực. Cá hiền, thích hợp bể thủy sinh có nhiều cây và lũa, nước mềm hơi acid ấm 25–29°C. Là dòng cichlid nhỏ rất được ưa chuộng.",
                gallery: ["assets/img/chuot_muoi_tieu.jpg", "assets/img/chuot_muoi_tieu.jpg"]
              },
{
                vn: "Cá Thè Be Viền Vàng", en: "Bujurquina syspilus", img: "the_be_vien_vang.jpg", photo: true, price: "122.000đ",
                desc: "Cá Thè Be Viền Vàng (Bujurquina syspilus) là dòng cichlid Nam Mỹ hiền lành, nổi bật với thân ánh xanh lục, dải sọc đen dọc thân và viền vàng cam rực rỡ ở vây lưng và vây đuôi. Cá thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C. Đẻ trứng trên lá cây — đặc trưng sinh sản khác biệt của giống Bujurquina.",
                gallery: ["assets/img/the_be_vien_vang.jpg", "assets/img/the_be_vien_vang.jpg"]
              },
{
                vn: "Cá Thè Be Lava", en: "Andinoacara rivulatus 'Gold Saum'", img: "cá_thè_be_lava.jpg", photo: true, price:147000,
                desc: "Cá Thè Be Lava / Gold Saum (Andinoacara rivulatus) là dòng cichlid Nam M�y ấn tượng với thân ánh xanh lục đậm, các vảy lấp lánh ánh cam-vàng và viền vây lưng, vây đuôi màu vàng cam rực như dung nham. Cá có tính lãnh thổ vừa, cần bể rộng, nước sạch ổn định 22–28°C. Trưởng thành đẹp nổi bật trong bể cộng đồng lớn.",
    gallery: ["assets/img/cá_thè_be_lava.jpg"]
              },
{
                vn: "Cá Thần Tiên Paraiba", en: "Paracheirodon innesi 'Paraiba'", img: "cá_thần_tiên_paraiba.jpg", photo: true, price:"25.000đ",
                desc: "Cá Thần Tiên Paraiba (Paracheirodon innesi, dòng phối màu xanh sáng rực) là biến thể lai tạo chọn lọc của Neon Tetra với sắc xanh lam sáng phủ toàn thân, nổi bật trong bể thủy sinh ánh sáng dịu. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng. Nuôi nhóm 8–10 con trở lên, nước mềm hơi acid 22–26°C.",
    gallery: ["assets/img/cá_thần_tiên_paraiba.jpg"]
              },
{
                vn: "Cá Thần Tiên Mana Red Black", en: "Pterophyllum scalare 'Manacapuru Red Back'", img: "cá_thần_tiên_mana_red_back.jpg", photo: true, price:"65.000đ",
                desc: "Cá Thần Tiên Mana Red Black / Manacapuru Redback Angelfish (Pterophyllum scalare, locality Manacapuru) là dòng thần tiên hoang dại nổi bật với viền lưng đỏ cam đậm chạy từ vây lưng xuống cuống đuôi trên nền thân bạc ánh kim. Cá có dáng đĩa dẹp đặc trưng, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
    gallery: ["assets/img/cá_thần_tiên_mana_red_back.jpg"]
              },
{
        vn: "Cá Đĩa Tiger HB", en: "Symphysodon aequifasciatus 'Tiger HB'", img: "cá_đĩa_tiger_hb.jpg", photo: true, price:"440.000đ - 450.000đ",
        desc: "Cá Đĩa Tiger HB (Symphysodon aequifasciatus, dòng Tiger HB / Heckel cross) là dòng cá đĩa cao cấp với hoa văn sọc dọc đậm nét trên nền thân ánh kim, phối màu xanh lục, đỏ và nâu đặc trưng. Cá tính cách hiền, thích hợp bể rộng có nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    gallery: ["assets/img/cá_đĩa_tiger_hb.jpg"]
      },
{
        vn: "Cá Đĩa Hoa Hồng", en: "Symphysodon aequifasciatus 'Rose'", img: "cá_đĩa_hoa_hồng.jpg", photo: true, price:"208.000đ - 260.000đ",
        desc: "Cá Đĩa Hoa Hồng / Rose Discus là dòng cá đĩa cảnh lai tạo nổi bật với sắc hồng cam phủ đều khắp thân và vây, hoa văn sọc nhạt dần khi trưởng thành. Cá hiền, dáng đĩa tròn dẹp đặc trưng, thích hợp bể thủy sinh nhiều cây, lũa, ánh sáng dịu, nước mềm ấm 28–31°C.",
    gallery: ["assets/img/cá_đĩa_hoa_hồng.jpg"]
      },
{
        vn: "Cá Đĩa Beo Body", en: "Symphysodon aequifasciatus 'Leopard Body'", img: "cá_đĩa_beo_body.jpg", photo: true, price:"450.000đ",
        desc: "Cá Đĩa Beo Body (Symphysodon, dòng Leopard Body) là cá đĩa lai tạo với hoa văn đốm tròn rải đều khắp thân giống da báo trên nền sáng ánh kim. Cá có dáng đĩa tròn dẹp, bơi uyển chuyển, hiền lành. Phù hợp bể thủy sinh cộng đồng rộng, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
    gallery: ["assets/img/cá_đĩa_beo_body.jpg"]
      },
{
        vn: "Cá Đĩa Bông Nâu", en: "Symphysodon aequifasciatus 'Brown Spotted'", img: "cá_đĩa_bông_nâu.jpg", photo: true, price:"190.000đ - 420.000đ",
        desc: "Cá Đĩa Bông Nâu (Symphysodon, dòng Brown Spotted) là dòng cá đĩa hoang dã lai tạo với nền thân nâu ấm điểm các đốm sáng nhỏ, sọc dọc nhạt dần khi trưởng thành. Cá hiền, phù hợp bể nhiều cây, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
    gallery: ["assets/img/cá_đĩa_bông_nâu.jpg"]
      },
{
        vn: "Cá Đĩa Bạch Ngọc", en: "Symphysodon aequifasciatus 'White Pearl'", img: "cá_đĩa_bạch_ngọc.jpg", photo: true, price:"190.000đ - 450.000đ",
        desc: "Cá Đĩa Bạch Ngọc / White Pearl Discus là dòng cá đĩa lai tạo có nền thân trắng ngà ánh kim, vây trong suốt, hoa văn nhạt. Cá hiền, thích hợp bể nhiều cây và lũa, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
    gallery: ["assets/img/cá_đĩa_bạch_ngọc.jpg"]
      },
{
        vn: "Cá Đĩa Ngũ Sắc Mix", en: "Symphysodon aequifasciatus 'Mixed Colors'", img: "cá_đĩa_ngũ_sắc_mix.jpg", photo: true, price:190000,
        desc: "Cá Đĩa Ngũ Sắc Mix là dòng cá đĩa phối màu lai tạo nhiều kiểu hoa văn (xanh, đỏ, vàng, xanh dương, bạch ngọc) trong cùng đàn. Mỗi con một màu sắc riêng, tạo bể đĩa sinh động. Cá hiền, nước mềm ấm 28–31°C, thích hợp bể rộng nhiều cây.",
    gallery: ["assets/img/cá_đĩa_ngũ_sắc_mix.jpg"]
      },
{
        vn: "Cá Thần Tiên Koi AB", en: "Pterophyllum scalare 'Koi AB'", img: "cá_thần_tiên_koi_ab.jpg", photo: true, price:"81.000đ",
        desc: "Cá Thần Tiên Koi AB (Pterophyllum scalare 'Koi AB') là dòng thần tiên lai tạo nổi bật với phối màu trắng-cam-đen giống cá Koi Nhật, dáng đĩa dẹp và vây dài. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
    gallery: ["assets/img/cá_thần_tiên_koi_ab.jpg"]
      },
{
        vn: "Cá Hồng Nhung Vây Dài", en: "Symphysodon 'Red Velvet Longfin'", img: "cá_hồng_nhung_vây_dài.jpg", photo: true, price:"45.000đ",
        desc: "Cá Hồng Nhung Vây Dài (Symphysodon, dòng Red Velvet Longfin) là cá đĩa lai tạo với thân đỏ nhung đậm phủ đều, vây bơi dài uyển chuyển, hoa văn sọc dọc nhạt dần. Cá hiền, phù hợp bể nhiều cây, lũa, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
    gallery: ["assets/img/cá_hồng_nhung_vây_dài.jpg"]
      },
{
        vn: "Cá Congo Albino", en: "Phenacogrammus interruptus 'Albino'", img: "cá_congo_albino.jpg", photo: true, price:165000,
        desc: "Cá Congo Albino (Phenacogrammus interruptus, dòng Albino) là biến thể bạch tạng của cá tetra Congo với thân ánh bạc-nâu nhạt và vây dài lượn sóng đặc trưng. Cá hiền, bơi đàn rất đẹp, nên nuôi nhóm 6+ con, nước mềm hơi acid 24–28°C, bể thủy sinh cộng đồng nhiều cây.",
    gallery: ["assets/img/cá_congo_albino.jpg"]
      },
{
        vn: "Cá Chuột Botia", en: "Botia striata", img: "cá_chuột_botia.jpg", photo: true, price:"20.000đ",
        desc: "Cá Chuột Botia / Zebra Loach (Botia striata) là dòng cá tầng đáy nổi bật với sọc vàng-đen chạy dọc thân như ngựa vằn, kích thước nhỏ hiền lành, hoạt động theo đàn. Cá thích hợp bể thủy sinh có nhiều hang trú ẩn, nền cát mịn, nước mềm 23–27°C. Nuôi nhóm 5+ con.",
    gallery: ["assets/img/cá_chuột_botia.jpg"]
      },
{
      vn: "Cá Chuột Mỹ", en: "United States Cory", img: "cá_chuột_mỹ.jpg", photo: true, price: "60.000đ - 157.000đ",
      desc: "Cá Chuột Mỹ (Corydoras sp. dòng Mỹ) là dòng cá chuột cảnh lớn nổi bật với thân ánh bạc có đốm đen lớn ở vây lưng và đuôi, kích thước lớn hơn các dòng Corydoras thông thường. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
      origin: "Hoa Kỳ", size: "3–9 cm", promo: "Không có", contactText: "", combo: {3:"54.000đ - 147.000đ",5:"50.000đ - 143.000đ",10:"46.000đ - 137.000đ"}, gallery: ["assets/img/unified_1.jpg"]
    },
{
        vn: "Cá Thần Tiên Piony", en: "Pterophyllum scalare 'Pinoy'", img: "cá_thần_tiên_piony.jpg", photo: true, price:"40.000đ - 108.000đ",
        desc: "Cá Thần Tiên Piony (Pterophyllum scalare, dòng Pinoy / Philippines Blue) là thần tiên lai tạo nổi bật với thân ánh xanh lam, vảy bạc và vây dài uyển chuyển. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
    gallery: ["assets/img/cá_thần_tiên_piony.jpg"]
      },
{
      vn: "Cá Ryukin", en: "Ryukin Goldfish", img: "c_ryukin_1.jpg", photo: true, price: "198.000đ",
      desc: "Cá Ryukin là dòng cá vàng đuôi dài nổi bật với phần lưng gù cao đặc trưng và vây đuôi xòe rộng ba chia. Cá hiền lành, bơi chậm rãi, phù hợp bể ngoại cảnh hoặc bể trong nhà rộng, nước sạch 18–24°C.",
      origin: "Lai tạo chọn lọc từ cá vàng Nhật Bản", size: "4–5 cm", promo: "Không có", contactText: "", combo: {3:"178.000đ",5:"168.000đ",10:"158.000đ"}, gallery: ["assets/img/c_ryukin_1.jpg"]
    },
{
      vn: "Cá Thần Tiên Altum Peru", en: "Altum Angelfish Peru", img: "c_th_n_ti_n_altum_peru_1.jpg", photo: true, price: "176.000đ - 270.000đ",
      desc: "Cá Thần Tiên Altum Peru (Pterophyllum altum) là dòng thần tiên hoang dã quý hiếm có nguồn gốc từ lưu vực sông Amazon Peru và Colombia, nổi bật với dáng cao, vây dài uyển chuyển và sọc dọc đậm nét. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Sông Amazon, Peru", size: "3–6 cm", promo: "Không có", contactText: "", combo: {3:"160.000đ - 255.000đ",5:"152.000đ - 240.000đ",10:"148.000đ - 218.000đ"}, gallery: ["assets/img/c_th_n_ti_n_altum_peru_1.jpg"]
    },
{
      vn: "Cá Black Ruby", en: "Black Ruby Barb", img: "c_black_ruby_1.jpg", photo: true, price: "80.000đ",
      desc: "Cá Black Ruby (Pethia nigrofasciata) là dòng cá cảnh bơi đàn nổi bật với con đực trưởng thành có thân đỏ sậm ánh ruby tương phản với sọc đen dọc thân. Cá hiền, khỏe, phù hợp bể cộng đồng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Sri Lanka", size: "5–6 cm", promo: "Không có", contactText: "", combo: {3:"72.000đ",5:"68.000đ",10:"64.000đ"}, gallery: ["assets/img/c_black_ruby_1.jpg"]
    },
{
      vn: "Cá Tỳ Bà Bướm Muối Tiêu", en: "Salt and Pepper Pleco", img: "c_t_b_b_m_mu_i_ti_u_1.jpg", photo: true, price: "18.000đ",
      desc: "Cá Tỳ Bà Bướm Muối Tiêu là dòng cá lau kiếng nhỏ nổi bật với thân điểm đốm đen nhỏ li ti trên nền sáng giống hạt muối tiêu. Cá hiền, ăn tảo và thức ăn đáy, phù hợp bể thủy sinh có nhiều lũa đá, nước 22–26°C.",
      origin: "Nam Mỹ", size: "Cối (nhỏ)", promo: "Không có", contactText: "", combo: {3:"13.000đ",5:"12.000đ",10:"11.000đ"}, gallery: ["assets/img/c_t_b_b_m_mu_i_ti_u_1.jpg"]
    },
{
      vn: "Cá Bống Tê Giác", en: "Rhino Goby", img: "c_b_ng_t_gi_c_1.jpg", photo: true, price: "20.000đ",
      desc: "Cá Bống Tê Giác là dòng cá tầng đáy nổi bật với phần đầu có sừng nhỏ đặc trưng và thân phủ đốm. Cá hiền, ăn tạp đáy, phù hợp bể có nền cát mịn và nhiều hang trú ẩn, nước 22–26°C.",
      origin: "Đông Nam Á", size: "Cối (nhỏ)", promo: "Không có", contactText: "", combo: {3:"18.000đ",5:"17.000đ",10:"16.000đ"}, gallery: ["assets/img/c_b_ng_t_gi_c_1.jpg"]
    },
{
      vn: "Cá Bảo Liên Đăng", en: "Bao Lien Dang", img: "c_b_o_li_n_ng_1.jpg", photo: true, price: "92.000đ",
          desc: "Cá Bảo Liên Đăng là dòng cá cảnh nước ngọt nổi bật với sắc cam đỏ ánh kim và vây dài uyển chuyển. Cá hiền, khỏe, bơi đàn, phù hợp bể thủy sinh cộng đồng nhiều cây, nên nuôi nhóm 6+ con, nước 22–26°C.",
          origin: "Châu Á", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:"80.000đ",5:"74.000đ",10:"67.000đ"}, gallery: ["assets/img/c_b_o_li_n_ng_1.jpg"]
        },
{
          vn: "Cá Hỏa Liên Đăng", en: "Hoa Lien Dang", img: "c_h_a_li_n_ng_1.jpg", photo: true, price: "79.000đ",
          desc: "Cá Hỏa Liên Đăng là dòng cá cảnh nước ngọt nổi bật với sắc đỏ ánh lửa và vây dài uyển chuyển. Cá hiền, khỏe, bơi đàn, phù hợp bể thủy sinh cộng đồng nhiều cây, nên nuôi nhóm 6+ con, nước 22–26°C.",
          origin: "Châu Á", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:"48.000đ",5:"45.000đ",10:"42.000đ"}, gallery: ["assets/img/c_h_a_li_n_ng_1.jpg"]
        },
{
          vn: "Cá Thè Be Bướm TQ Viền Trắng", en: "Chinese Butterfly Cichlid White Edge", img: "c_th_be_b_m_tq_vi_n_tr_ng_2.jpg", photo: true, price: "84.000đ",
          desc: "Cá Thè Be Bướm TQ Viền Trắng là dòng cichlid Trung Quốc nổi bật với viền trắng đặc trưng ở vây lưng và vây đuôi. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
          origin: "Trung Quốc", size: "5–7 cm", promo: "Không có", contactText: "", combo: {3:"78.000đ",5:"72.000đ",10:"68.000đ"}, gallery: ["assets/img/c_th_be_b_m_tq_vi_n_tr_ng_2.jpg"]
        },
{
          vn: "Cá Rohani", en: "Rohani Barb", img: "c_rohani_1.jpg", photo: true, price: "114.000đ",
          desc: "Cá Rohani (Puntius rohani) là dòng cá cảnh bơi đàn nổi bật với thân ánh kim và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng, nên nuôi nhóm 6+ con, nước 22–26°C.",
          origin: "Đông Nam Á", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:"104.000đ",5:"96.000đ",10:"88.000đ"}, gallery: ["assets/img/c_rohani_1.jpg"]
        },
{
          vn: "Cá Longfin 24k", en: "24k Longfin Goldfish", img: "c_longfin_24k_1.jpg", photo: true, price: "81.000đ - 86.000đ",
          desc: "Cá Longfin 24k là dòng cá vàng vây dài nổi bật với sắc vàng ánh kim óng ánh và bộ vây dài uyển chuyển. Cá hiền, bơi chậm, phù hợp bể rộng nước sạch 18–24°C.",
          origin: "Lai tạo chọn lọc", size: "4–5 cm", promo: "Không có", contactText: "", combo: {3:"74.000đ",5:"72.000đ",10:"65.000đ - 70.000đ"}, gallery: ["assets/img/c_longfin_24k_1.jpg"]
        },
{
          vn: "Cá Thần Tiên Blue Ghost", en: "Blue Ghost Angelfish", img: "c_th_n_ti_n_blue_ghost_1.jpg", photo: true, price: "21.000đ",
          desc: "Cá Thần Tiên Blue Ghost là dòng thần tiên lai tạo nổi bật với sắc xanh lam nhạt ánh bạc đặc trưng. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
          origin: "Lai tạo chọn lọc", size: "3 cm", promo: "Không có", contactText: "", combo: {3:"15.000đ",5:"14.000đ",10:"13.000đ"}, gallery: ["assets/img/c_th_n_ti_n_blue_ghost_1.jpg"]
        },
{
          vn: "Cá Hải Hồ AB", en: "Short Seahorse", img: "c_h_i_h_ab_1.jpg", photo: true, price: "342.000đ",
          desc: "Cá Hải Hồ Short là dòng cá cảnh nước ngọt nổi bật với dáng đứng đặc trưng và kích tháng nhỏ gọn. Cá hiền, hoạt động chậm, thích hợp bể riêng yên tĩnh có nhiều cây và hang trú ẩn, nước ổn định 24–28°C.",
          origin: "Lai tạo chọn lọc", size: "6–8 cm", promo: "Không có", contactText: "", combo: {3:"314.000đ",5:"304.000đ",10:"285.000đ"}, gallery: ["assets/img/c_h_i_h_ab_1.jpg"]
        },
{
          vn: "Cá Thần Tiên Isabel", en: "Isabel Angelfish", img: "c_th_n_ti_n_isabel_1.jpg", photo: true, price: "378.000đ",
          desc: "Cá Thần Tiên Isabel là dòng thần tiên lai tạo nổi bật với sắc vàng ánh kim và hoa văn độc đáo trên thân. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
          origin: "Lai tạo chọn lọc", size: "5–6 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/c_th_n_ti_n_isabel_1.jpg"]
        },
{
          vn: "Cá Shortfin 24k", en: "24k Shortfin Goldfish", img: "c_shortfin_24k_1.jpg", photo: true, price: 45000,
          desc: "Cá Shortfin 24k là dòng cá vàng vây ngắn nổi bật với sắc vàng ánh kim óng ánh đặc trưng. Cá hiền, bơi chậm, phù hợp bể rộng nước sạch 18–24°C.",
          origin: "Lai tạo chọn lọc", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:41000,5:40000,10:39000}, gallery: ["assets/img/c_shortfin_24k_1.jpg"]
        },
{
          vn: "Cá Kim Thơm Hoàng Đế", en: "Emperor Severum", img: "severum_1.jpg", photo: true, price: "414.000đ",
          desc: "Cá Kim Thơm Hoàng Đế (Heros efasciatus, dòng Emperor Severum) là dòng cá cảnh lớn nổi bật với thân dẹp hình đĩa, vảy ánh kim vàng óng phủ đều khắp thân và vây. Cá hiền, khỏe, phù hợp bể rộng có nhiều cây và lũa, nước mềm ấm 24–28°C. Nên nuôi nhóm từ 3–4 con trở lên.",
          origin: "Lai tạo chọn lọc", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:"380.000đ",5:"368.000đ",10:"345.000đ"}, gallery: ["assets/img/severum_1.jpg"]
        },
{
          vn: "Cá Đĩa Xanh Lam", en: "Blue Discus", img: "c_a_xanh_lam_1.jpg", photo: true, price: "247.000đ - 319.000đ",
          desc: "Cá Đĩa Xanh Lam (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với sắc xanh lam ánh kim phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "6–8 cm", promo: "Không có", contactText: "", combo: {3:"233.000đ - 301.000đ",5:"219.000đ - 283.000đ",10:"206.000đ - 248.000đ"}, gallery: ["assets/img/c_a_xanh_lam_1.jpg"]
        },
{
          vn: "Cá Đĩa Chỉ Nâu", en: "Brown Streak Discus", img: "c_a_ch_n_u_1.jpg", photo: true, price: "265.000đ",
          desc: "Cá Đĩa Chỉ Nâu (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với các sọc nâu đậm chạy dọc thân trên nền ánh kim. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:"250.000đ",5:"235.000đ",10:"221.000đ"}, gallery: ["assets/img/c_a_ch_n_u_1.jpg", "assets/img/c_a_ch_n_u_2.jpg"]
        },
{
          vn: "Cá Đĩa Da Beo", en: "Leopard Discus", img: "c_a_da_beo_1.jpg", photo: true, price: "393.000đ",
          desc: "Cá Đĩa Da Beo (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với hoa văn đốm tròn rải đều khắp thân giống da báo. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:"373.000đ",5:"352.000đ",10:"311.000đ"}, gallery: ["assets/img/c_a_da_beo_1.jpg"]
        },
{
          vn: "Cá Đĩa Bồ Câu Đỏ", en: "Red Pigeon Discus", img: "c_a_b_c_u_1.jpg", photo: true, price: "208.000đ - 352.000đ",
          desc: "Cá Đĩa Bồ Câu Đỏ (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với sắc đỏ cam phủ đều khắp thân tựa màu lông bồ câu đỏ. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–9 cm", promo: "Không có", contactText: "", combo: {3:"195.000đ - 320.000đ",5:"182.000đ - 304.000đ",10:"169.000đ - 272.000đ"}, gallery: ["assets/img/c_a_b_c_u_1.jpg"]
        },
{
          vn: "Cá Đĩa Panda Đỏ", en: "Red Panda Discus", img: "c_a_panda_1.jpg", photo: true, price: "208.000đ",
          desc: "Cá Đĩa Panda Đỏ (Symphysodon aequifasciatus) là dòng cá đĩa lai tạo nổi bật với các vệt đỏ đậm trên nền trắng tựa hình gấu trúc đỏ. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
          origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:"195.000đ",5:"182.000đ",10:"169.000đ"}, gallery: ["assets/img/c_a_panda_1.jpg"]
        },
{
      vn: "Cá Pleco L190", en: "Royal Pleco L190", img: "c_pleco_l190_1.jpg", photo: true, price: "1.429.000đ",
      desc: "Cá Pleco L190 (Panaque sp.) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon, nổi bật với thân lớn và vảy ánh kim đặc trưng. Cá hiền, ăn tạp, hoạt động về đêm, thích hợp bể rộng có nhiều lũa đá trú ẩn, nước mềm ấm 26–30°C.",
      origin: "Sông Amazon, Nam Mỹ", size: "8–190 cm", promo: "Không có", contactText: "", combo: {3:"1.509.000đ",5:"1.429.000đ",10:"1.350.000đ"}, gallery: ["assets/img/c_pleco_l190_1.jpg", "assets/img/c_pleco_l190_2.jpg"]
    },
{
      vn: "Cá Pleco L191", en: "Dull Eyed Royal Pleco L191", img: "c_pleco_l191_1.jpg", photo: true, price: "1.191.000đ",
      desc: "Cá Pleco L191 (Panaque sp.) là dòng cá lau kiếng quý hiếm có nguồn gốc từ lưu vực sông Amazon, nổi bật với thân lớn và vảy ánh kim đặc trưng. Cá hiền, ăn tạp, hoạt động về đêm, thích hợp bể rộng có nhiều lũa đá trú ẩn, nước mềm ấm 26–30°C.",
      origin: "Sông Amazon, Nam Mỹ", size: "6–191 cm", promo: "Không có", contactText: "", combo: {3:"1.131.000đ",5:"1.042.000đ",10:"953.000đ"}, gallery: ["assets/img/c_pleco_l191_1.jpg"]
    },
{
      vn: "Cá Thè Be Trung Quốc", en: "Chinese Severum", img: "c_th_be_trung_qu_c_1.jpg", photo: true, price: "57.000đ",
      desc: "Cá Thè Be Trung Quốc là dòng cichlid Trung Quốc nổi bật với sắc cam ánh kim và vây dài đặc trưng. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
      origin: "Trung Quốc", size: "8–10 cm", promo: "Không có", contactText: "", combo: {3:"51.000đ",5:"48.000đ",10:"46.000đ"}, gallery: ["assets/img/c_th_be_trung_qu_c_1.jpg"]
    },
{
      vn: "Cá Mương Hoa TQ", en: "Chinese Zacco", img: "c_m_ng_hoa_tq_1.jpg", photo: true, price: "161.000đ",
      desc: "Cá Mương Hoa TQ là dòng cá mương nước ngọt có nguồn gốc từ Trung Quốc, nổi bật với sắc ánh kim và vây dài đặc trưng. Cá hiền, bơi khỏe, ưa sống theo đàn — phù hợp bể biotope suối đá có dòng chảy, nước sạch, nhiều oxy, nền sỏi đá.",
      origin: "Trung Quốc", size: "10–13 cm", promo: "Không có", contactText: "", combo: {3:"132.000đ",5:"125.000đ",10:"117.000đ"}, gallery: ["assets/img/c_m_ng_hoa_tq_1.jpg"]
    },
{
      vn: "Cá Trâm Galaxy", en: "Galaxy Rasbora", img: "c_tr_m_galaxy_1.jpg", photo: true, price: "45.000đ",
      desc: "Cá Trâm Galaxy (Danio margaritatus) là dòng cá cảnh nhỏ nổi bật với thân phủ đốm ánh kim lấp lánh như dải ngân hà. Cá hiền, bơi đàn, phù hợp bể thủy sinh nano nhiều cây, nên nuôi nhóm 8–10 con, nước mềm hơi acid 22–26°C.",
      origin: "Myanmar", size: "2 cm", promo: "Không có", contactText: "", combo: {3:"40.000đ",5:"38.000đ",10:"36.000đ"}, gallery: ["assets/img/c_tr_m_galaxy_1.jpg"]
    },
{
      vn: "Cá Cánh Cụt Đuôi Đỏ", en: "Red Tail Penguin Tetra", img: "c_c_nh_c_t_u_i_1.jpg", photo: true, price: "45.000đ",
      desc: "Cá Cánh Cụt Đuôi Đỏ / Red Tail Penguin Tetra (Thayeria boehlkei) là dòng tetra bơi nghiêng nổi bật với thân bạc ánh kim và vây đuôi đỏ cam đặc trưng. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng nhiều cây, nên nuôi nhóm 8+ con, nước mềm 22–26°C.",
      origin: "Amazon, Peru", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:"40.000đ",5:"36.000đ",10:"34.000đ"}, gallery: ["assets/img/c_c_nh_c_t_u_i_1.jpg"]
    },
{
      vn: "Cá Congo", en: "Congo Tetra", img: "c_congo_1.jpg", photo: true, price: "80.000đ",
      desc: "Cá Congo Tetra (Phenacogrammus interruptus) là dòng tetra lớn nổi bật với vây dài lượn sóng và sắc ánh kim rực rỡ. Cá hiền, bơi đàn rất đẹp, phù hợp bể cộng đồng nhiều cây, nên nuôi nhóm 6+ con, nước mềm hơi acid 24–28°C.",
      origin: "Lưu vực sông Congo, châu Phi", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:"76.000đ",5:"72.000đ",10:"68.000đ"}, gallery: ["assets/img/c_congo_1.jpg"]
    },
{
      vn: "Cá Thè Be Bướm TQ Viền Đỏ", en: "Chinese Butterfly Cichlid Red Edge", img: "c_th_be_b_m_tq_vi_n_2.jpg", photo: true, price: "198.000đ",
      desc: "Cá Thè Be Bướm TQ Viền Đỏ là dòng cichlid Trung Quốc nổi bật với viền đỏ rực ở vây lưng và vây đuôi. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
      origin: "Trung Quốc", size: "4–6 cm", promo: "Không có", contactText: "", combo: {3:"187.000đ",5:"177.000đ",10:"166.000đ"}, gallery: ["assets/img/c_th_be_b_m_tq_vi_n_2.jpg"]
    },
{
      vn: "Cá Thè Be Ngũ Sắc", en: "Multicolor Severum", img: "c_th_be_ng_s_c_1.jpg", photo: true, price: "27.000đ - 39.000đ",
      desc: "Cá Thè Be Ngũ Sắc là dòng cichlid Nam Mỹ nổi bật với hoa văn nhiều màu sắc rực rỡ trên thân. Cá hiền, thích hợp bể thủy sinh cộng đồng có nhiều cây, nước mềm hơi acid 24–28°C.",
      origin: "Nam Mỹ", size: "6–9 cm", promo: "Không có", contactText: "", combo: {3:"24.000đ - 35.000đ",5:"23.000đ - 33.000đ",10:"18.000đ - 26.000đ"}, gallery: ["assets/img/c_th_be_ng_s_c_1.jpg"]
    },
{
      vn: "Cá Đĩa Tiger High Body", en: "Tiger High Body Discus", img: "c_a_tiger_high_body_1.jpg", photo: true, price: 534000,
      desc: "Cá Đĩa Tiger High Body (Symphysodon aequifasciatus) là dòng cá đĩa cao cấp với thân hình dày và hoa văn sọc dọc đậm nét đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên để cá dạn và lên màu đẹp.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:507000,5:454000,10:427000}, gallery: ["assets/img/c_a_tiger_high_body_1.jpg"]
    },
{
      vn: "Cá Đĩa Đỏ", en: "Red Discus", img: "c_a_1.jpg", photo: true, price: 208000,
      desc: "Cá Đĩa Đỏ (Symphysodon aequifasciatus, dòng Red) là dòng cá đĩa lai tạo nổi bật với sắc đỏ rực phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:195000,5:182000,10:169000}, gallery: ["assets/img/c_a_1.jpg"]
    },
{
      vn: "Cá Đĩa Red Devil AB", en: "Red Devil Discus", img: "c_a_red_devil_ab_1.jpg", photo: true, price: "169.000đ - 655.000đ",
      desc: "Cá Đĩa Red Devil AB (Symphysodon aequifasciatus, dòng Red Devil AB) là dòng cá đĩa cao cấp nổi bật với sắc đỏ rực và hoa văn đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "5–9 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/c_a_red_devil_ab_1.jpg"]
    },
{
      vn: "Cá Đĩa Bông Xanh", en: "Blue Diamond Discus", img: "c_a_b_ng_xanh_1.jpg", photo: true, price: "74.000đ - 265.000đ",
      desc: "Cá Đĩa Bông Xanh (Symphysodon aequifasciatus, dòng Blue Diamond LN) là dòng cá đĩa lai tạo nổi bật với sắc xanh ánh kim phủ đều khắp thân và vây. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nuôi nhóm 5+ con.",
      origin: "Lai tạo chọn lọc", size: "6–9 cm", promo: "Không có", contactText: "", combo: {3:"68.000đ - 250.000đ",5:"65.000đ - 235.000đ",10:"61.000đ - 221.000đ"}, gallery: ["assets/img/c_a_b_ng_xanh_1.jpg", "assets/img/c_a_b_ng_xanh_2.jpg"]
    },
{
      vn: "Cá Đĩa Chỉ Đỏ", en: "Red Streak Discus", img: "c_a_ch_1.jpg", photo: true, price: 210000,
      desc: "Cá Đĩa Chỉ Đỏ (Symphysodon aequifasciatus, dòng Red Streak LN) là dòng cá đĩa lai tạo nổi bật với các vệt đỏ chạy dọc thân. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:190000,5:185000,10:165000}, gallery: ["assets/img/c_a_ch_1.jpg", "assets/img/c_a_ch_2.jpg"]
    },
{
      vn: "Cá Đĩa Valentine Đỏ", en: "Valentine Red Discus", img: "c_a_valentine_1.jpg", photo: true, price: 273000,
      desc: "Cá Đĩa Valentine Đỏ (Symphysodon aequifasciatus, dòng Valentine Red LN) là dòng cá đĩa lai tạo nổi bật với sắc đỏ valentine đặc trưng. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:247000,5:241000,10:215000}, gallery: ["assets/img/c_a_valentine_1.jpg", "assets/img/c_a_valentine_2.jpg"]
    },
{
      vn: "Cá Đĩa Xanh Cobalt", en: "Cobalt Blue Discus", img: "c_a_xanh_cobalt_1.jpg", photo: true, price: 210000,
      desc: "Cá Đĩa Xanh Cobalt (Symphysodon aequifasciatus, dòng Cobalt Blue LN) là dòng cá đĩa lai tạo nổi bật với sắc xanh cobalt rực rỡ. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:190000,5:185000,10:165000}, gallery: ["assets/img/c_a_xanh_cobalt_1.jpg", "assets/img/c_a_xanh_cobalt_2.jpg"]
    },
{
      vn: "Cá Đĩa Beo Bi EL", en: "Leopard Discus EL", img: "c_a_beo_bi_el_1.jpg", photo: true, price: 396000,
      desc: "Cá Đĩa Beo Bi (Symphysodon aequifasciatus, dòng Leopard EL) là dòng cá đĩa lai tạo nổi bật với hoa văn đốm beo trên nền ánh kim. Cá hiền, thích hợp bể rộng nhiều cây, ánh sáng dịu, nước mềm ấm 28–31°C. Nên nuôi nhóm từ 5 con trở lên.",
      origin: "Lai tạo chọn lọc", size: "7–8 cm", promo: "Không có", contactText: "", combo: {3:369000,5:351000,10:324000}, gallery: ["assets/img/c_a_beo_bi_el_1.jpg", "assets/img/c_a_beo_bi_el_2.jpg"]
    },
{
      vn: "Cá Thần Tiên Altum Atabapo F1", en: "Altum Atabapo F1 Angelfish", img: "c_th_n_ti_n_altum_atabapo_f1_1.jpg", photo: true, price: "592.000đ",
      desc: "Cá Thần Tiên Altum Atabapo F1 (Pterophyllum altum) là dòng thần tiên hoang dã F1 quý hiếm có nguồn gốc từ lưu vực sông Atabapo, Nam Mỹ. Cá nổi bật với dáng cao, vây dài uyển chuyển và sọc dọc đậm nét. Cá hiền, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Sông Atabapo, Nam Mỹ", size: "1–3 cm", promo: "Không có", contactText: "", combo: {3:"544.000đ",5:"512.000đ",10:"480.000đ"}, gallery: ["assets/img/c_th_n_ti_n_altum_atabapo_f1_1.jpg", "assets/img/c_th_n_ti_n_altum_atabapo_f1_2.jpg"]
    },
{
      vn: "Cá Hồng My Bóng Đêm Fila", en: "Fila Shark Minnow", img: "c_h_ng_my_b_ng_m_fila_1.jpg", photo: true, price: "111.000đ - 114.000đ",
      desc: "Cá Hồng My Bóng Đêm Fila là dòng cá cảnh bơi đàn nổi bật với thân ánh kim và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "7–10 cm", promo: "Không có", contactText: "", combo: {3:"100.000đ - 104.000đ",5:"94.000đ - 96.000đ",10:"83.000đ - 88.000đ"}, gallery: ["assets/img/c_h_ng_my_b_ng_m_fila_1.jpg", "assets/img/c_h_ng_my_b_ng_m_fila_2.jpg"]
    },
{
      vn: "Cá Hồng My Bóng Đêm Tambra", en: "Tambra Shark Minnow", img: "c_h_ng_my_b_ng_m_tambra_1.jpg", photo: true, price: "70.000đ - 278.000đ",
      desc: "Cá Hồng My Bóng Đêm Tambra là dòng cá cảnh bơi đàn nổi bật với dáng thon dài và màu ánh kim đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "4–9 cm", promo: "Không có", contactText: "", combo: {3:"64.000đ - 250.000đ",5:"60.000đ - 236.000đ",10:"56.000đ - 208.000đ"}, gallery: ["assets/img/c_h_ng_my_b_ng_m_tambra_1.jpg", "assets/img/c_h_ng_my_b_ng_m_tambra_2.jpg"]
    },
{
      vn: "Cá Hồng My Ấn Độ", en: "Rosy Barb", img: "c_h_ng_my_n_1.jpg", photo: true, price: "16.000đ - 108.000đ",
      desc: "Cá Hồng My Ấn Độ / Rosy Barb (Pethia conchonius) là dòng cá cảnh bơi đàn nổi bật với sắc hồng ánh kim phủ đều thân và vây. Cá hiền, khỏe, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Nên nuôi nhóm 6–8 con trở lên để cá dạn và lên màu đẹp, nước 22–26°C.",
      origin: "Ấn Độ, Bangladesh", size: "2–10 cm", promo: "Không có", contactText: "", combo: {3:"15.000đ - 96.000đ",5:"44.000đ - 84.000đ",10:"35.000đ - 80.000đ"}, gallery: ["assets/img/c_h_ng_my_n_1.jpg", "assets/img/c_h_ng_my_n_2.jpg"]
    },
{
      vn: "Cá Chuột Cafe", en: "Corydoras Cafe", img: "c_chu_t_cafe_1.jpg", photo: true, price: "15.000đ - 35.000đ",
      desc: "Cá Chuột Cafe (Corydoras sp.) là dòng cá chuột cảnh nhỏ nổi bật với thân ánh nâu cafe và các vệt sáng đặc trưng. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây và lũa, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
      origin: "Nam Mỹ", size: "6–7 cm", promo: "Không có", contactText: "", combo: {3:"14.000đ - 33.000đ",5:"13.000đ - 31.000đ",10:"12.000đ - 29.000đ"}, gallery: ["assets/img/c_chu_t_cafe_1.jpg", "assets/img/c_chu_t_cafe_2.jpg"]
    },
{
      vn: "Cá Mị Nương Ngọc Lam", en: "Blue Crystal Parrotfish", img: "c_m_n_ng_ng_c_lam_1.jpg", photo: true, price: "200.000đ - 630.000đ",
      desc: "Cá Mị Nương Ngọc Lam là dòng cá cảnh Trung Quốc nổi bật với sắc xanh ngọc lam ánh kim và dáng thuôn dài đặc trưng. Cá hiền, thích hợp bể cộng đồng rộng, nước mềm 22–26°C.",
      origin: "Trung Quốc", size: "10–18 cm", promo: "Không có", contactText: "", combo: {3:"184.000đ - 600.000đ",5:"168.000đ - 570.000đ",10:"152.000đ - 540.000đ"}, gallery: ["assets/img/c_m_n_ng_ng_c_lam_1.jpg", "assets/img/c_m_n_ng_ng_c_lam_2.jpg"]
    },
{
      vn: "Cá Thần Tiên Mana Red Black Phẩm Cao", en: "Mana Red Black Premium Angelfish", img: "c_th_n_ti_n_mana_red_black_ph_m_cao_1.jpg", photo: true, price: 100000,
      desc: "Cá Thần Tiên Mana Red Black Phẩm Cao (Pterophyllum scalare, dòng Manacapuru Red Back phẩm cao size 3-4) là thần tiên hoang dã nổi bật với viền lưng đỏ cam đậm — dòng phẩm cao chọn lọc. Cá có dáng đĩa dẹp đặc trưng, thích hợp bể cao, nước mềm hơi acid 26–30°C. Nuôi theo cặp hoặc nhóm nhỏ.",
      origin: "Lai tạo chọn lọc", size: "3–4 cm", promo: "Không có", contactText: "", combo: {3:93000,5:85000,10:80000}, gallery: ["assets/img/c_th_n_ti_n_mana_red_black_ph_m_cao_1.jpg", "assets/img/c_th_n_ti_n_mana_red_black_ph_m_cao_2.jpg"]
    },
{
      vn: "Cá Chuột Black Vene", en: "Black Vene Cory", img: "c_chu_t_black_vene_1.jpg", photo: true, price: "116.000đ",
      desc: "Cá Chuột Black Vene là dòng cá chuột cảnh nổi bật với thân đen ánh kim và hoa văn đặc trưng. Cá hiền, sống theo đàn, ăn tạp đáy, phù hợp bể thủy sinh nhiều cây và lũa, nước mềm hơi acid 22–26°C. Nuôi nhóm 6+ con.",
      origin: "Lai tạo chọn lọc", size: "4–5 cm", promo: "Không có", contactText: "", combo: {3:"107.000đ",5:"99.000đ",10:"96.000đ"}, gallery: ["assets/img/c_chu_t_black_vene_1.jpg", "assets/img/c_chu_t_black_vene_2.jpg"]
    },
{
      vn: "Cá HMBD Tambra", en: "HMBD Tambra Shark", img: "c_hmbd_tambra_1.jpg", photo: true, price: "368.000đ",
      desc: "Cá HMBD Tambra là dòng cá cảnh bơi đàn nổi bật với dáng thon dài và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "8–10 cm", promo: "Không có", contactText: "", combo: {3:"345.000đ",5:"334.000đ",10:"322.000đ"}, gallery: ["assets/img/c_hmbd_tambra_1.jpg", "assets/img/c_hmbd_tambra_2.jpg"]
    },
{
      vn: "Cá Tambra 10 Kì Dài", en: "Tambra Long Fin 10cm", img: "c_tambra_10_k_d_i_1.jpg", photo: true, price: "414.000đ",
      desc: "Cá Tambra 10 Kì Dài là dòng cá cảnh bơi đàn nổi bật với vây kì dài uyển chuyển và màu ánh kim. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "10 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/c_tambra_10_k_d_i_1.jpg", "assets/img/c_tambra_10_k_d_i_2.jpg"]
    },
{
      vn: "Cá HMBD Rohani", en: "HMBD Rohani Shark", img: "c_hmbd_rohani_1.jpg", photo: true, price: "117.000đ - 124.000đ",
      desc: "Cá HMBD Rohani là dòng cá cảnh bơi đàn nổi bật với dáng thon dài và vây dài đặc trưng. Cá hiền, khỏe, phù hợp bể cộng đồng rộng, nên nuôi nhóm 6+ con, nước 22–26°C.",
      origin: "Đông Nam Á", size: "8–10 cm", promo: "Không có", contactText: "", combo: {3:"111.000đ",5:"104.000đ",10:"98.000đ"}, gallery: ["assets/img/c_hmbd_rohani_1.jpg", "assets/img/c_hmbd_rohani_2.jpg"]
    },
{
      vn: "Cá Hồng My Gold", en: "Gold Rosy Barb", img: "c_h_ng_my_gold_1.jpg", photo: true, price: 449000,
      desc: "Cá Hồng My Gold là dòng cá cảnh bơi đàn nổi bật với sắc vàng ánh kim phủ đều thân và vây. Cá hiền, khỏe, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Nên nuôi nhóm 6–8 con trở lên, nước 22–26°C.",
      origin: "Lai tạo chọn lọc", size: "6–7 cm", promo: "Không có", contactText: "", combo: {}, gallery: ["assets/img/c_h_ng_my_gold_1.jpg", "assets/img/c_h_ng_my_gold_2.jpg"]
    },
{
    vn: "Cá Mị Nương Ngọc Lam TQ", en: "Cá Mị Nương Ngọc Lam TQ", img: "c_m_n_ng_ng_c_lam_tq_1.jpg", photo: true, price: "1.547.000đ",
    desc: "Cá Mị nương ngọc lam TQ là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "16–18 cm", promo: "Không có", contactText: "", combo: {3:"1.392.000đ",5:"1.315.000đ",10:"1.237.000đ"},
    gallery: ["assets/img/c_m_n_ng_ng_c_lam_tq_1.jpg", "assets/img/c_m_n_ng_ng_c_lam_tq_2.jpg"]
  },
{
    vn: "Cá Thần Tiên Dantum", en: "Cá Thần Tiên Dantum", img: "c_th_n_ti_n_dantum_1.jpg", photo: true, price: "380.000đ",
    desc: "Cá Thần tiên Dantum là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "2–3 cm", promo: "Không có", contactText: "", combo: {3:"360.000đ",5:"350.000đ",10:"320.000đ"},
    gallery: ["assets/img/c_th_n_ti_n_dantum_1.jpg", "assets/img/c_th_n_ti_n_dantum_2.jpg"]
  },
{
    vn: "Cá Whitefin Tetra", en: "Cá Whitefin Tetra", img: "c_whitefin_tetra_1.jpg", photo: true, price: "25.000đ",
    desc: "Cá Whitefin tetra là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "", promo: "Không có", contactText: "", combo: {3:"23.000đ",5:"22.000đ",10:"19.000đ"},
    gallery: ["assets/img/c_whitefin_tetra_1.jpg", "assets/img/c_whitefin_tetra_2.jpg"]
  },
{
    vn: "Cá Chuột Optimus Prime", en: "Cá Chuột Optimus Prime", img: "c_chu_t_optimus_prime_1.jpg", photo: true, price: "88.000đ",
    desc: "Cá Chuột optimus prime là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "", promo: "Không có", contactText: "", combo: {3:"83.000đ",5:"78.000đ",10:"74.000đ"},
    gallery: ["assets/img/c_chu_t_optimus_prime_1.jpg", "assets/img/c_chu_t_optimus_prime_2.jpg"]
  },
{
    vn: "Cá Mương Lục An Phẩm Cao", en: "Cá Mương Lục An Phẩm Cao", img: "c_m_ng_l_c_an_ph_m_cao_1.jpg", photo: true, price: "362.000đ",
    desc: "Cá Mương lục an phẩm cao là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "12–14 cm", promo: "Không có", contactText: "", combo: {3:"326.000đ",5:"308.000đ",10:"271.000đ"},
    gallery: ["assets/img/c_m_ng_l_c_an_ph_m_cao_1.jpg", "assets/img/c_m_ng_l_c_an_ph_m_cao_2.jpg"]
  },
{
    vn: "Cá Kim Thơm", en: "Cá Kim Thơm", img: "c_kim_th_m_1.jpg", photo: true, price: "270.000đ",
    desc: "Cá Kim thơm là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "8–9 cm", promo: "Không có", contactText: "", combo: {3:"248.000đ",5:"240.000đ",10:"225.000đ"},
    gallery: ["assets/img/c_kim_th_m_1.jpg", "assets/img/c_kim_th_m_2.jpg"]
  },
{
    vn: "Cá Hải Hồ Short", en: "Cá Hải Hồ Short", img: "c_h_i_h_short_1.jpg", photo: true, price: "473.000đ",
    desc: "Cá Hải hồ short là dòng cá cảnh được HPZ tuyển chọn, chăm sóc kỹ trước khi bán. Cá khỏe mạnh, dễ nuôi, phù hợp bể thủy sinh cộng đồng. Liên hệ HPZ để được tư vấn size phù hợp.",
    origin: "Việt Nam", size: "", promo: "Không có", contactText: "", combo: {3:"455.000đ",5:"438.000đ",10:"420.000đ"},
    gallery: ["assets/img/c_h_i_h_short_1.jpg", "assets/img/c_h_i_h_short_2.jpg"]
  }
].map(f => ({ ...f, src: (f.photo ? 'assets/img/' : SPR) + f.img, filter: f.hue ? `hue-rotate(${f.hue}deg) saturate(1.25)` : '' }));