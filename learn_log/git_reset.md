# git reset 指令
* [参考资料](https://git-scm.com/docs/git-reset)

* git reset 和 git revert 的区别：
> 1. git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。 
> 2. 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。 
> 3. git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。

* git reset 的3种方式：
> 1.git reset –mixed：此为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息; 

> 2.git reset –soft：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可; 

> 3.git reset –hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容；(最常用) 


## 关于 git reset 常用的指令： 
* git reset HEAD a.txt
	* 将**本地仓库**的 a.txt 覆盖**暂存区的**a.txt（注意本地工作区间的a.txt不会变化）；
* git reset HEAD .
	* 将**本地仓库**的所有文件（当前目录以及子目录）覆盖**暂存区的**所有文件（注意本地工作区间的文件不会变化）；

* git reset -- hard HEAD^
	* 本地工作区间代码回到上一次版本；
* git reset -- hard HEAD^^
	* 本地工作区间代码回到上上次版本；
* git reset -- hard HEAD~10
	* 本地区间代码回到前10个的版本；

* git reset -- hard d362816
	* 本地区间代码回退到指定版本（d362816 为commit id, 可通过[git log](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_clone.md) 查到）
* git reset -- hard origin/master
	* 本地工作区间代码回退到远程版本(master为分支名)


## 相关指令：
* [git checkout](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_checkout.md) 切换分支、切换文件指令： 我也可以回退代码哦。（前提是有使用过`git add`将改动放入**暂存区**）

* [git log](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_log.md) 查看commit日志指令： `git reset`好基友！
