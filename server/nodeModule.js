/*************进程管理系统**********/

// 1#查看当前操作系统
// var os = require('os');
// var result = os.platform();
// console.log(result);

// 2#查看当前程序的当前目录
// process.cwd();

// 3#改变应用程序目录
// process.chdir('./test');

// 4#在程序内杀死进程，code位返回码
// process.exit(code);
// process.exit(0);

// 5#node监听事件进程
//参数code表示退出码
// process.on("exit", function(code) {
//     //进行一些清理工作
//     console.log("I am tired...")
// });
// var tick = Date.now();
// console.log(tick);



/***********文件I/O管理系统****************** */

// 1#向指定文件写入内容
// var fs = require('fs');
// fs.writeFile('input1.txt', 'node test successfully !!!', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('文件写入内容成功');
//     }
// })

// 2#向指定文件追加内容
// var fs = require('fs');
// fs.appendFile('input1.txt', '这是追加内容', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('内容追加成功');
//     }
// })

// 3#判断文件是否存在
// var fs = require('fs');
// fs.exists('./test/1.txt', function(exists) {
//     if (exists) {
//         console.log(exists); // true
//         console.log('存在');
//     }
// })

// 4#修改文件名称
// var fs = require('fs');
// fs.rename('./input2.txt', './input02.txt', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('重命名成功');
//     }
// })

// 5#移动文件rename
// var fs = require('fs');
// fs.rename('./3.txt', './test/3.txt', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('文件移动成功');
//     }
// })

// 6#读取文件内容
// var fs = require('fs');
// fs.readFile('./input1.txt', function(err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data.toString());
//         console.log('文件内容读取成功');
//     }
// })

// 7#文件删除
// var fs = require('fs');
// fs.unlink('./test/4.txt', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('文件删除成功');
//     }
// })

// 8#创建目录
// var fs = require('fs');
// fs.mkdir('./newDir', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('创建文件夹成功');
//     }
// })

// 9#删除目录
// var fs = require('fs');
// fs.rmdir('./newDir', function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('文件夹删除成功');
//     }
// })

// 10#读取目录下的文件名
// var fs = require('fs');
// fs.readdir('./test', function(err, files) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(files);
//         console.log('文件夹读取成功');
//     }
// })




/***********url模块处理************ */
// 1#parse解析URL
// var url = require('url');
// var urls = 'http://www.baidu.com:8090/index.html?id=1000&name=ws';
// console.log(url.parse(urls));

// 打印结果
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8090',
  port: '8090',
  hostname: 'www.baidu.com',
  hash: null,
  search: '?id=1000&name=ws',
  query: 'id=1000&name=ws',
  pathname: '/index.html',
  path: '/index.html?id=1000&name=ws',
  href: 'http://www.baidu.com:8090/index.html?id=1000&name=ws' }
  */

//   2#formatzz组装URL地址
// var url = require('url');
// var urls = url.format({
//     protocol: 'http:',
//     hostname: 'www.baidu.com',
//     port: '80',
//     pathname: '/news',
//     query: { page: 1 }
// })
// console.log(urls); // http://www.baidu.com:80/news?page=1

// 3#resolve:resolve函数的参数是两个路径，
// 第一个路径是开始的路径或者说当前路径，
// 第二个则是想要去往的路径，返回值是一个组装好的url
// var url = require('url');
// var url1 = url.resolve('http://www.baidu.com', 'one');
// var url2 = url.resolve('http://www.baidu.com/one', 'two');
// console.log(url1); // http://www.baidu.com/one
// console.log(url2); // http://www.baicu.com/two



/****************path模块************** */
// 1#normalize将不规范的路径转换为规范的格式划路径
// var path = require('path');
// var data = path.normalize('/path///normalize/hi/.');
// var data2 = path.normalize('/path///normalize/hi/..');
// console.log(data); // /path/normalize/hi
// console.log(data2); // /path/normalize

// 2#join:拼接路径并且转化为标准路径返回
// var path = require('path');
// var data = path.join('///you', '/are', '//beautiful');
// console.log(data); // /you/are/beautiful

// 3#dirname:用来返回路径中的目录名
// var path = require('path');
// var data = path.dirname('./test/txt');
// console.log(data); // test

// 4#basename:返回路径中的最后一部分，并且可以对其进行条件排除
// var path = require('path');
// var data1 = path.basename('www.baidu.com/news/index.html');
// var data2 = path.basename('www.baidu.com/news/index.html', '.html');
// console.log(data1); // index.html
// console.log(data2); // index

// 5#extname:返回路径中的扩展名，如果没有'.'返回空字符串
// var path = require('path');
// var data = path.extname('www.baidu.com/index.html');
// var data1 = path.extname('www/baidu/com');
// console.log(data); //.html
// console.log(data1); // ''

// 6#stringify：将对象类型转会换为字符串，识别&与=来进行过拼接
// var querystring = require('querystring');
// var params = {
//     foo: 'bar',
//     cool: ['xux', 'yys']
// };
// var result = querystring.stringify(params);
// console.log(result); // foo=bar&cool=xux&cool=yys

// var querystring = require('querystring');
// var params = {
//     foo: 'bar',
//     cool: ['xux', 'yys']
// };
// var result = querystring.stringify(params, '*', '$');
// console.log(result); // 'foo$bar*cool$xux*cool$yys'

// 7#parse:反序列化字符串，得到相应的对象
var querystring = require('querystring');
var result1 = querystring.parse('foo@bar$cool@xux@cool@yys', '@', '$');
var result2 = querystring.parse('id=1&name=ws');
console.log(result1); // { foo: '', bar: 'cool', xux: 'cool', yys: '' }
console.log(result2); // {id: '1',name: 'ws'}