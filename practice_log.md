# 自动化部署日志

## 16_08_31 笔记；
### 参考资料:
* [gitHook实现自动化部署](http://www.tuicool.com/articles/3QRB7jU)
* [博客园:git自动化部署总结](http://www.cnblogs.com/kenshinobiy/p/4548691.html)
* [开源方案1：http://walle-web.io/](http://walle-web.io/)

### 小总结：
* git Hook在服务器Git端（GitLab 或 GitHub）添加脚本钩子， 去操作线上代码工程；
* 一般 是让线上代码工程git pull -rebase更新代码；

------------------------------

## 16_09_03 笔记；
### 参考资料:
[GitHub/GitLab使用webhook实现自动化部署](http://www.lovelucy.info/auto-deploy-website-by-webhooks-of-github-and-gitlab.html?utm_source=tuicool&utm_medium=referral)

[用GitLab搭建自己私有的GitHub](https://segmentfault.com/a/1190000000345686)
[用GitLab搭建自己私有的GitHub2](https://segmentfault.com/a/1190000002722631)
### 小总结：
* GitHub GitLab BitBucket 都是git的衍生品， github的私有套餐太贵， 所以一般公司都使用
GitLab 或者 BitBucket, 另外还有一个叫： GitCafe的git管理仓库；

* 另：GitLab可以部署到自己的服务器， 所以实际开发中使用的最为广泛；

* 通过[GitHub/GitLab使用webhook实现自动化部署](http://www.lovelucy.info/auto-deploy-website-by-webhooks-of-github-and-gitlab.html?utm_source=tuicool&utm_medium=referral)已可以完成目标，步骤：
	* 1.购买阿里云ECS服务器；
	* 2.从GitHub选定[测试工程](https://github.com/wteam-xq/testDemo)；
	* 3.阿里云配置环境 nodejs(提供接口，给GitHub的webHook调用) apache(运行线上前端工程) Nginx(代理转发，将两种请求都转发到80端口)、配置git的ssh-key。
	* 4.阿里云ECS服务器中将[测试工程](https://github.com/wteam-xq/testDemo)`git clone`到某一目录， 编写被nodejs调用的shell脚本（deploy.sh），编写 nodejs 响应接口，启动（forever启动）该 nodejs 服务；
	* 5.GitHub配置[测试工程](https://github.com/wteam-xq/testDemo)的webHook，使其接收到`git push`指令通知阿里云ECS的nodejs服务；

------------------------------
## 16_09_04 笔记；

### 参考资料:
* [github-webhook-handler中间件](https://github.com/rvagg/github-webhook-handler) 

* [Nginx 简单的代理转发配置](http://liuyu.blog.51cto.com/183345/166381/) 

* [Linux 简单安装Nginx](http://www.cnblogs.com/kreo/p/4378086.html) 

* [Mac上安装Nginx](http://blog.csdn.net/eagle_naixue/article/details/26063871)

* [gulp-rev-colllector插件介绍](http://blog.csdn.net/hayleyxia/article/details/46969711)


### 小总结：
* 确定了实现方案后，接下来是各个技术细节处理，待学知识点：
	1.gulp-sass  gulp-rev-collector 实现前端 开发部署（实现前端自动清除缓存）；
	2.服务器端 github-webhook-handler用法、Nginx中间件配置；

* 自动化部署安全性提升： 
	* 1.服务器git账号权限设置，让其只有`git pull`权限；
	* 2.服务器操作脚本 账户 权限设置， 让其只有对deploy.sh文件操作的权限；
	* 3.服务器上的nodejs接口只能内网访问（GitLab是内网）；

* 本次实践 Nginx 只需要做代理转发， 所以准备好Linux上简单的Nginx安装资料即可，本地Mac为了方便模拟也安装下Nginx； 

------------------------------
## 16_09_05 笔记；

### 参考资料:
* [postMan 离线包安装](http://chromecj.com/utilities/2015-04/423.html)
* [本人博文](http://www.cnblogs.com/wteam-xq/p/4639401.html)

### 小总结：
* 本地安装 Nginx, 编写nodejs后台接口，准备[postMan](http://chromecj.com/web-development/2014-09/60.html)本地模拟自动化服务端程序；

### 今天完成：
* gitDeploy 文件copy完成（待修改）；
* postMan插件能成功在mac上运行；

------------------------------
## 16_09_07 笔记；

### 参考资料:
[mac 安装nginx](http://blog.csdn.net/eagle_naixue/article/details/26063871) 

[mac 安装nginx2](http://blog.csdn.net/ilovesmj/article/details/51549201) 

[mac 配置环境变量](http://elf8848.iteye.com/blog/1582137)

### 小总结：
* 注意给deploy.sh 配置权限：`chmod 777 deploy.sh`;

### 今天完成：
1.完成nodejs 响应webhook接口；（postman模拟请求） 

2.mac 配置nginx；(配置nginx环境失败， 下次继续)

------------------------------
## 16_09_13 笔记；

### 参考资料:
[mac 入门](http://www.cnblogs.com/TankXiao/p/3247113.html) 

[mac 安装pcre](http://stackoverflow.com/questions/22555561/error-building-fatal-error-pcre-h-no-such-file-or-directory) 

[mac brew安装nginx](http://blog.csdn.net/xiebaochun/article/details/52205875) 

[mac 配置环境变量](http://elf8848.iteye.com/blog/1582137) 

### 小总结：
* `./configure: error: SSL modules require the OpenSSL library.` 
* [OpenSSL](https://www.openssl.org/) osx系统自带了， 路径`/usr/bin/openssl`;
* 但本项目 不需要代理https域名， 所以不需要重新下载openssl了；
* `make[1]: *** [/usr/local/pcre/Makefile] Error 127`
* –with-pcre=DIR set path to PCRE library sources
* 注意：set path to PCRE library sources
* 是让你设置到源码目录，而不是编译安装后的目录，所以路径为下载解压的pcre路径。
* `src/core/ngx_regex.h:15:10: fatal error: 'pcre.h' file not found
#include <pcre.h>`
* 缺少pcre-dev库，无解， 改用其他方式安装nginx；
* brew 赋予权限才能正常安装 nginx；`sudo chown -R 'your name' /usr/local`

```
brew install pcre

brew install nginx

sudo nginx
```
* 如果要进行配置可以打开/usr/local/etc/nginx/nginx.conf文件进行修改，比如配置域名，端口号等等。

### 今天完成：
1.安装nginx；(100%) 

2.不同端口请求通过nginx代理共享父域名；

------------------------------
## 16_09_14 笔记；

### 参考资料:
[nodejs forever用法简介](http://tcrct.iteye.com/blog/2043644) 

[forever github](https://github.com/foreverjs/forever)

### 小总结：
* 指定console.log输出信息：
```
forever start -o out.log app.js  
```

* forever关闭日志功能指令(默认在 ~/.forever/forever.log 生成日志文件)：
```
暂无
```

* 无法关闭，只能指定输出日志的文件名称
```
forever start -a -l out.log app.js  
```

* 清除~/.forever/下所有日志文件
```
forever cleanlogs
```

* 最好指定 forever 日志文件，以及注意nodejs `console.log`使用频率；
* 事故：因为 nodejs 调试代码未删除, forever日志文件达到100G直接将阿里云硬盘撑满！

### 今天完成：
1.本地（mac）测试的nodejs forever模块；

------------------------------
## 16_09_29 笔记；

### 参考资料:
[云服务器, 简称:ECS](https://www.aliyun.com/product/ecs?spm=5176.8142029.388261.25.YmiwVn) 

[Linux安装nodejs](http://www.cnblogs.com/hamy/p/3632574.html) 

[Linux安装apache](http://blog.csdn.net/qq_28702545/article/details/52529329) ,   [CentOS apache配置详解](http://www.cnblogs.com/zgx/archive/2011/09/22/2185261.html)

[Linux安装Nginx](http://jingyan.baidu.com/article/1974b2898f5eadf4b1f774de.html) 

[Linux安装git](http://jingyan.baidu.com/article/e9fb46e16698687521f766ec.html) 

### 小总结：
* 国庆完成，自动化部署的Linux实践，具体步骤：
* 1.购买阿里云ECS服务器；
* 2.从GitHub选定[测试工程](https://github.com/wteam-xq/testDemo)；
* 3.阿里云配置环境 nodejs(提供接口，给GitHub的webHook调用) apache(运行线上前端工程) Nginx(代理转发，将两种请求都转发到80端口)、配置git以及git的ssh-key。
* 4.阿里云ECS服务器中将[测试工程](https://github.com/wteam-xq/testDemo)`git clone`到某一目录， 编写被nodejs调用的shell脚本（deploy.sh），编写 nodejs 响应接口，启动（forever启动）该 nodejs 服务；
* 5.GitHub配置[测试工程](https://github.com/wteam-xq/testDemo)的webHook，使其接收到`git push`指令通知阿里云ECS的nodejs服务；

* PS: 阿里云ECS选择操作系统时，为方便可以选择已经配置好nodejs apache nginx git环境的镜像, 例如[Nodejs集成环境](https://market.aliyun.com/products/55528001/cmjj011141.html?spm=5176.ecsPrepay.image.selectFromMarketplace.Rmp0nK)

------------------------------
## 16_10_05 笔记；

### 参考资料:
[webhooks官方教程](https://developer.github.com/webhooks/) 

[jq ztree插件](http://www.treejs.cn/v3/demo.php#_104)

### 小总结：
Linux 配置相关日志；


## 16_10_26 笔记:

### CentOS小总结：
* 查看操作系统版本：
```
lsb_release -a
```

### 配置 apache
* 查看系统是否安装了apache
```
rpm -qa httpd
```

* 如果能看到以下内容：
```
httpd-2.2.15-26.el6.centos.i686
```
* 说明本系统已经安装了apache
* /etc/httpd　就是apache的目录

* 重启 apache  服务器：
```
service httpd restart
```
* 如果修改了配置文件的DocumentRoot,则需要关闭selinux：
```
setenforce 0
```

* 给所有用户访问/root/mygit 权限(如果DocumentRoot在/root/mygit目录下)
```
chmod -R 755 /root/mygit 
```

* 关闭 CentOS 防火墙(如果出现： `httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1 for ServerName`)
```
service iptables stop
```

--------------------------

## 16_10_27 笔记:

### 安装nodejs小总结：
* 依赖模块安装：
```
yum -y install gcc make gcc-c++ openssl-devel wget
```
* 查看系统为x32 还是 x64
```
[root@linuxzgf ~]#uname -a
```
* 如果有x86_64就是64位的，没有就是32位的
* 后面是X686或X86_64则内核是64位的，i686或i386则内核是32位的 

* 到[nodejs官网](https://nodejs.org/en/download/)复制下载链接；

* 下载源码及解压(/soft/nodejs为新建目录)：
```
cd /opt/soft/nodejs
wget https://nodejs.org/dist/v6.9.1/node-v6.9.1-linux-x86.tar.xz
tar -vxf node-v6.9.1-linux-x86.xz
cd node-v6.9.1-linux-x86
```

* 编译及安装（./configure 要求Python.2.6+）：
```
./configure --prefix=/usr/local/nodejs
make && make install

```
* 查看Python版本(注意是大写V)： 
```
python -V
```


* 或者 使用封装好的 脚本安装：[nvm安装](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04), [tnvm安装](https://github.com/aliyun-node/tnvm/blob/master/README.md)
* tnvm 方式安装
```
cd /root
wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash
source /root/.bashrc
tnvm install node-v6.4.0
tnvm use node-v6.4.0
```

* 验证是否安装配置成功：
```
node -v
```

--------------------------

## 16_11_02 笔记:

### 自动化部署 成熟方案：
* [jenkins](https://jenkins.io/index.html)
* [walle-web](http://walle-web.io/)
* 前公司自动化上线部署方案：
* [docker + git](http://www.tuicool.com/articles/6femE3)




