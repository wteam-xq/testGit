* `git stash` 指令理解
* [参考资料](http://my.oschina.net/u/2298961/blog/381728)
* `git stash`操作之后会将 **工作区间** **缓存区间** 改动放到 **工作现场**
* '工作现场' 是一种中文翻译， 官方的叫法是'dirty working directory'
> Stash the changes in a dirty working directory away

* **工作现场**独立存在于所有分支， 也就是一个git 项目中只有一个**工作现场**，即使这个项目中有N个分支；（所以如果想将A分支改动的文件提交到B分支，不妨试用git stash）
* 如果有**修改**的文件从**缓存区间**中放入**工作现场**（git stash）, 当再次从**工作现场**取出时（git stash pop）， 该修改的文件会变回在**工作区间**；(**新增**的文件则正常恢复到**缓存区间**)

## 关于 git stash 常用的指令： 

* git stash
* git stash save "这些是注释啦"
	* 新增安全工作区（将当前的所有改动全部放入安全工作区）
* git stash list 
	* 显示安全工作区列表
* git stash clear
	* 清空安全工作区列表（慎操作！）
* git stash pop
* git stash pop stash@{1}
	* 恢复安全工作区的代码（并删除），`git stash pop` = `git stash pop stash@{0}`，
* git stash apply
* git stash apply stash@{1}
	* 恢复安全工作区的代码（不删除），`git stash apply` = `git stash apply stash@{0}`
