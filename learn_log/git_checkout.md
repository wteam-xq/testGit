# git checkout 指令
* [参考资料](https://git-scm.com/docs/git-checkout)
* [参考资料2]（http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374831943254ee90db11b13d4ba9a73b9047f4fb968d000）

* `git checkout` 的使用可以很复杂（具体用法，请打开以上参考资料）， 但日常生产中常用的有：
	* 1. 回退文件；（从暂存区、从本地仓库）
	* 2. 切换分支（包括新建、切换）；

## git checkout 常用指令： 
* git checkout -- a.txt 
	* **暂存区** 中的 a.txt文件 覆盖 工作区间的 a.txt，使用时注意路径；

* git checkout -- .
	* 将**暂存区**中的所有文件，覆盖工作区间，当前的所有修改均会被覆盖；(不存在 git checkout -- -A, git checkout -- *，其他类似指令参照 [git_add.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_add.md) )

* git checkout head a.txt
	* 将 **本地仓库** 中的a.txt文件覆盖 工作区间的 a.txt，使用时注意路径；

* git checkout head .
	* 将 **本地仓库** 所有代码覆盖工作区间，当前的所有修改均会被覆盖，谨慎使用；(不存在 git checkout head -A, git checkout head *，其他类似指令参照 [git_add.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_add.md) )

* git checkout dev
	* 切换到一个叫 “dev” 的分支；

* git checkout remotes/origin/master
	* 将当前分支切换到远程分支；

* git checkout -b dev
	* 基于当前分支创建一个叫“dev”的分支，然后切换过去；

## 相关指令：
* [git reset](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_reset.md) 代码撤销（回退）： 配合`git log`，我的回退实用性可以完爆`git checkout`;