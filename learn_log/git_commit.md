# git commit 指令

## 参考资料：
* [git commit官方HELP](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html)
* [git commit官方API](https://git-scm.com/docs/git-commit)

## 实践总结：
* `git commit -am` 相当于`git commit -a -m`
* `git commit -a`
	* Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.
	* 该指令将**修改**或**删除**的改动放入暂存区，注意**新文件**不会放入暂存区；
* `git commit -m`
	* Use the given <msg> as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs.
	* 该指令将暂存区的改动放入本地仓库（当前分支），如果使用了多个“-m”则会将该提交分成多个段落显示；例如： 使用了`git commit -m "格式统一化" -m "多个注释会怎样？"` gitHub上会这样显示：
	* ![多行-m的截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_commit_s1.png)

## git commit 常用指令：
* git commit -am "注释内容"
  * 将 **工作区** 以及 **暂存区** 代码放入 **本地仓库**（不包括**工作区**新建的文件）
  * `git add -A`将所有 **工作区** 代码放入 **暂存区**（包括**新建**的文件）

* git commit -m "注释内容"
  * 将 **暂存区** 代码放入 **本地仓库**

* git commit --amend
	* 将 **暂存区** 内容再次提交到 **本地仓库** ，该改动会添加到前一次`commit`中(不产生新的`commit`)；指令执行完将进入 vi 编辑新commit注释界面；(执行该指令前注意先执行`git add -A`)

## 相关指令：
* [git_status.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md)  查看当前代码状态指令： 提交代码到**本地仓库**后， 用我可以查看有多少个commit等待提交到远程哦！

* [git_push.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_push.md) 提交代码至远程仓库指令： `git commit`后， 接下来就是我`git push`出场了！
