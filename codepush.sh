set -e

git add docs/_posts
git add docs/.vuepress/config.js
git add codepush.sh

git commit -m "commit changes"

git push -u origin master