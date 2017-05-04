# git rebase 指令

## 参考资料
* [git rebase官方API](https://git-scm.com/docs/git-rebase)

## 实践总结：
* rebase，合并的结果好看：清晰、直观，但合并过程中出现冲突处理比较麻烦（rebase过程中，一个commit出现冲突，下一个commit也极有可能出现冲突，一次rebase可能要解决多次冲突）；
* merge，合并结果不好看：一堆线交错，但合并有冲突的话，只要解一次就行了；
* 所以建议先`git rebase xxx`，如有冲突，`git rebase --abort`，再换用`git merge xxx`.

## git rebase 常用指令：
* git rebase branchName
	* 将当前分支 与 **本地** 叫“branchName”分支的代码合并（branchName代码合并到当前分支）；

* git rebase --abort
	* 如果当前分支 跟 待合并的分支有冲突， 可以使用该指令取消`git rebase branchName`指令；（不想取消且你有足够耐心：可使用`git rebase --continue`和`git rebase --skip`手动一步一步完成代码合并，当然没`git merge branchName`来的有效率）

* git rebase master newBranch
	* 将`newBranch`分支代码变基到`master`分支；相当于`git checkout newBranch` + `git rebase master`;
	* PS: `变基`都是在默认分支上操作，用法上比`git merge`复杂， 例如将`newBranch`分支代码合并到`master`；
	* `git merge` 是切换到`master`分支然后合并：`git checkout master` + `git merge newBranch`;
	* `git rebase` 是切换到`newBranch`然后变基到`master`分支,完成后再将两分支合并： `git checkout newBranch` + `git rebase master` + `git checkout master` + `git merge newBranch`;

* git rebase -i
	* 编辑本地未`push`的`commit`（本人多用于合并commit）, 注意： 该指令需要 当前分支有 关联的 远程分支；

## 相关指令：
* [git_merge.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_merge.md) 合并其他分支代码： 我使用的频率更高一些哦！
