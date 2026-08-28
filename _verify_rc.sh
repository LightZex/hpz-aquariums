#!/bin/bash
URL="https://lightzex.github.io/hpz-aquariums"
sleep 45
echo "=== live ==="
curl -s -o /dev/null -w "fish-data v18: %{http_code}\n" "$URL/assets/js/fish-data.js?v=18"
echo "Red Cherry live:"
curl -s "$URL/assets/js/fish-data.js" | grep -c "Red Cherry AB Longfin"
echo "combo 34000 live:"
curl -s "$URL/assets/js/fish-data.js" | grep -c "combo: {3:34000,5:32000,10:31000}"
echo "redcherry img live:"
curl -s -o /dev/null -w "redcherry_1.jpg: %{http_code}\n" "$URL/assets/img/redcherry_1.jpg"
