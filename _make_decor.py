# HPZ Aquaroom - sinh sprite trang trí đáy biển (tự vẽ, không cần tải)
# Output: assets/img/scene/{starfish,starfish_small,coral_pink,coral_orange,pearl_shell}.png
from PIL import Image, ImageDraw, ImageFilter
import math, os

OUT = os.path.join(os.path.dirname(__file__), 'assets', 'img', 'scene')
S = 4  # supersample

def canvas(size=256):
    im = Image.new('RGBA', (size*S, size*S), (0,0,0,0))
    return im, ImageDraw.Draw(im)

def save(im, name, size=192):
    im = im.resize((size, size), Image.LANCZOS)
    im.save(os.path.join(OUT, name))
    print('saved', name)

# ---------- SAO BIEN ----------
def starfish(name, base=(255,140,60), dark=(214,98,28)):
    im, d = canvas()
    cx = cy = 128*S
    R = 108*S; r = 44*S
    pts = []
    for i in range(10):
        ang = -math.pi/2 + i*math.pi/5
        rad = R if i % 2 == 0 else r
        pts.append((cx + rad*math.cos(ang), cy + rad*math.sin(ang)))
    # than + lam tron nhe
    d.polygon(pts, fill=base + (255,))
    for p in pts:
        d.ellipse([p[0]-16*S, p[1]-16*S, p[0]+16*S, p[1]+16*S], fill=base + (255,))
    # bong 3D: sang giua, toi o ria
    glow = Image.new('RGBA', im.size, (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx-70*S, cy-70*S, cx+70*S, cy+70*S], fill=(255,225,180,90))
    glow = glow.filter(ImageFilter.GaussianBlur(18*S))
    mask = Image.new('L', im.size, 0)
    md = ImageDraw.Draw(mask)
    md.polygon([(p[0],p[1]) for p in [(x,y) for x,y in pts]] , fill=255)
    for p in pts:
        md.ellipse([p[0]-16*S, p[1]-16*S, p[0]+16*S, p[1]+16*S], fill=255)
    im.paste(glow, (0,0), Image.composite(glow.split()[3], Image.new('L', im.size, 0), mask))
    # vien toi nhe + hat san
    dd = ImageDraw.Draw(im)
    for i in range(10):
        ang = -math.pi/2 + i*math.pi/5
        rad = (R+r)/2
        x0, y0 = cx + (rad-8*S)*math.cos(ang), cy + (rad-8*S)*math.sin(ang)
        dd.ellipse([x0-5*S, y0-5*S, x0+5*S, y0+5*S], fill=dark + (200,))
    dd.ellipse([cx-12*S, cy-12*S, cx+12*S, cy+12*S], outline=dark + (220,), width=3*S)
    save(im, name, 176)

starfish('starfish.png')
starfish('starfish_small.png', base=(255,170,90), dark=(224,120,40))

# ---------- SAN HO (fan coral: nhieu nhanh tua ra) ----------
def coral(name, trunk=(232,84,120), tip=(255,150,175)):
    im, d = canvas()
    cx = 128*S; base_y = 236*S
    branches = [(-58,150),(-34,190),(0,205),(36,188),(60,148)]
    for dx, ln in branches:
        steps = 24
        prev = (cx + dx*0.18*S, base_y)
        w0, w1 = 13*S, 3.2*S
        for i in range(1, steps+1):
            t = i/steps
            # cong dan ra ngoai
            bx = prev[0] + (dx*S - dx*0.18*S)/steps + math.sin(t*2.2)*1.2*S*(1 if dx>=0 else -1)
            by = prev[1] - (ln*S)/steps
            w = int(w0 + (w1-w0)*t)
            col = tuple(int(trunk[k] + (tip[k]-trunk[k])*t) for k in range(3)) + (255,)
            d.line([prev, (bx, by)], fill=col, width=w)
            d.ellipse([bx-w, by-w, bx+w, by+w], fill=col)
            prev = (bx, by)
        # cuon nho o dau nhanh
        tx, ty = prev
        col = tip + (255,)
        d.ellipse([tx-4*S, ty-4*S, tx+4*S, ty+4*S], fill=col)
    # da chan
    d.ellipse([cx-30*S, base_y-10*S, cx+30*S, base_y+8*S], fill=(120,110,100,255))
    save(im, name, 176)

coral('coral_pink.png')
coral('coral_orange.png', trunk=(240,130,60), tip=(255,196,120))

# ---------- SO MO CO NGOC TRAI ----------
def pearl_shell():
    im, d = canvas()
    cx = 128*S; cy = 150*S
    # thanh duoi (nua elip)
    d.ellipse([cx-92*S, cy-46*S, cx+92*S, cy+62*S], fill=(226,186,138,255))
    d.ellipse([cx-74*S, cy-38*S, cx+74*S, cy+48*S], fill=(244,212,168,255))
    # soc van soi
    for k in range(-3,4):
        x0 = cx + k*24*S
        d.line([(x0, cy-30*S),(x0 + k*3*S, cy+42*S)], fill=(206,164,116,220), width=3*S)
    # thanh tren mo nghieng
    lid = Image.new('RGBA', im.size, (0,0,0,0))
    ld = ImageDraw.Draw(lid)
    ld.ellipse([cx-88*S, cy-118*S, cx+88*S, cy+8*S], fill=(216,172,124,255))
    ld.ellipse([cx-72*S, cy-104*S, cx+72*S, cy-2*S], fill=(238,198,150,255))
    lid = lid.rotate(-16, center=(cx, cy+4*S), resample=Image.BICUBIC)
    im.alpha_composite(lid)
    # ngoc trai
    pg = Image.new('RGBA', im.size, (0,0,0,0))
    pd = ImageDraw.Draw(pg)
    px_, py_ = cx+2*S, cy-34*S
    pd.ellipse([px_-26*S, py_-26*S, px_+26*S, py_+26*S], fill=(255,240,250,110))  # halo
    pd.ellipse([px_-17*S, py_-17*S, px_+17*S, py_+17*S], fill=(248,244,252,255))
    pd.ellipse([px_-9*S, py_-11*S, px_+1*S, py_-1*S], fill=(255,255,255,255))
    pg = pg.filter(ImageFilter.GaussianBlur(1.2*S))
    im.alpha_composite(pg)
    save(im, 'pearl_shell.png', 192)

pearl_shell()
print('done ->', OUT)
