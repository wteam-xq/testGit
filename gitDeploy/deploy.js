var http = require('http'),
    url = require('url'),
    querystring = require('querystring'),
    createHandler = require('github-webhook-handler'),
    handler = createHandler({ path: '/incoming', secret: 'myHashSecret' }); 

// 上面的 secret 保持和 GitHub 后台设置的一致
function run_cmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";
 
  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}
 
http.createServer(function (req, res) {
  // 新增原生post接口
  listenOtherReq(req, res);
  // handler(req, res, function (err) {
  //   res.statusCode = 404
  //   res.end('no such location')
  // });
}).listen(7777);
 
handler.on('error', function (err) {
  console.error('Error:', err.message)
})
 
handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  run_cmd('sh', ['./deploy.sh'], function(text){ 
    console.log('sh执行响应文本：' + text); 
  });
});

// 本地模拟： nodejs post 接口监听
function listenOtherReq(req, res){
  var alldata = '',
      _url = req.url,
      _method = req.method.toLowerCase();
  // 获取请求数据
  var urlObj = url.parse(_url);
  // console.log('urlObj: ' + JSON.stringify(urlObj) );
  if (urlObj.pathname === '/incoming' && _method === 'post') {
      req.on('data', function (chunk) {
          // console.log('chunk:' + chunk);
      });
      req.on('end', function () {
          res.end('success');
          // 读取本地.sh文件
          run_cmd('sh', ['./deploy.sh'], function(text){ 
            console.log('sh执行响应文本：' + text);
          });
          // //将接收到的字符串转换位为json对象
          // var dataObj = querystring.parse(urlObj.query);
          // //输出数据
          // console.log(dataObj);  //{ username: '小强', sex: '男', hobby: [ '吃饭', '睡觉', '打豆豆' ] }
          // console.log(dataObj.username); //小强
          // console.log(dataObj.sex); //男
          // console.log(dataObj.hobby); //[ '吃饭', '睡觉', '打豆豆' ]
      });
  } else {
    res.end('fail');
  }
}

