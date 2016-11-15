# git clean 指令

## 参考资料：
* [git clean官方API](https://git-scm.com/docs/git-clean)

* 删除 一些 没有 git add 的 文件；

## git reset 常用指令： 
* git clean -n
	* 显示 将要 删除的 文件 和  目录;

* git clean -f
	* 删除 文件

* git clean -df
	* 删除 文件 和 目录, 该指令很危险会将 .gitignore 配置的的文件也会被删除，慎用！

## 相关指令：
* [git_status.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md)  查看当前代码状态指令： 使用我这个指令，可以确认删除是否成功。