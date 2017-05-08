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

* git config --global alias.co checkout
* git config --global alias.br branch
* git config --global alias.ci commit
* git config --global alias.st status
	* 设置Git别名（快捷指令）

## 相关指令：
* [git remote](https://github.com/wteam-xq/testGit/blob/master/learn_log/git_remote.md) 本地仓库与远程仓库连接配置指令： 我两才是git指令权限最高拥有者！
