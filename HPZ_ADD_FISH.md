# HPZ Aquariums — Workflow thêm cá (script/tham khảo)

Repo: C:\Users/daodu\.hermes\hpz-aquariums
Live: https://lightzex.github.io/hpz-aquariums/

## Template detail chuẩn (chỉ 7 trường)
Hệ / Phù Hợp Bể / Size / Tình Trạng / Giá Niêm Yết / Giá Event / Tính Cách
(ĐÃ BỎ: Nguồn gốc, Nhiệt độ, Thức ăn, Kích thước)

## Quy tắc chính tả (bắt buộc)
- Nhãn: VIẾT HOA đầu mỗi từ.
- Giá trị: Thủy Sinh (không thủy sinh), Không hỗ trợ (không ko hỗ trợ), Còn Hàng (từ stock).
- status: stock→Còn Hàng | pre-order→Đặt Trước | sold out→Hết Hàng (auto trong detail.js)
- eventPrice: không có → "Không hỗ trợ"; có → "149.000₫"

## Thêm 1 con cá
1. Ảnh: `python -c "from PIL import Image; im=Image.open(SRC).convert('RGB'); im.save('assets/img/<ten>_1.jpg',quality=90); im.save('assets/img/<ten>_og.jpg',quality=90)"`
2. Thêm vào FISH (fish-data.js):
```
{
  vn: "Cá ...", en: "<Tên latin>", img: "<ten>_1.jpg", photo: true, price: <niemYet>,
  he: "Hệ ...", tank: "Thủy Sinh, Suối, Biotop", status: "stock", eventPrice: "Không hỗ trợ",
  desc: "...",
  origin: "...", size: "10–15 cm", temperament: "Thân thiện, ...", gallery: ["assets/img/<ten>_1.jpg", "assets/img/<ten>_2.jpg"]
}
```
3. Bump cache-bust: beca.html + fish.html → fish-data.js?v=N (tăng 1). Nếu sửa detail.js cũng bump ?v của nó.
4. (Cuối) git commit + push origin main.

## Pitfalls
- Server hay chết: trước khi bảo verify, `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8000/index.html`, restart nếu ≠200.
- Vision 401: dùng PIL đọc metadata, không bịa ảnh.
- Không bịa: grep file served trước khi báo xong.
