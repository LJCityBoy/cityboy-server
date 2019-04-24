
const methods = require('../methods')
module.exports = {
    'reg' : {method:methods.post},  //注册用户
    'changeMess':{method:methods.post}, //修改信息
    'changePass':{method:methods.post}, //修改密码
}