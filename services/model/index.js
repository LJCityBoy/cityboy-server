const { success, failed } = require('../../helper/pojo')
module.exports = (config,file) => {
    // console.log('config',config)
    const controller = require(`../../controller/${file}`)
    return config.reduce((copy,name) => {
        copy[name] = async ctx => {
            let res;
            try{
                const val = ctx.request.body
                // await controller[name](val).then(result => {
                //     res = success(result) 
                // })
                let d = await controller[name](val);
                res = success(d)
            }catch(err){
                res = failed(err)
            }
            ctx.body = res
        }
        return copy
    },{})
}