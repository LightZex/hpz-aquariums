#!/bin/bash
URL="https://lightzex.github.io/hpz-aquariums"
sleep 40
echo "=== live ==="
curl -s -o /dev/null -w "fish-data v15: %{http_code}\n" "$URL/assets/js/fish-data.js?v=15"
curl -s -o /dev/null -w "detail v7: %{http_code}\n" "$URL/assets/js/detail.js?v=7"
echo "Goyder eventPrice live:"
curl -s "$URL/assets/js/fish-data.js" | grep -A1 "Cá Goyder" | grep -o 'eventPrice: "[^"]*"'
echo "detail Liên hệ fallback live count:"
curl -s "$URL/assets/js/detail.js" | grep -c "Liên hệ"
