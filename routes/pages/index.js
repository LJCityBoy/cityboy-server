const methods = require('../methods')
module.exports = {
    'rec' : {method:methods.get},  //文章的推荐
    'newest':{method:methods.get}, //最新文章
    'clas':{method:methods.get}, //分类文章
    'all': {method:methods.get } //全部文章
}