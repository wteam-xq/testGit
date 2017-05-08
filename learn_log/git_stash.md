# git stash 指令

## 参考资料：
* [保存当前工作现场](http://my.oschina.net/u/2298961/blog/381728)
* [git stash官方API](https://git-scm.com/docs/git-stash)

## 实践总结：
* `git stash`操作之后会将 **工作区** **暂存区** 的改动放到 **工作现场**
* '工作现场' 是一种中文翻译， 官方的叫法是'dirty working directory'
> Stash the changes in a dirty working directory away

* **工作现场**独立存在于所有分支， 也就是一个git 项目中只有一个**工作现场**，即使这个项目中有N个分支；（所以如果想将A分支改动的代码切换到B分支，不妨试用git stash）
* ![git_stash截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_stash_s1.png)
* 如果有**修改**的文件从**暂存区间**中放入**工作现场**（git stash）, 当再次从**工作现场**取出时（git stash pop）， 该修改的文件会变回在**工作区间**；(**新增**的文件则正常恢复到**暂存区间**)

## git stash 常用指令：
* git stash
* git stash save "这些是注释啦"
	* 新增工作现场（将当前的所有改动全部放入工作现场）, `git stash`的默认注释为当前分支上一次commit的注释

* git stash list
	* 显示工作现场列表

* git stash clear
	* 清空工作现场列表（慎操作！）

* git stash drop
* git stash drop stash@{0}
	* 删除某一个工作现场，默认删除最新工作现场：`git stash drop` = `git stash drop stash@{0}`

* git stash pop
* git stash pop stash@{0}
* git stash pop --index stash@{0}
	* 恢复工作现场的代码（并删除），默认恢复最新工作现场：`git stash pop` = `git stash pop stash@{0}`, --index 参数：不仅恢复工作区，还恢复暂存区;

* git stash apply
* git stash apply --index stash@{0}
	* 恢复工作现场的代码（不删除），默认恢复最新工作现场：`git stash apply` = `git stash apply --index stash@{0}`, --index 参数：不仅恢复工作区，还恢复暂存区


## 相关指令：
* [git_status.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md)  查看当前代码状态指令： 使用我这个指令，只是为了确认放入 **工作现场** 是否成功。
