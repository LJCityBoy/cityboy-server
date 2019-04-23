const rec = (val) => {

    console.log("测试测试rec");

    return '测试返回rec'
}

const newest = (val) => {

    console.log("测试测试newest");

    return '测试返回newest'
}

const clas = (val) => {

    console.log("测试测试clas");

    return '测试返回clas'
}

const all = (val) => {

    console.log("测试测试all");

    return '测试返回all'
}



/**
 *  'rec' : {method:methods.get},  //文章的推荐
    'newest':{method:methods.get}, //最新文章
    'clas':{method:methods.get}, //分类文章
    'all': {method:methods.get } //全部文章
 */

module.exports = {
    rec,
    newest,
    clas,
    all,
}