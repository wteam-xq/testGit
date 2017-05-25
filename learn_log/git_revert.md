# git revert 指令

## 参考资料：
* [git revert官方API](https://git-scm.com/docs/git-revert)


## git revert 常用指令：
* git revert HEAD
	* 回退到上一次的commit;(会生成一新的commit, 执行成功将出现vi编辑界面，编辑新提交的注释)

* git revert HEAD^
* git revert HEAD~1
	* 回退到前前一次的commit;(可能会出现冲突，需要解决冲突然后`git add` + `git commit`生成新的`commit`)

* git revert HEAD^^
* git revert HEAD~2
	* 回退到前三次的commit;(可能会出现冲突，需要解决冲突然后`git add` + `git commit`生成新的`commit`)

* git revert commitId(032c6df2ad8469fdb5235ce30f968474bd3bce01)
	* 回退到指定commit;(可能会出现冲突，需要解决冲突然后`git add` + `git commit`生成新的`commit`)


## 相关指令：
* [git reset的区别](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_reset.md) 代码撤销（回退）指令： 我跟`git revert`不止长的像，实现的功能也差不多！
