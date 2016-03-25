new File 2
* [参考资料](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html)
* `git commit -am` 相当于`git commit -a -m`
* `git commit -a`
	* Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.
* `git commit -m`
	* Use the given <msg> as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs.

* git commit -a -m 将 **工作区间** 以及 **缓存区** 代码放入 **本地仓库**（不包括**工作区间**新建的文件）
	* git commit -a (不允许commit中没 -m 指令，git 要求提交代码到 本地仓库必须填写 注释)
* git add -A 将所有 **工作区间** 代码放入 **缓存区间**（包括新建的文件）