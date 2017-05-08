# git tag 指令

## 参考教程：
* [git tag官方API](https://git-scm.com/docs/git-tag)
* [git tag官方HELP](https://www.kernel.org/pub/software/scm/git/docs/git-tag.html)

## 实践总结：
* git标签分为两种类型：
* **轻量标签**和**附注标签**。**轻量标签**是指向提交对象的引用，**附注标签**则是仓库中的一个独立对象。建议使用附注标签。

## git tag 常用指令：
* git tag
	* 显示当前分支所有的标签（标签列表）

* git tag -l 'v0.1.*'
	* 模糊查询列表中的标签

* git tag v0.1.2-light
	* 创建轻量标签

* git tag -a v0.1.2 -m “0.1.2版本”
	* 创建附注标签

* git show v0.1.2
	* 查看标签

* git checkout [tagname]
	* 切换到指定标签

* git tag -d v0.1.2
	* 删除指定标签

* git tag -a v0.1.1 9fbc3d0
	* 给指定的 commit 打标签， 这里“9fbc3d0”为commitId

* git push origin v0.1.2
	* 将v0.1.2标签提交到远程git服务器

* git push origin –-tags
	* 将本地所有标签一次性提交到git服务器


## 相关指令：
* [git_branch.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_branch.md)   分支相关操作指令： 欢迎分支指令新同学！
