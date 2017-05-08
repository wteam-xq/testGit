# git rebase 指令

## 参考资料
* [git rebase官方API](https://git-scm.com/docs/git-rebase)

## 实践总结：
* git merge 跟 git rebase 经常一起讨论，但它们不是相互替换的关系；；
* git rebase 是git merge的辅助，用了git rebase还得用git merge完成分支合并；
* 使用`git rebase`后，用法上比`git merge`复杂， 例如将`experiment`分支代码合并到`master`:
![新分支开发完成](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_rebase_s1.png)

* `git merge` 是切换到`master`分支然后合并：`git checkout master` + `git merge experiment`:
![git_merge整合分支](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_rebase_s2.png)

* `git rebase` 是切换到`experiment`然后变基到`master`分支,完成后,切换回`master`再将两分支合并： `git checkout experiment` + `git rebase master` + `git checkout master` + `git merge experiment`:
![git_rebase整合分支_1](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_rebase_s3.png)
![git_rebase整合分支_2](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_rebase_s4.png)

* `git rebase xxx`，冲突不多，使用`git rebase --continue`， 冲突太多`git rebase --abort` 取消变基。


## git rebase 常用指令：
* git rebase master
	* 将当前分支 与 **本地** 叫`master`分支的代码合并, 当前分支与`master`处在同一线上，当前分支的改动将在`master`分支的下一节点上；

* git rebase --abort
	* 如果当前分支 跟 待合并的分支有冲突， 可以使用该指令取消`git rebase branchName`指令；（不想取消且你有足够耐心：可使用`git rebase --continue`和`git rebase --skip`手动一步一步完成代码合并，当然没`git merge branchName`来的有效率）

* git rebase master newBranch
	* 将`newBranch`分支代码变基到`master`分支；相当于`git checkout newBranch` + `git rebase master`;

* git rebase -i
	* 编辑本地未`push`的`commit`（本人多用于合并commit）, 注意： 该指令需要 当前分支有 关联的 远程分支；
	* 将要合并的commit前面“pick”改成（vim模式输入“i”进入编辑状态）“s”就能将它合并到前一个`commit`去, 然后保存退出(esc退出编辑状态，然后”:"输入“wq”保存退出)。
	* 退出后进入下一个编辑窗口， 主要修改合并后新的注释， 同理 输入“i”进入编辑状态， 修改完esc退出编辑状态，然后”:"输入“wq”保存退出；

## 相关指令：
* [git_merge.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_merge.md) 合并其他分支代码： 我使用的频率更高一些哦！
