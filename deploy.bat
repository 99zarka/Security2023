git init
git add .
git commit -m "setup gh-pages"
git branch -M main
git remote set-url origin https://github.com/99zarka/Security2023.git
git push -u origin main
npm run deploy && pause