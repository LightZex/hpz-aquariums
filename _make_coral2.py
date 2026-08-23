# HPZ - vẽ them san hô da dang: branch (nhánh), fan (quạt), brain (não), tube (ống)
# Output: assets/img/scene/coral_{purple_fan,green_branch,blue_tube,red_brain}.png
from PIL import Image, ImageDraw, ImageFilter
import math, random, os

OUT = os.path.join(os.path.dirname(__file__), 'assets', 'img', 'scene')
S = 4

def canvas(size=256):
    im = Image.new('RGBA', (size*S, size*S), (0,0,0,0))
    return im, ImageDraw.Draw(im)

def save(im, name, size=176):
    im = im.resize((size, size), Image.LANCZOS)
    im.save(os.path.join(OUT, name))
    print('saved', name)

# ---------- SAN HO QUAT (fan) - mang mong xoe rong ----------
def fan(name, base=(168,110,220), vein=(210,160,255)):
    im, d = canvas()
    cx, cy = 128*S, 224*S
    R1, R2 = 96*S, 150*S
    # hinh quat: elip mo rong tu tam duoi
    d.pieslice([cx-R2, cy-R2*1.15, cx+R2, cy+R2], 180, 360, fill=base+(235,))
    # lo mang bang cac khe cong
    for k in range(-4,5):
        ang = k*13
        rad = math.radians(ang)
        x2 = cx + math.sin(rad)*R2
        y2 = cy - math.cos(rad)*R2*1.1
        d.line([(cx,cy),(x2,y2)], fill=(0,0,0,0), width=int(3.5*S))
        # ve lai de tao khe trong (dung composite sau)
    # dung cach khac: ve mang bang cac line sang mau nen
    im2 = im.copy()
    dd = ImageDraw.Draw(im2)
    for k in range(-5,6):
        ang = math.radians(k*12.5)
        x2 = cx + math.sin(ang)*R2*0.92
        y2 = cy - math.cos(ang)*R2*1.08
        dd.line([(cx,cy),(x2,y2)], fill=(10,20,35,255), width=int(2.8*S))
    # mask chi giu phan quat
    m = Image.new('L', im.size, 0)
    md = ImageDraw.Draw(m)
    md.pieslice([cx-R2, cy-R2*1.15, cx+R2, cy+R2], 180, 360, fill=255)
    md.ellipse([cx-26*S, cy-14*S, cx+26*S, cy+10*S], fill=255)
    im2.putalpha(Image.composite(im2.split()[3].point(lambda v: v//6), Image.new('L',im.size,0), m))
    im = Image.composite(im2, im, m)
    d = ImageDraw.Draw(im)
    # go san ho noi song
    for k in range(-5,6):
        ang = math.radians(k*12.5)
        x2 = cx + math.sin(ang)*R2
        y2 = cy - math.cos(ang)*R2*1.1
        d.line([(cx,cy),(x2,y2)], fill=vein+(200,), width=int(1.1*S))
    # chan dam
    d.rounded_rectangle([cx-24*S, cy-6*S, cx+24*S, cy+16*S], radius=8*S, fill=(96,88,78,255))
    save(im, name)

# ---------- SAN HO NHANH XANH LA (branch) ----------
def green_branch():
    im, d = canvas()
    random.seed(31)
    cx, base = 128*S, 236*S
    def limb(x0, y0, ang, ln, w, depth, col):
        if depth <= 0 or ln < 8:
            return
        steps = 18
        px_, py_ = x0, y0
        a = ang
        for i in range(steps):
            a += random.uniform(-0.16, 0.16) + (ang-a)*0.04
            nx = px_ + math.cos(a)*ln/steps
            ny = py_ - math.sin(a)*ln/steps
            ww = max(1, int(w*(1-i/steps)+1))
            c = tuple(int(col[j] + (30+i/steps*45)) if j<3 else 255 for j in range(4)) if False else (col[0]+int(i/steps*40), col[1]+int(i/steps*40), col[2]+int(i/steps*40), 255)
            d.line([(px_,py_),(nx,ny)], fill=c, width=ww)
            d.ellipse([nx-ww/2,ny-ww/2,nx+ww/2,ny+ww/2], fill=c)
            px_, py_ = nx, ny
        # nhanh con
        if random.random()<0.85:
            limb(px_, py_, a+random.uniform(0.25,0.7), ln*random.uniform(0.55,0.75), w*0.65, depth-1, col)
        if random.random()<0.85:
            limb(px_, py_, a-random.uniform(0.25,0.7), ln*random.uniform(0.55,0.75), w*0.65, depth-1, col)
    limb(cx, base, math.pi/2, 95*S, 11*S, 4, (60,170,120))
    d.ellipse([cx-28*S, base-9*S, cx+28*S, base+9*S], fill=(96,88,78,255))
    save(im, 'coral_green_branch.png')

# ---------- SAN HO ONG (tube) ----------
def blue_tube():
    im, d = canvas()
    random.seed(53)
    cx, base = 128*S, 232*S
    tubes = [(-52,-14,86,17),(-20,-4,118,21),(16,-12,96,19),(46,-18,74,15)]
    for dx, tilt, ln, w in tubes:
        x0 = cx + dx*S
        x1 = x0 + tilt*S*2.2
        y0, y1 = base, base - ln*S
        # than ong gradient cam nhat -> tim
        g = Image.new('RGBA', im.size, (0,0,0,0))
        gd = ImageDraw.Draw(g)
        gd.line([(x0,y0+8*S),(x1,y1)], fill=(70,140,215,255), width=w*S)
        gd.line([(x0-w*0.32*S,y0+8*S),(x1-w*0.32*S,y1)], fill=(120,190,255,220), width=int(w*0.5*S))
        im.alpha_composite(g)
        d.ellipse([x1-w*0.62*S, y1-w*0.34*S, x1+w*0.62*S, y1+w*0.34*S], fill=(40,90,150,255))
        d.ellipse([x1-w*0.42*S, y1-w*0.2*S, x1+w*0.42*S, y1+w*0.2*S], outline=(150,205,255,230), width=int(1.6*S))
    d.rounded_rectangle([cx-64*S, base-6*S, cx+64*S, base+14*S], radius=8*S, fill=(96,88,78,255))
    save(im, 'coral_blue_tube.png')

# ---------- SAN HO NAO (brain) ----------
def red_brain():
    im, d = canvas()
    cx, cy = 128*S, 158*S
    RX, RY = 104*S, 84*S
    d.ellipse([cx-RX, cy-RY, cx+RX, cy+RY], fill=(225,95,85,255))
    # van nao: duong sin lap dan quanh ellip
    for k in range(9):
        yy = cy - RY + (k+0.5)/9 * 2*RY
        hw = math.sqrt(max(0.02, 1-((yy-cy)/RY)**2)) * RX
        pts=[]
        for i in range(41):
            u=i/40
            x = cx-hw + u*2*hw
            wob = math.sin(u*math.pi*6 + k*1.3) * 7*S * (0.4+0.6*math.sin(u*math.pi))
            pts.append((x, yy+wob))
        d.line(pts, fill=(178,58,52,255), width=int(4.5*S))
        d.line([(p[0]+2*S,p[1]) for p in pts], fill=(245,140,125,190), width=int(1.8*S))
    # bong sang
    sh = Image.new('RGBA', im.size,(0,0,0,0)); sd=ImageDraw.Draw(sh)
    sd.ellipse([cx-RX*0.62, cy-RY*0.72, cx-RX*0.05, cy+RY*0.05], fill=(255,190,175,80))
    sh=sh.filter(ImageFilter.GaussianBlur(6*S))
    m=Image.new('L',im.size,0); md=ImageDraw.Draw(m)
    md.ellipse([cx-RX,cy-RY,cx+RX,cy+RY],fill=255)
    im.alpha_composite(Image.composite(sh,Image.new('RGBA',im.size,(0,0,0,0)),m))
    d.ellipse([cx-30*S, cy+RY-12*S, cx+30*S, cy+RY+10*S], fill=(96,88,78,255))
    save(im, 'coral_red_brain.png')

fan('coral_purple_fan.png')
green_branch()
blue_tube()
red_brain()
print('done ->', OUT)
