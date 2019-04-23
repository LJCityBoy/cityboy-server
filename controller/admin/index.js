const fabu = (val) => {

    console.log("测试测试fabu");

    return '测试返回fabu'
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
 *  'fabu' : {method:methods.post},  //发表文章
    'edit':{method:methods.post}, //编辑文章
    'del':{method:methods.post}, //删除文章
    'login': {method:methods.post },
 */

module.exports = {
    fabu,
    edit,
    del,
    login
}