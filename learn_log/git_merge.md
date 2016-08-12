# git merge 指令
* [参考资料](https://git-scm.com/docs/git-merge)
* [参考资料2](http://blog.csdn.net/hudashi/article/details/7664382)
* 关于 git merge 与 git rebase的区别请看这个[教程](http://backlogtool.com/git-guide/cn/stepup/stepup1_4.html);

# git merge 工作中碰到的问题重现：
* 1.分支testMerge 是基于master的分支；此时将master的代码备份下；
* 2.分支testMerge 分别修改两次， 然后改完都合并到master;master 提交该改动； 
* 3.将1中master备份的代码覆盖master， 然后提交代码；
* 4.此时再次将 分支testMerge代码git merge合并到master分支，发现其没变化了！

* 怎样让步骤4代码有变化？ 查看了下git merge --help 也没发现合适的指令;
* 总结：操作文件尽量别脱离git(例如上述步骤3，完全可以用git指令实现相同效果)；

## 相关指令：
[git_branch.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_branch.md)   分支相关操作指令： 跟`git merge`有关的也就我这个指令吧？
