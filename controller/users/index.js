const reg = (val) => {

    console.log("测试测试reg");

    return '测试返回reg'
}

const changeMess = (val) => {

    console.log("测试测试changeMess");

    return '测试返回changeMess'
}

const changePass = (val) => {

    console.log("测试测试changePass");

    return '测试返回changePass'
}




/**
 *  'reg' : {method:methods.post},  //注册用户
    'changeMess':{method:methods.post}, //修改信息
    'changePass':{method:methods.post}, //修改密码
 */

module.exports = {
    reg,
    changeMess,
    changePass
}