# git pull 指令
* `git pull` 相当于 `git fetch` + `git merge`
* git pull 默认拉取跟当前分支对应的远程分支代码；
* git pull origin xxx(xxx 为远程分支名), 拉取指定分支代码；

## 测试： 当前分支为 testMerge2, 尝试 `git pull origin master`；
* 相当于 `git merge master`(如果本地的master跟远程分支是一样的话)

* 关于 本地分支跟远程分支建立关联: `git branch --set-upstream localBranchName origin/remoteBranchName` [教程](http://www.tuicool.com/articles/vQ36Zj) 

> The --set-upstream flag is deprecated and will be removed. Consider using --track or --set-upstream-to

* `--set-upstream` 参数(git branch的参数)已被git无情抛弃，不久的将来会被git扫出家门。建议使用`--track` 或者`--set-upstream-to`代替;


## 关于 git pull 常用的指令： 
* git pull
	** 拉取与当前分支关联的远程分支代码（并自动合并当前改动的代码）
* git pull origin xxx
	** 拉取指定远程分支代码（并自动合并当前改动的代码）
