echo "[deploying uralys.com]"
echo "> gatsby build"
gatsby build
echo "> copying .well-known"
cp -r .well-known public/.
echo "> copying readme.md"
cp -r readme.md public/.
echo "> publishing"
npx gh-pages -d public -b master -t
echo "> done."
