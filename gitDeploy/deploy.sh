# 打开指定的工程目录
WEB_PATH='gitTmp/testDemo'

echo "Start deployment"
cd ~
cd $WEB_PATH
echo "pulling source code..."
# 保存工作区中的代码
git add -A && git stash save "save unfinished code..."
# 切换至主分支
git checkout master
# 让本地仓库与远程仓库代码完全同步
git reset --hard origin/master
# 更新远程仓库代码
git pull
