const upload_article = (ctx) => {

    //val 为传递过来的参数
   
    let dataStr = ctx.request.body.data;
    
    console.log("测试测试upload_article",dataStr);
    const {coverIcon,articleTitle,articleData,postTime,author} =  ctx.request.body.data;
    // console.log("-----",dataStr,"-----");
    let _sql = "INSERT INTO article_table (article, title, coverIcon, postTime,author) VALUE (?,?,?,?,?)";
    let values = [articleData,articleTitle,coverIcon[0].path,postTime,author];
     return  new Promise((resolve,reject) => {
        ctx.db.query(sql,values,(err,rows) => {
            if(err){
                reject( err)
            }else{
                resolve(rows)
            }
        })
    })

    //把数据插入到数据库中去

    // return '测试返回upload_article'
}
const myQuery = function(sql,values){
    return new Promise((resolve,reject) => {

    })
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