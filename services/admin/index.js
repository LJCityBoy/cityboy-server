// const controller = require('../../controller/admin')
// const { success, failed } = require('../../helper/pojo')
const model = require('../model')
const m = model([
    'fabu',
    'edit',
    'del',
    'login',
],'admin')


module.exports = {
    ...m,
} 


//这里每个方法都是统一写法，所有封装到model中
// const fabu = async ctx => {
//     let res;
//     try{
//         const val = ctx.request.body
//         await controller.fabu(val).then(result => {
//             res = success(result)
//         })
//     }catch(err){
//         res = failed(err)
//     }
//     ctx.body = res
// }