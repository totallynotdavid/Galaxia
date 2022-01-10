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