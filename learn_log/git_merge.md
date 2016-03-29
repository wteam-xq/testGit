# git merge 工作中碰到的问题重现：
* 1.分支testMerge 是基于master的分支；此时将master的代码备份下；
* 2.分支testMerge 分别修改过两次， 然后改完都合并到master;master 提交该改动； 
* 3.将1中master备份的代码覆盖master， 然后提交代码；
* 4.此时再次将 分支testMerge代码git merge合并到master分支，发现其没变化了！


# 参考文档：
* [git merge 详细解释](http://blog.csdn.net/wh_19910525/article/details/7554489)
> 如果你想让"mywork"分支历史看起来像没有经过任何合并一样，你也许可以用 `git rebase`