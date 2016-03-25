new file 1

* `git stash` 指令理解
* [说明1](http://my.oschina.net/u/2298961/blog/381728)
* `git stash`操作之后会将 **工作区间** **缓存区间** 改动放到 **工作现场**
* '工作现场' 是一种中文翻译， 官方的叫法是'dirty working directory'
> Stash the changes in a dirty working directory away

* **工作现场**独立存在于所有分支， 也就是一个git 项目中只有一个**工作现场**，即使这个项目中有N个分支；（所以如果想在A分支改动的文件提交到B分支，不妨试用git stash）
* 如果有修改的文件从**缓存区间**中放入**工作现场**（git stash）, 当再次从**工作现场**取出时（git stash pop）， 该修改的文件会变回在**工作区间**；(新增的文件正常恢复到**缓存区间**)
