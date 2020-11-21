# git config 指令

## 参考资料：
* [git config官方API](https://git-scm.com/docs/git-config)
* [git config命令使用-joey](http://blog.csdn.net/zxncvb/article/details/22153019)

## 实践总结：
* config 后参数： `--local` `--global`  `--system`
	* `—-local`   当前工程对应的配置文件（仓库级config）
	* `—-global`  当前git用户的配置文件（全局级config）
	* `—-system`  git安装目录下的配置文件（系统级config）

## git config 常用指令：
* git config --global user.name “wteamxq”
	* 设置本地git的用户名（不加最后的名字参数，则为查看本地git用户名）

* git config --global user.email 857609086@qq.com
	* 设置本地git的邮箱（不加最后邮箱参数，则为查看本地git邮箱）

* git config --list
	* `--list`(可简写 -l)显示git相关信息（包括本地姓名、本地邮箱、所连接的远程地址等）

* git config —global -e  
	* 直接编辑 配置文件文本；

* git config core.ignorecase false
	* 设置git大小写敏感

* git config --global alias.co checkout
* git config --global alias.br branch
* git config --global alias.ci commit
* git config --global alias.st status
	* 设置Git别名（快捷指令）

* git config --global credential.helper store
	* 如果使用 HTTP 协议方式，每次提交代码都需要密码很麻烦， 可以配置免密：
	* 1）新建文件并保存密码
	```bash
	$ touch ~/.git-credentials
	$ vim ~/.git-credentials
	```
	* 2）添加内容
	```bash
	https://{username}:{passwd}@github.com
	```
	* 3）添加git配置
	```bash
	$ git config --global credential.helper store
	```
	* [官方：Git 工具 - 凭证存储](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)
	* [官方：Git 工具 - 凭证存储-中文](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8)

## 相关指令：
* [git remote](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_remote.md) 本地仓库与远程仓库连接配置指令： 我两才是git指令权限最高拥有者！
