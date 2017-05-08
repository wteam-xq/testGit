### git配置公钥（SSH公钥）

## win7系统：
* [官方Git生成SSH公钥教程](http://git-scm.com/book/zh/ch4-3.html)

* 前提： 电脑上已安装git; 

* 任意目录下， 右键“git base”打开 git 命令窗口，然后输入以下指令（生成密钥 [参数说明](http://killer-jok.iteye.com/blog/1853451 )）:

```
ssh-keygen -t rsa -C "zhiqiangxiao@sohu-inc.com"
```

* 按3个回车，密码为空。(不要输密码)

* win7会在 **C:\Users\Administrator\.ssh** 生成两个文件**id_rsa.pub** 和 **id_rsa**两个文件 。
	* **id_rsa**是私钥文件 
	* **id_rsa.pub**是公钥文件

* 然后到**.ssh**下面将**id_rsa.pub**里的内容复制出来,粘贴到github个人中心的账户设置的ssh key中；

![粘贴位置截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_ssh_s1.png)

------------------------------

## Linux系统(CentOS 6.4)：

首先运行指令： 

```
cd ~/.ssh
ls

```

结果如果是： 

```
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```
说明系统中已经存在密钥，`id_dsa` 或 `id_rsa` 命名的文件就是了。 

如果结果是啥都没有， 说明系统完全木有密钥！以下指令安装之： 

```
ssh-keygen
```

弹出提示， 连续三个回车完成配置(默认配置路径、默认空密码)： 

```
Enter file in which to save the key (/root/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

再次运行指令： 

```
cd ~/.ssh
ls

``` 

就能看到生成的两个密钥文件了： 

```
id_rsa  id_rsa.pub
```

最后打开`id_rsa.pub`文件，并将其内容复制出来,粘贴到github个人中心的账户设置的ssh key中；

```
cat ~/.ssh/id_rsa.pub
```

![粘贴位置截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_ssh_s1.png)

------------------------------

## 相关指令：
* [git_push.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_push.md) 提交代码至远程仓库指令： 配置了SSH使用我就不用输入账号密码了！

* [git_clone.md](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_clone.md) 拉取线上代码指令： LS不用输入密码的前提：使用我时用了SSH协议！

![SSH协议截图](https://github.com/wteam-xq/testGit/blob/master/learn_log/log_img/git_ssh_s2.png)



