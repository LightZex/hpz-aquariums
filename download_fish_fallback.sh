#!/usr/bin/env bash
# Fallback: tải 4 con lỗi từ Unsplash (free commercial, no attribution)
set -u
cd "$(dirname "$0")"
OUT="assets/img"
fetch() {
  slug="$1"; q="$2"
  # Unsplash featured search URL -> redirect tới ảnh
  url="https://source.unsplash.com/featured/?$(python -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$q")"
  curl -s -L -A "Mozilla/5.0" "$url" -o "$OUT/$slug.jpg"
  sz=$(wc -c < "$OUT/$slug.jpg")
  echo "$slug -> $sz bytes"
}
fetch molly    "molly fish aquarium"
fetch angelfish "angelfish aquarium"
fetch ram      "ram cichlid fish"
fetch zebra    "zebra danio fish"
echo DONE
