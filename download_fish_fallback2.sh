#!/usr/bin/env bash
set -u
cd "$(dirname "$0")"
OUT="assets/img"
UA="Mozilla/5.0"

# angelfish (Marbled angelfish, public domain)
curl -s -L -A "$UA" "https://upload.wikimedia.org/wikipedia/commons/8/8d/Marbled_angelfish.jpg" -o "$OUT/angelfish.jpg"
echo "angelfish $(wc -c < "$OUT/angelfish.jpg")"

# zebra (Danio rerio, public domain)
curl -s -L -A "$UA" "https://upload.wikimedia.org/wikipedia/commons/e/e8/Danio_rerio.JPG" -o "$OUT/zebra.jpg"
echo "zebra $(wc -c < "$OUT/zebra.jpg")"

# molly + ram: query Wikimedia API for first non-svg image
fetch_api() {
  slug="$1"; term="$2"
  api="https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=$(python -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$term")&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json"
  json=$(curl -s -A "$UA" "$api")
  url=$(echo "$json" | python -c "import sys,json;d=json.load(sys.stdin);p=d.get('query',{}).get('pages',{});urls=[pg['imageinfo'][0]['thumburl'] for pg in p.values() if 'imageinfo' in pg and not pg['imageinfo'][0]['thumburl'].lower().endswith('.svg')];print(urls[0] if urls else '')" 2>/dev/null)
  if [ -n "$url" ]; then
    curl -s -L -A "$UA" "$url" -o "$OUT/$slug.jpg"
    echo "$slug -> $(wc -c < "$OUT/$slug.jpg") bytes"
  else
    echo "$slug -> NO IMAGE"
  fi
}
fetch_api molly "Poecilia sphenops"
fetch_api ram "Mikrogeophagus ramirezi"
echo DONE
