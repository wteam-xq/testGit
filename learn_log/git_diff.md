# git diff 指令

## 参考资料：
* [官方文档](https://git-scm.com/docs/git-diff)
* [读懂diff-阮一峰](http://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html)
* [比较提交 - Git Diff](http://gitbook.liuhui998.com/3_5.html)

## 实践总结：
* 实际开发很少使用这个指令， 因为git的可视化工具（如：sourceTree/TortoiseGit）显示的效果更好；（更加直观且不易出错）
![git_diff截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_diff_s1.png)

## git diff 常用指令：
* git diff
	* 显示**工作区** 对比 **暂存区** 所有改动的文件以及改动细节（比`git status`详细）;

* git diff xxx.md
	* `xxx.md` 是文件名，查看某一个文件具体改动细节；

* git diff --cached
	* 显示**暂存区** 对比 **本地仓库** 所有改动的文件以及改动细节；

* git diff HEAD
	* 显示**工作区间** 对比 **本地仓库** 所有改动的文件以及改动细节；

* git diff branchA...branchB
	* 对比分支A跟分支B的差异， 将列出所有文件以及改动细节， 所以显示内容会很多；

## 相关指令：
* [git status](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md) 查看当前代码状态指令： 这货显示的内容比我详细， 可惜比较难看懂；
