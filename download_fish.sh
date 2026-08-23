#!/usr/bin/env bash
# Tải ảnh cá tạm từ Wikimedia Commons (CC/Public domain) về assets/img/
set -u
cd "$(dirname "$0")"
OUT="assets/img"
mkdir -p "$OUT"

# slug | Wikimedia search term
map="betta|Betta splendens
koi|Koi fish
guppy|Guppy fish
neon|Neon tetra
molly|Poecilia molly
goldfish|Goldfish
angelfish|Pterophyllum angelfish
oscar|Astronotus ocellatus oscar
platy|Platy fish Xiphophorus
discus|Symphysodon discus
arowana|Scleropages arowana
corydoras|Corydoras catfish
gourami|Trichogaster gourami
rasbora|Rasbora fish
swordtail|Xiphophorus swordtail
pleco|Hypostomus plecostomus
ram|Mikrogeophagus ramirezi
zebra|Zebra danio"

while IFS='|' read -r slug term; do
  [ -z "$slug" ] && continue
  echo "== $slug ($term) =="
  api="https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=$(python -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$term")&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json"
  json=$(curl -s -A "HPZAquaroomBot/1.0 (contact: webmaster@example.com)" "$api")
  url=$(echo "$json" | python -c "import sys,json;d=json.load(sys.stdin);p=d.get('query',{}).get('pages',{});urls=[pg['imageinfo'][0]['thumburl'] for pg in p.values() if 'imageinfo' in pg and not pg['imageinfo'][0]['thumburl'].lower().endswith('.svg')];print(urls[0] if urls else '')" 2>/dev/null)
  if [ -n "$url" ]; then
    curl -s -L -A "Mozilla/5.0" "$url" -o "$OUT/$slug.jpg"
    echo "  saved $OUT/$slug.jpg ($(wc -c < "$OUT/$slug.jpg") bytes)"
  else
    echo "  NO IMAGE FOUND"
  fi
done <<< "$map"
echo "DONE"
