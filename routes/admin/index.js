const methods = require('../methods')
module.exports = {
    'upload_article' : {method: methods.post},  //发表文章
    'edit': {method: methods.post}, //编辑文章
    'del': {method: methods.post}, //删除文章
    'login': {method: methods.post } //登陆
}