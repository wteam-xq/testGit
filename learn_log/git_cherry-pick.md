# git cheery-pick 指令

## 参考资料：
* [git cherry-pick官方API](https://git-scm.com/docs/git-cherry-pick)

## 实践总结：
* `git cherry-pick` 将其他分支的commit对应的改动添加到当前分支, 当然其他分支的代码不会受到影响；


## git cheery-pick 常用指令：
* git cherry-pick <commit-id>
	* 将指定commitId（一般是其他分支的commitId）的改动， 添加到当前分支；

* git cherry-pick --continue
    * 当迁移改动出现冲突时， 手动解决完冲突后，该指令告诉git冲突已解决；

* git cherry-pick --quit
    * 当迁移改动出现冲突时，忽略冲突继续下一步骤（生成新的commitId）；

* git cherry-pick --abort
    * 当迁移改动出现冲突时，撤销`git  cherry-pick`指令；

## 相关指令：
* [git checkout](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_checkout.md) 切换分支： 使用`git cherry-pick`前一般先使用我切换分支;
