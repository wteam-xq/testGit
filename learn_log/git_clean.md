# git clean 指令

## 参考资料：
* [git clean官方API](https://git-scm.com/docs/git-clean)

## 实践总结：
* git clean 删除 一些 没有 git add 的文件(git未跟踪的文件)；
* 同 git diff， 建议在可视化工具中（如：sourceTree/TortoiseGit）操作删除未跟踪文件；（更加直观且不易出错）

## git clean 常用指令：
* git clean -n
	* 显示 将要 删除的 文件 和  目录;

* git clean -f
	* 删除 文件

* git clean -df
	* 删除 文件 和 目录, 该指令很危险会将 .gitignore 配置的的文件也会被删除，慎用！

## 相关指令：
* [git_status.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md)  查看当前代码状态指令： 使用我这个指令，可以确认删除是否成功。
* [git_rm.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_rm.md)  删除文件指令： 即使已经跟踪的文件、文件夹， 俺也能删除哦！
