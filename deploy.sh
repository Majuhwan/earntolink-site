#!/bin/bash
# build + push site/ to gh-pages (GitHub Pages, custom domain earntolink.com)
set -e
cd "$(dirname "$0")"
npm run build
export GH_CONFIG_DIR=/Users/juhwanma/.config/gh
TOKEN=$(/opt/homebrew/bin/gh auth token)
cd site && rm -rf .git && git init -q && git checkout -q -b gh-pages && git add -A
git -c user.name=Majuhwan -c user.email=23695998+Majuhwan@users.noreply.github.com commit -qm "deploy $(date +%F)"
git push -q -f "https://x-access-token:$TOKEN@github.com/Majuhwan/earntolink-site.git" gh-pages
rm -rf .git
