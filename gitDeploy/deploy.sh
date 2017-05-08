# 打开指定的工程目录
WEB_PATH='gitTmp/testDemo'
 
echo "Start deployment"
cd ~
cd $WEB_PATH
echo "pulling source code..."
# 保存工作区中的代码
git add -A && git stash save "save unfinished code..."
git checkout master
git reset --hard origin/master
git pull
