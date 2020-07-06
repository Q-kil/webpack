echo 'git auto push start...'
git add .
git commit -m "${2:-update}"
# git pull origin master
git push origin "$1"
echo 'git auto push end!'