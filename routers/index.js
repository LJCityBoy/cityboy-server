const router = require('koa-router')() //引进并初始化
const routes = require('../routes')
routes.forEach(item => {
    const service = require(`../services/${item.service}`)
    // console.log("回调函数 ",service[item.action]);
    router[item.method](item.path,service[item.action]);  //语法相当于 router.get('/path,function(){ xxxx })

})
module.exports = router