# git rm 指令

## 参考资料：
* [git rm官方文档](https://git-scm.com/docs/git-rm)
* [git rm官方HELP文档](https://www.kernel.org/pub/software/scm/git/docs/git-rm.html)

## 实践总结：
* 用 rm(或系统下可视化操作移动至回收站) 来删除文件，仅仅是删除了物理文件，没有将其从 git 的记录中剔除, 用 git rm 来删除文件，同时还会将这个删除操作记录下来；
* 同 git clean 建议在可视化工具中操作删除文件；（更加直观且不易出错）

## git rm 常用指令：
* git rm test.txt
	* 删除test.txt文件， 如该文件已在**暂存区**则需加`-f`参数才能删除。

* git rm -r testFolder
	* 删除文件夹testFolder，如该文件夹已在**暂存区**则需加`-f`参数才能删除。

* git rm -f test.txt
    * 强行移除修改后文件(从暂存区和工作区中删除)

* git rm -rf testFolder
    * 强行移除修改后文件夹(从暂存区和工作区中删除)

## 相关指令：
* [git_status.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md)  查看当前代码状态指令： 使用我这个指令，可以确认删除是否成功。
* [git_clean.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_clean.md)  删除未跟踪文件指令： 我两功能差不多。
