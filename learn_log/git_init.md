# git init 指令

## 参考资料：
* [git pull官方API](https://git-scm.com/docs/git-init)

## 实践总结：
* `git init` git初始化一般用来创建新的git工程， 如果一个旧的git工程执行该指令原有的git信息也不会被清空！
* 那第二次执行`git init`(重新初始化git)有什么用呢？
* 1.获取新添加的模板（带上参数`--template=<template_directory>`）；
* 2.迁移git工程到另一目录（带上参数`--separate-git-dir`）；


## git init 常用指令：
* git init
	* 新建文件夹时，初始化git工程；


## 相关指令：
* [git remote](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_remote.md)远程仓库连接配置： 创建或覆盖git工程后， 一般需要我配合完成与远程仓库的关联;
