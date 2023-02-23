echo "# MicrotasksPlusKabzda" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LovaVikasso/MicrotasksPlusKabzda.git
git push -u origin main


DEPLOY
yarn run deploy
gh-pages -d build
