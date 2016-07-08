# git pull 指令
* [参考资料](https://git-scm.com/docs/git-pull)
* `git pull` 相当于 `git fetch` + `git merge`
* git pull 默认拉取跟当前分支对应的远程分支代码；
* git pull origin xxx(xxx 为远程分支名), 拉取指定分支代码；

* 测试： 当前分支为 testMerge2, 尝试 `git pull origin master`；
* 相当于 `git merge master`(如果本地的master跟远程分支代码已同步的话)

* 关于 本地分支跟远程分支建立关联: `git branch --set-upstream-to=origin/<remoteBranchName> localBranchName` [教程](http://www.tuicool.com/articles/vQ36Zj) 

> git branch --set-upstream-to=origin/<branch> localBranchName

* 最后的 localBranchName 可省略， 省略的话，则将指定的远程分支与当前分支关联;


## 关于 git pull 常用的指令： 
* git pull
	* 拉取与当前分支关联的远程分支代码（并自动合并当前改动的代码）
	
* git pull origin xxx
	* 拉取指定远程分支代码（并自动合并当前改动的代码）
