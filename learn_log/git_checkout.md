# git checkout 指令

## 参考资料：
* [git checkout官方API](https://git-scm.com/docs/git-checkout)
* [git-修改撤销-廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374831943254ee90db11b13d4ba9a73b9047f4fb968d000)
* [git checkout详解](http://www.tuicool.com/articles/A3Mn6f)

## 实践总结：
* `git checkout` 的使用可以很复杂（具体用法，请打开以上参考资料）， 但日常生产中常用的有：
	* 1. 回退文件；（从暂存区、从本地仓库）
	* 2. 切换分支（包括新建、切换）；

## git checkout 常用指令：
* git checkout -- a.txt
	* **暂存区** 中的 a.txt文件 覆盖 工作区间的 a.txt，使用时注意路径；

* git checkout -- .
	* 将**暂存区**中的所有文件，覆盖工作区间，当前的所有修改均会被覆盖；

* git checkout head a.txt
	* 将 **本地仓库** 中的a.txt文件覆盖 工作区间的 a.txt，使用时注意路径；

* git checkout head .
	* 将 **本地仓库** 所有代码覆盖工作区间，当前的所有修改均会被覆盖，谨慎使用；

* git checkout dev
	* 切换到一个叫 “dev” 的分支；

* git checkout remotes/origin/master
	* 将当前分支切换到远程分支；

* git checkout -b dev
	* 基于当前分支创建一个叫“dev”的分支，然后切换过去；如果创建的分支名已存在会报错， 如参数换成`-B`则不会报错， 因为会将原同名分支覆盖掉（谨慎使用）；
* git checkout -b newBranch origin newBranch
	* 基于当前分支创建一名为`newBranch`的分支，并切换过去且关联远程同名分支；相当于`git checkout -b newBranch` + `git branch --set-upstream-to=origin/newBranch newBranch`

* git checkout --orphan dev
	* 基于当前分支创建一个叫“dev”的分支，然后切换过去；假如你的某个分支上，积累了无数次的提交，你也懒得去打理，打印出的log也让你无力吐槽，那么这个命令将是你的神器，它会基于当前所在分支新建一个赤裸裸的分支，没有任何的提交历史，但是当前分支的内容一一俱全。

* git checkout 0d1d7fc32
	* 0d1d7fc32为commitId, 代码处于 detached 状态， 提交commit 会新生成一个分支（临时分支）；
* git checkout -b old-branch-name 0d1d7fc32
	* 相当于 `git branch old-branch-name 0d1d7fc32` + `git checkout old-branch-name` 基于当时的commit恢复分支；（old-branch-name已被删除，且0d1d7fc32为old-branch-name分支上的提交）


## 相关指令：
* [git reset](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_reset.md) 代码撤销（回退）： 配合`git log`，我的回退实用性可以完爆`git checkout`;
