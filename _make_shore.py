# HPZ - vẽ dải cát biển mượt (đường cong sóng cát, không phải sprite pixel)
# Output: assets/img/scene/shore_curve.png (2560x300, trong suốt phía trên)
from PIL import Image, ImageDraw, ImageFilter
import math, os, random

OUT = os.path.join(os.path.dirname(__file__), 'assets', 'img', 'scene')
W, H = 2560, 340
SS = 2
im = Image.new('RGBA', (W*SS, H*SS), (0,0,0,0))
d = ImageDraw.Draw(im)

random.seed(7)

# ---- đường viền cát: sóng sin chồng lớp, chỗ cao chỗ thấp ----
pts_top = []
n = 220
for i in range(n+1):
    x = i/n * W * SS
    y = (60 + 26*math.sin(i/n*6.2) + 14*math.sin(i/n*13.7 + 1.4) + 7*math.sin(i/n*27 + 3.1)) * SS
    pts_top.append((x, y))

# vùng cát: từ đường cong xuống đáy
poly = [(0, H*SS)] + pts_top + [(W*SS, H*SS)]
d.polygon(poly, fill=(216, 186, 128, 255))

# ---- gradient sáng tối theo độ sâu cát (vẽ từng dải ngang mờ dần) ----
grad = Image.new('RGBA', im.size, (0,0,0,0))
gd = ImageDraw.Draw(grad)
for yy in range(H*SS):
    t = yy/(H*SS)
    # trên sáng (gần mặt cát), dưới đậm hơn chút cho có khối
    r = int(226 - 34*t); g = int(196 - 30*t); b = int(138 - 24*t)
    gd.line([(0,yy),(W*SS,yy)], fill=(r,g,b,110))
# clip gradient theo hình cát
mask = Image.new('L', im.size, 0)
md = ImageDraw.Draw(mask)
md.polygon([(0, H*SS)] + pts_top + [(W*SS, H*SS)], fill=255)
im.paste(grad, (0,0), mask)

d = ImageDraw.Draw(im)

# ---- hạt cát lấm tấm ----
for _ in range(2600):
    x = random.uniform(0, W*SS)
    # chỉ nhận điểm dưới đường cong
    xi = x/(W*SS)*n
    ytop = (60 + 26*math.sin(xi/n*6.2) + 14*math.sin(xi/n*13.7+1.4) + 7*math.sin(xi/n*27+3.1)) * SS
    y = random.uniform(ytop+6, H*SS)
    rr = random.uniform(0.8, 2.2)*SS
    tone = random.choice([(190,158,104,120),(240,214,164,150),(160,130,86,90)])
    d.ellipse([x-rr,y-rr,x+rr,y+rr], fill=tone)

# ---- vệt gợn sóng cát (sand ripple) cong nhẹ ----
for k in range(9):
    yb = 105 + k*26 + random.uniform(-6,6)
    pts = []
    for i in range(n+1):
        x = i/n*W*SS
        y = (yb + 5*math.sin(i/n*11 + k*1.7) + 3*math.sin(i/n*23 + k)) * SS
        pts.append((x,y))
    col = (172,140,92,70) if k%2==0 else (244,218,168,80)
    d.line(pts, fill=col, width=int(2.2*SS))

# bo mềm mép trên
im = im.filter(ImageFilter.GaussianBlur(1.1*SS))

out = im.resize((W, H), Image.LANCZOS)
out.save(os.path.join(OUT, 'shore_curve.png'))
print('saved shore_curve.png', out.size)
