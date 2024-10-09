# gallery-dl

## Instagram

```
gallery-dl -u USER -p 'PASSWORD' -o extractor.instagram.highlights=true --verbose LINK
```

gallery-dl -o extractor.reddit.comments=1 extractor.reddit.morecomments=1 extractor.reddit.videos=1 extractor.redgifs.format=1 --verbose https://www.reddit.com/user/3am-musings/

gallery-dl -o base-directory=KaylaDutton https://www.reddit.com/r/KaylaDutton/

# mattermost

# Powershell

Get-AppxProvisionedPackage -online | Out-GridView -PassThru | Remove-AppxProvisionedPackage -online

# rclone

View files ./rclone lsd personal: --drive-shared-with-me ./rclone lsd notuni:backup ./rclone lsd personal:general ./rclone lsd unishared:Comics

./rclone copy unishared:"Repositorio de libros y multimedia [BIBFIS]" personal:server/bibfis --stats 2s -vv

# docker

docker run -v C:/users/david:/my_files --name javinizer -p 8600:8600 -d jvlflame/javinizer:latest

#yt-dlp ./yt-dlp -a "D:/yt-dlp/dist/scraping/text.txt" --cookies-from-browser edge --concurrent-fragments 3 --sleep-interval 10
