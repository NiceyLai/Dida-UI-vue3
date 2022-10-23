rm -rf dist &&
yarn build:website &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:Nicey-Lai/dida-ui.git &&
git push -f -u origin master &&
cd -
echo https://niceylai.github.io/dida-ui-website/