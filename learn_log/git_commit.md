# git commit 指令
* [参考资料](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html)
* [参考资料2](https://git-scm.com/docs/git-commit)
* `git commit -am` 相当于`git commit -a -m`
* `git commit -a`
	* Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.
	* 该指令将**修改**或**删除**的改动放入暂存区，注意**新文件**不会放入暂存区；
* `git commit -m`
	* Use the given <msg> as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs.
	* 该指令将暂存区的改动放入本地仓库（当前分支），如果使用了多个“-m”则会将该提交分成多个段落显示；例如： 使用了`git commit -m "格式统一化" -m "多个注释会怎样？"` gitHub上会这样显示：
	* ![多行-m的截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_commit_s1.png)


* git commit -a -m 将 **工作区** 以及 **暂存区** 代码放入 **本地仓库**（不包括**工作区**新建的文件）
	* git commit -a (不允许commit中没 -m 指令，git 要求提交代码到 **本地仓库** 必须填写 注释)
* PS: git add -A 将所有 **工作区** 代码放入 **暂存区**（包括**新建**的文件）
