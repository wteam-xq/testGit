# git pull 指令

## 参考资料：
* [git pull官方API](https://git-scm.com/docs/git-pull)

## 实践总结：
* `git pull` 相当于 `git fetch` + `git merge`
* git pull 默认拉取跟当前分支对应的远程分支代码；
* git pull origin xxx(xxx 为远程分支名), 拉取指定分支代码；
* 测试： 当前分支为 testMerge2, 尝试 `git pull origin master`；
* 相当于 `git merge master`(如果本地的master跟远程分支代码已同步的话)
* 如当前分支是新分支，使用该指令将提示：[本地分支跟远程分支建立关联:](http://www.tuicool.com/articles/vQ36Zj)
```
git branch --set-upstream-to=origin/<branch> localBranchName
```
* 最后的 localBranchName 可省略， 省略的话，则将指定的远程分支与当前分支关联;


## git pull 常用指令：
* git pull
	* 拉取与当前分支关联的远程分支代码（并自动合并当前改动的代码， 如本地已有commit会产生一个新的commit）

* git pull --rebase
	* 拉取与当前分支关联的远程分支代码（并自动合并当前改动的代码， 如本地已有commit**不会**产生新的commit）

* git pull origin xxx
	* 拉取指定远程分支代码（并自动合并当前改动的代码）

* git pull -p
	* 更新远程分支信息，本指令相当于`git fetch --prune origin` 或 `git fetch -p`例如：远程删除或新增了新的分支， 本地git branch -va因为缓存看到的并不是最新分支信息，用该指令就能与远程分支列表保持一致；
	
## 相关指令：
* [git fetch](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_fetch.md)  更新代码（不合并本地修改）指令： 虽然大师说[少用git pull多用git fetch](http://www.oschina.net/translate/git-fetch-and-merge)， 实际上大家还是只用`git pull`忘了有我这个`git fetch`;

* [git_merge.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_merge.md) 合并分支指令：`git pull`是领导， 活儿都是我们干的！诶！ 这评论区是匿名的吧？
