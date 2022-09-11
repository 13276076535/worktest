// 导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', function (req, res) {
    const url = req.url
    console.log(url);
    let fpath = ''
    if (url === '/api/news') {
        fpath = path.join(__dirname, './list.json')
    }
    // else {
    //     fpath = path.join(__dirname,'/' )
    // }

    fs.readFile(fpath, 'utf8', function (err, str) {
        if (err) return res.end('找不到服务器')
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader('Content-Type', 'text/json;charset=utf-8')
        res.end(str)
    })
})

server.listen('3000', function () {
    console.log('成功开启服务器！！！');
})