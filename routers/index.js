const Router = require('koa-router') 
const routes = require('../routes')
let router = new Router()

routes.forEach(item => {
    const service = require(`../services/${item.service}`)
    // console.log('注册的路由',item.path,"方法：",item.method);
    // console.log('调用方法：',item.action)
    router[item.method](item.path,service[item.action]);  //语法相当于 router.get('/path,function(){ xxxx })

})

router.get('/api/test',function(){
    console.log('9999999test');
})
module.exports = router