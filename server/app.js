const express = require('express');
const app = express();

const home = require('./interface/home')

// 解决跨域问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

// 路由配置
app.use(home);




app.listen(8000, function () {
    console.log('服务创建成功');
})