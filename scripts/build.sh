echo "[building uralys.com]"
echo "> gatsby build"
gatsby build;
echo "> copy to local apache server"
sudo cp -r public/* /Library/WebServer/Documents/
sudo cp -r public/.well-known /Library/WebServer/Documents/
echo "> done."
