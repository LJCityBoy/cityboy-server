var Koa = require('koa');
var path = require('path');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session-minimal');
var MysqlStore = require('koa-mysql-session');
var config = require('./config/defaults');
// var router = require('koa-router');
var views = require('koa-views');
var koaStatic = require('koa-static');
var app = new Koa();
var routers = require('./routers/index');

//session存储配置
const sessionMysqlConfig = {
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    host:config.database.HOST
}

//配置session中间件
app.use(session({
    key:"CITYBOY_KEYS",
    store:new MysqlStore(sessionMysqlConfig)
}))

//跨域配置
app.use(async (ctx, next)=>{
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Max-Age', 3600 * 24);
    await next;
})

//配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname,'./public')
))

//表单解析中间件
app.use(bodyParser())

//路由
app.use(routers.routes()).use(routers.allowedMethods())


//监听
app.listen(config.port);
console.log(`APP listening on port ${config.port}`);