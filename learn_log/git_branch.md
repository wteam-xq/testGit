# git branch 指令

## 参考资料：
* [git branch官方API](https://git-scm.com/docs/git-branch)

## 实践总结：
* 本地新分支提交时指定远程创建新分支， 成功后这两个分支是否有关联？(木有！)

* 本地、远程两同名分支， 如果本地首次提交 git push 到该同名分支后， 这两分支是否就建立了关联？(木有！)

> if you wish to set tracking information for this branch you can do so with:

> git branch --set-upstream-to=origin/<branch> localBranchName

* 如果希望本地分支与远程分支建立关联可使用:
```
git branch --set-upstream-to=origin/remoteBranchName localBranchName

```

## git branch 常用指令：
* git branch
	* 查看工程的分支列表（本地分支）

* git branch -va
* git branch -r
* git branch -a
	* 查看分支列表（查看前建议 使用 `git pull -p` 更新下远程分支信息）
	* `-r` 只查看远程分支列表
	* `-a` 查看远程及本地分支列表
	* `-va` 查看详细的远程及本地分支列表

* git checkout  remotes/origin/master
	* 切换到远程的 master 分支

* git checkout -b dev
	* 基于当前分支创建一个叫“dev”的分支,并切换到该分支，等于以下俩指令(-b 以当前分支为基础)
	* git branch dev   创建一叫“dev”的分支
	* git checkout dev  切换到“dev”分支

* git branch -d dev
	* 将叫“dev”的本地分支删除掉（如果该分支代码未合并到其他分支，将无法删除）

* git branch -D dev
	* 将叫“dev”的本地分支删除掉（强制删除，即使该删除的分支有未合并代码）

* git branch -dr [origin/branch]
  * 相当于 `git branch -r -d origin/branch`删除的只是本地的缓存分支（`git branch -va`查看的那个），`git pull -p`可恢复；

* git push origin --delete [branch-name]
 	* 删除指定的远程分支（真正删除远程分支，需要当前账号的权限操作）

* git log --graph  
	* 查看分支合并情况（图方式显示）

## 实践场景：
* 本地新建的分支， 分支代码已经合并到主分支（master），然后误删了， 怎么根据提交commit恢复该分支？
* 使用 `git log -g`找回被误删分支之前提交的commit（如果找不到， 可以试试`git reflog`）, 拷贝commitId;
* 使用 `git branch branchName 3eac14d`(branchName为分支名、3eac14d为 commitId)， 基于当时的commit创建一个新分支；
* 切换到该新分支`git checkout branchName`查看代码， 就会发现该分支恢复了。

## 相关指令：
* [git_checkout.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_checkout.md)  切换代码分支指令：使用git分支必定会用到我！

* [git_merge.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_merge.md) 合并分支指令：注意我合并的是**本地分支** 代码;

* [git_pull.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_pull.md) 更新、合并指令： 我能合并**远程分支**的代码哟！
