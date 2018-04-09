### 计划（持续更新）：

### 开发日志：
* 2015-10-30 测试gulp 全局调用, 没法实现：
[为嘛gulp安装了全局还得局部安装](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)
* 2015-12-24 git 阶段2理解：git的分支、以及回退；
* [对应参考网址](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)
* [对应参考网址2](http://www.cnblogs.com/0616--ataozhijia/p/3644482.html)

* 2015-12-25 [测试git分支管理教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000)

* 上次准备的git PPT还有些小错误， 今天更新下；
* 2016-03-24 准备4.7号的git主题 演讲；
* 主题： git 实践分享
* 1.git 基本概念图解： 工作区、暂存区、本地仓库（当前分支）、远程仓库、安全区（详细见 learn_log/git_stash.md）；

* 2.git 回退操作， 在以上区间中的各种回退；(9月份博文)

* 3.git 分支： 工作中常见的git分支操作；
	* 3.1 git 本地分支与远程分支简历关联（2中方式）；
	* 3.2 git 分支合并， 分支合并实践分享（包括 非常规操作的分支合并，例如上次蔡哥master分支代码覆盖develop分支代码）；
	* 3.3 git 分支删除，删除操作后的残留问题；
	* 3.4 切换分支时，当前代码有修改（工作区有待提交的内容），情况讨论（git stash用法）；

* 2016-08-31 研究 git 自动化上线部署解决方案；

* 2016-11-17 git 场景： 代码已 commit 到本地仓库， 处理掉该 commit , 且让改动 的文件出现在  工作区；
* 2016-12-04 git 场景： 本地新建的分支， 分支代码已经合并到主分支（master），然后误删了， 怎么根据提交commit恢复该分支；
* 2017-06-14  git可以将任意分支代码， 导出生成压缩包（zip或gz压缩）
```
git archive master --prefix='project/' --format=zip > `git describe master`.zip

```
* 2018-04-09 新增git提交规范， 后续git提交注释全英文且有提交类型；

### 维护日志：
* 本项目内容将使用**git book**导出。
