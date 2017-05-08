# git clone 指令

## 参考资料：
* [git clone官方API](https://git-scm.com/docs/git-clone)

## 实践总结：
* git clone 加参数可下载指定分支代码、指定目录等；
* git clone 需要注意的是使用HTTP、HTTPS、SSH、GIT、本地文件协议等多种协议下载的区别：
```
$ git clone http[s]://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
$ git clone git://example.com/path/to/repo.git/
$ git clone /opt/git/project.git
$ git clone file:///opt/git/project.git
$ git clone ftp[s]://example.com/path/to/repo.git/
$ git clone rsync://example.com/path/to/repo.git/
```

* 常用的有HTTP 和 SSH协议，建议SSH协议，因为使用 HTTP方式，每次提交代码都得输入用户账号密码，会相当麻烦；
* [SSH 协议配置教程](https://git-scm.com/book/zh/ch4-3.html)

## git clone 常用指令：
* git clone git@github.com:wteam-xq/testGit.git
	* 如果电脑没配置SSH， 则需输入git hub账号密码；
	* 配置SSH后以后 使用`git push`指令不用输入账号密码；

* git clone https://github.com/wteam-xq/testGit.git
	* 此方式拷贝项目不需密码；
	* 但以后使用`git pull` 、`git push`指令都得输入账号密码；

## 相关指令：
* [git SSH配置](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_SSH.md) 配置git SSH： 别嫌麻烦， 配置了我接下来的工作会更轻松！
