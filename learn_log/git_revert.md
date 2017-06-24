# git revert 指令

## 参考资料：
* [git revert官方API](https://git-scm.com/docs/git-revert)

## 实践总结：
* `git revert` 撤销指定commit， 例如： 有commit1~commit10, 撤销commit5的改动， 则commit6~commit10改动会保留；（所以实现效果上跟`git reset`还是有区别的）

## git revert 常用指令：
* git revert HEAD
	* 撤销上一次的commit;(会生成一新的commit, 执行成功将出现vi编辑界面，编辑新提交的注释)

* git revert HEAD^
* git revert HEAD~1
	* 撤销前前一次的commit;(可能会出现冲突，需要解决冲突然后`git add` + `git commit`生成新的`commit`)

* git revert HEAD^^
* git revert HEAD~2
	* 撤销前三次的commit;(可能会出现冲突，需要解决冲突然后`git add` + `git commit`生成新的`commit`)

* git revert 0d1d7fc32
	* 0d1d7fc32为commitId, 撤销指定commit;(可能会出现冲突，需要解决冲突然后`git add` + `git commit`生成新的`commit`)

* git revert -m 1 0d1d7fc32
	* 0d1d7fc32为合并分支的commitId,回退merge操作;

## 相关指令：
* [git reset的区别](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_reset.md) 代码撤销（回退）指令： 我跟`git revert`不止长的像，实现的功能也差不多！
