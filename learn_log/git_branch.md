* [参考资料](https://git-scm.com/docs/git-branch)

# git 分支相关指令
* git branch 查看工程的分支列表
* git branch -va 可以查看远程分支列表
* git checkout  remotes/origin/master 切换到远程分支master
* git checkout -b dev    创建一个叫“dev”的分支,并切换到该分支，等于以下俩指令(-b 以当前分支为基础)
* git branch dev   创建一叫“dev”的分支
* git checkout dev  切换到“dev”分支
* git merge dev 将当前分支（一般是master主分支）与叫“dev”分支的代码合并
* git branch -d dev 将叫“dev”的分支删除掉
* git log —graph  查看分支合并情况（图方式显示）
* git 显示 缓存区列表
* git stash list
* git push origin newBranch:newBranch(推送分支到远程分支， ’newBranch’为本地分支，线上没有的那种)

* 本地新分支提交时指定远程创建新分支， 成功后这两个分支是否有关联？
