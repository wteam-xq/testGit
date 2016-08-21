### git配置公钥（SSH公钥）
* [参考资料](http://git-scm.com/book/zh/ch4-3.html)

* 前提： 电脑上已安装git; 

* 生成密钥 [参数说明](http://killer-jok.iteye.com/blog/1853451 ):
```
ssh-keygen -t rsa -C "zhiqiangxiao@sohu-inc.com"
```

* 按3个回车，密码为空。(不要输密码)

* win7会在 **C:\Users\Administrator\.ssh** 生成两个文件**id_rsa.pub** 和 **id_rsa**两个文件 。
	* **id_rsa**是私钥文件 
	* **id_rsa.pub**是公钥文件

* 然后到**.ssh**下面将**id_rsa.pub**里的内容复制出来,粘贴到github个人中心的账户设置的ssh key中；

![粘贴位置截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_ssh_s1.png)

## 相关指令：
* [git_push.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_push.md) 提交代码至远程仓库指令： 配置了SSH使用我就不用输入账号密码了！

* [git_clone.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_clone.md) 拉取线上代码指令： LS正解！



