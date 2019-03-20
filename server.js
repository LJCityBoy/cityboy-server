const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const co = require('co-mysql');
const body = require('koa-better-body');
// const bodyParser = require('koa-bodyparser');

//连接数据库
let config = {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'cityboy',
    // port : '',
    multipleStatements:true //允许多条sql语句通顺进行
}
let conn = mysql.createPool(config);

let server = new Koa();

server.listen(9001);

let obj = body({uploadDir:'upload'});
server.use(obj);
// server.use(bodyParser());

server.context.db = co(conn);

//允许跨域
server.use(async (ctx,next) => {
   ctx.set('Access-Control-Allow-Origin','*');
    await next()
});


//使用路由
let router = new Router();
//api路由
router.use('/api',require('./router/api'));
server.use(router.routes());