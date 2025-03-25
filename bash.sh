
# Windows PowerShell
git clone https://github.com/shouwei6902/shouwei6902.github.io
cd shouwei6902.github.io
npm install
Compress-Archive -Path * -DestinationPath ../siihg-website-$(Get-Date -Format "yyyyMMdd").zip
