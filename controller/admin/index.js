const upload_article = (val) => {

    console.log("测试测试upload_article",val);

    return '测试返回upload_article'
}

const edit = (val) => {

    console.log("测试测试edit");

    return '测试返回edit'
}

const del = (val) => {

    console.log("测试测试del");

    return '测试返回del'
}

const login = (val) => {

    console.log("测试测试login");

    return '测试返回login'
}




/**
 *  'upload_article' : {method:methods.post},  //发表文章
    'edit':{method:methods.post}, //编辑文章
    'del':{method:methods.post}, //删除文章
    'login': {method:methods.post },
 */

module.exports = {
    upload_article,
    edit,
    del,
    login,
    
}