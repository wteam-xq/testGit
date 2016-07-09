* [参考资料](https://git-scm.com/docs/git-remote)

## 关于 git remote 常用的指令：
* git remote rm origin
* git remote remove origin
	* 删除本地仓库指向的远程仓库

* git remote add origin https://github.com/csss/test
	* 新增远程仓库指向（https://github.com/csss/test 是已存在的远程仓库）

* git remote -v 
	* 查看远程服务器地址和仓库名称

* git remote show origin 
	* 查看远程服务器仓库状态(显示线上有哪些分支以及哪些分支已关联，本地有哪些分支)

* git remote add origin https://github.com/csss/test 
	* 添加远程仓库地址（将本地仓库与远程仓库建立关联）

* git remote set-url origin https://github.com/csss/test 
	* 设置远程仓库地址(用于修改远程仓库地址)