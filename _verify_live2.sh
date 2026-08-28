#!/bin/bash
URL="https://lightzex.github.io/hpz-aquariums"
sleep 40
echo "=== live ==="
curl -s -o /dev/null -w "fish-data v16: %{http_code}\n" "$URL/assets/js/fish-data.js?v=16"
curl -s -o /dev/null -w "detail v8: %{http_code}\n" "$URL/assets/js/detail.js?v=8"
echo "Blue combo live:"
curl -s "$URL/assets/js/fish-data.js" | grep -o 'combo:{3:251000,5:236000,10:204000}'
echo "Goyder contactText live:"
curl -s "$URL/assets/js/fish-data.js" | grep -o 'contactText:"[^"]*"'
echo "Blue promo live:"
curl -s "$URL/assets/js/fish-data.js" | grep -o 'promo:"Mua 4 tặng 1"'
