# git diff 指令
* [官方文档](https://git-scm.com/docs/git-diff)
* [读懂diff-阮一峰](http://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html)

## git diff 常用指令：
* git diff
	* 显示**工作区间**所有改动的文件以及改动细节（比`git status`详细）, PS：如果所有改动已通过`git add -A`放入**暂存区**， 则该指令不会显示任何内容；

* git diff xxx.md
	* `xxx.md` 是文件名，查看某一个文件具体改动细节；

* git diff --cached
	* 所有改动已通过`git add -A`放入**暂存区**, 本指令能查看 **暂存区**所有改动的文件以及改动细节；

* git diff HEAD
	* 如果所有改动已通过`git commit` 提交**本地仓库**， 本指令能查看所有改动的文件以及改动细节；

* git diff branchA...branchB
	* 对比两分支A跟分支B的差异， 将列出所有文件以及改动细节， 所以显示内容可能会很多；


## 备注：
* 实际开发很少使用这个指令， 因为git的可视化工具显示的效果更好；


## 相关指令：
* [git status](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md) 查看当前代码状态指令： 这货显示的内容比我详细， 可惜比较难看懂；