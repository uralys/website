echo "[deploying uralys.com]"
echo "> gatsby build"
gatsby build
echo "> copy .well-known"
cp -r .well-known public/.
echo "> publishing"
npx gh-pages -d public -b master -t
echo "> done."
