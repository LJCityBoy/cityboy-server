const { success, failed } = require('../../helper/pojo')
module.exports = (config,file) => {
    // console.log('config',config)
    const controller = require(`../../controller/${file}`)
    return config.reduce((copy,name) => {
        copy[name] = async (ctx) => {
            let res;
            try{
                // console.log("传递过来的参数",ctx.request.body);
                // const val = ctx.request.body.data;
                await controller[name](ctx).then(result => {
                    console.log(result);
                    res = success(result) 
                })
                // console.log("vvvvvv",val);
                // let d = await controller[name](val);
                // res = success(d)
            }catch(err){
                res = failed(err)
            }
            ctx.body = res
        }
        return copy
    },{})
}