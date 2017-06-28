# git reset 指令

## 参考资料：
* [git reset官方API](https://git-scm.com/docs/git-reset)

## 实践总结：
* git reset 和 git revert 的区别：
> 1. git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。
> 2. 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是直接把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。
> 3. git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。
* 此处应该有图：
* ![git_reset、git_revert区别](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_reset_s1.png)
* ![git_reset、git_revert区别2](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_reset_s2.png)

* git reset 的3种方式：
* 1.git reset -–mixed：此为默认方式，不带任何参数的git reset，即是这种方式;它回退到某个版本，只保留源码，回退commit和index信息;  
* 假设提交节点为A-B-C-D(且A-B-C-D均提交到远程分支了)， 从D回退到A则B、C提交的代码会出现在**工作区**， 另外本地分支也会落后远程分支两个节点（`git pull`指令更新代码会显示本地工作区改动跟远程代码会有冲突, 先执行`git add -A`在执行`git pull`也能将代码与远程分支一致）；
* 图解（HEAD为**本地仓库**、INDEX为**暂存区**、WORKING为**工作区**）：
* ![git_reset_mixed](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_reset_s3.png)

* 2.git reset –-soft：回退到某个版本，只回退了commit的信息，不恢复index信息。如果还要提交，直接commit即可;   
* 假设提交节点为A-B-C-D(且A-B-C-D均提交到远程分支了)， 从D回退到A则B、C提交的代码会出现在**工作区**跟**暂存区**，另外本地分支也会落后远程分支两个节点（`git pull`指令更新代码会将代码与远程分支一致）；
* 图解（HEAD为**本地仓库**、INDEX为**暂存区**、WORKING为**工作区**）：
* ![git_reset_mixed](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_reset_s4.png)

* 3.git reset –-hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容；(最常用)   
* 假设提交节点为A-B-C-D(且A-B-C-D均提交到远程分支了)， 从D回退到A则B、C提交的代码会消失掉，另外本地分支也会落后远程分支两个节点（`git pull`指令更新代码会将代码与远程分支一致）；
* 图解（HEAD为**本地仓库**、INDEX为**暂存区**、WORKING为**工作区**）：
* ![git_reset_mixed](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_reset_s5.png)

## 实践场景：
* 场景：代码已 commit 到本地仓库，需要处理掉该commit, 且让改动 的文件出现在 **工作区** 指令： `git reset --mixed origin/master` ；
* PS: 如想让改动的文件出现在暂存区，指令：`git reset --soft origin/master`；
* PS2: 如想让改动的文件完全消失（慎操作）， 指令：`git reset --hard origin/master`；

* 场景2： 代码本想提交到B分支， 不小心操作， 将代码提交到A分支了，还没提交到A远程分支的情况下怎么迁移代码到B分支？
* `git checkout A` 切换到A分支，如果当前已在A分支忽略此指令；
* `git log` 查看A分支提交记录， 拷贝上次的提交ID（d362816）；
* `git reset --soft d362816` d362816 为 commitId；
* `git stash save "暂存改动代码"`  将代码放在**工作现场**；
* `git checkout B`  切换到B分支；
* `git stash pop` 将改动代码从**工作现场**取出；
* `git add -A` + `git commit -m "提交改动"` 将改动代码提交到B分支；


## git reset 常用指令：
* git reset HEAD a.txt
	* 将**本地仓库**的 a.txt 覆盖**暂存区的**a.txt（注意本地工作区间的a.txt不会变化）；

* git reset HEAD .
	* 将**本地仓库**的所有文件（当前目录以及子目录）覆盖**暂存区的**所有文件（注意本地工作区间的文件不会变化）；

* git reset --hard HEAD^
	* 本地工作区间代码回到上一次版本；

* git reset --hard HEAD^^
	* 本地工作区间代码回到上上次版本；

* git reset --hard HEAD~10
	* 本地区间代码回到前10个的版本；

* git reset --hard d362816
	* 本地区间代码回退到指定版本（d362816 为commit id, 可通过[git log](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_clone.md) 查到）

* git reset --hard origin/master
	* 本地工作区间代码回退到远程版本(master为分支名).


## 相关指令：
* [git checkout](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_checkout.md) 切换分支、切换文件指令： 我也可以回退代码哦。
* [git log](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_log.md) 查看commit日志指令： `git reset`好基友！
