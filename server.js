const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const co = require('co-mysql');
const body = require('koa-better-body');
const staticd = require('koa-static');
// const bodyParser = require('koa-bodyparser');
// const formidable = require('koa-formidable');


//连接数据库
let config = {
    host : '132.232.40.236',
    user : 'root',
    password : '',
    database : 'cityboy',
    // port : '',
    multipleStatements:true //允许多条sql语句通顺进行
}
let conn = mysql.createPool(config);

let server = new Koa();

server.listen(9001);

let obj = body({uploadDir:'/upload'});
server.use(obj);
//static静态文件
server.use(staticd(__dirname,'/upload'));


server.context.db = co(conn);

//允许跨域
server.use(async (ctx,next) => {
   ctx.set('Access-Control-Allow-Origin','*');
    await next()
});
console.log('listen in 9001');

//使用路由
let router = new Router();
//api路由
router.use('/api',require('./router/api'));
server.use(router.routes());