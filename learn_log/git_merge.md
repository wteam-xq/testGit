# git merge 指令

## 参考资料
* [git merge官方API](https://git-scm.com/docs/git-merge)
* [git merge 简介](http://blog.csdn.net/hudashi/article/details/7664382)
* [合并分支如何简洁](http://hungyuhei.github.io/2012/08/07/better-git-commit-graph-using-pull---rebase-and-merge---no-ff.html)

## 实践总结：
* 关于 git merge 与 git rebase的区别请看这个[教程](http://backlogtool.com/git-guide/cn/stepup/stepup1_4.html);
* PS： 不是小需求（半天内能完成的改动）不太建议直接使用merge指令合并分支，因为操作的都是本地分支无法保证待合并的分支（例如上述的branchName分支）是最新；
* 解决： 使用`git pull origin branchName` ，使用远程 'branchName'分支合并当前分支；（git pull 指令会包含git merge操作）

## git merge 常用指令：
* git merge branchName
	* 将当前分支 与 **本地** 叫“branchName”分支的代码合并（branchName代码合并到当前分支）；

* git merge --no-ff branchName
	* 将当前分支 与 **本地** 叫“branchName”分支的代码合并（branchName代码合并到当前分支）,并且显示合并细节，具体表现在 提交线路图会出现交叉线；

* git merge --squash branchName
	* 合并新分支代码时， 只将分支新改动放入暂存区，不产生commit;（合并分支减少commit）

# 实践场景：
* 1.分支testMerge 是基于master的分支；此时将master的代码备份下；
* 2.分支testMerge 分别修改两次， 然后改完都合并到master;master 提交该改动；
* 3.将1中master备份的代码覆盖master， 然后提交代码；
* 4.此时再次将 分支testMerge代码git merge合并到master分支，发现其没变化了！

* 怎样让步骤4代码有变化？ 查看了下git merge --help 也没发现合适的指令;
* 总结：操作文件尽量别脱离git(例如上述步骤3，完全可以用git指令实现相同效果)；

## 相关指令：
* [git_branch.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_branch.md)   分支相关操作指令： 跟`git merge`有关的也就我这个指令吧？

* [git_pull.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_pull.md) 更新、合并指令： 这个指令是我小弟，合并分支直接找我就行！

* [git_rebase.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_rebase.md) 合并其他分支代码指令： 其实我也可以合并其他分支代码的！
