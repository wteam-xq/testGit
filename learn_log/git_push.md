# git push 指令

## 参考资料：
* [git push官方API](https://git-scm.com/docs/git-push)
* [git push 日常指令-Git教程](http://www.yiibai.com/git/git_push.html)

## 实践总结：
* git push <远程主机名> <本地分支名>:<远程分支名>
* 如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。
* `git push origin`
* 上面命令表示，将当前分支推送到origin主机的对应分支。

## git push 常用指令：
* git push
	* 推送代码至与当前分支关联的远程分支
* git push -f
	* 将当前分支的commit强制推送到远程分支（不处理 更新、合并等， 非常危险的指令，谨慎操作）

* git push origin remoteBranchName
	* 推送代码至指定的远程分支

* git push origin newBranch:newBranch
	* git push <远程主机名> <本地分支名>:<远程分支名>
	* 推送分支到远程并在远程创建一同名分支， ’newBranch’为本地分支名，远程不存在同名分支

* git push origin --delete [branch-name]
  * 删除远程分支


## 相关指令：
* [git_status.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_status.md)  查看当前代码状态指令： 使用我这个指令，只是为了确认提交远程是否成功而已。。。
