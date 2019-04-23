const { success, failed } = require('../../helper/pojo')
module.exports = (config,file) => {
    const controller = require(`../../controller/${file}`)
    console.log('获取到的方法',config)
    return config.reduce((copy,name) => {
        copy[name] = async ctx => {
            let res;
            try{
                const val = ctx.request.body
                await controller[name](val).then(result => {
                    res = success(result) 
                })
            }catch(err){
                res = failed(err)
            }
            ctx.body = res
        }
        return copy
    },{})
}