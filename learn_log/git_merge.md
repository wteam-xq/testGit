# git merge 工作中碰到的问题重现：
* 1.分支testMerge 是基于master的分支；此时将master的代码备份下；
* 2.分支testMerge 分别修改两次， 然后改完都合并到master;master 提交该改动； 
* 3.将1中master备份的代码覆盖master， 然后提交代码；
* 4.此时再次将 分支testMerge代码git merge合并到master分支，发现其没变化了！


# 参考文档：
* [git merge 详细解释](http://blog.csdn.net/hudashi/article/details/7664382) 

* 怎样让步骤4代码有变化？ 查看了下git merge --help 也没发现合适的指令，只能避免这样的操作；
