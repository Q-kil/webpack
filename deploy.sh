echo 'git auto push start...'
git add .
git commit -m "$1"
# git pull origin master
git push origin master
echo 'git auto push end!'