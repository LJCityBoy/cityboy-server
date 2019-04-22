const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

// console.log("dd",fs);

//测试
let router = new Router();

router.get('/test',async ctx =>{
    console.log("测试连接");
   ctx.body = 'heheheheh';
});

/**
 * 上传文章的接口
 * articleTitle 文章标题
 * articleData 富文本文章
 * coverIcon 封面图片
 * postTime 提交时间
 * author  作者
 */
router.post('/upload_article',async (ctx) =>{

    // console.log("参数",ctx.request.fields);
    let postData = ctx.request.fields;
     
    const {coverIcon,articleTitle,articleData,postTime,author} =  ctx.request.fields;
    console.log("参数",author);
    // let homePart = path.dirname(__dirname,"..");
    // console.log("llllllll",homePart);

    console.log("参数db",ctx.db);

    //把数据获取到并存到数据库中
    await ctx.db.query("INSERT INTO article_table (article, title, coverIcon, postTime,author) VALUE (?,?,?,?,?)",
        [articleData,articleTitle,coverIcon[0].path,postTime,author]);

     return ctx.body = {
        message:'上传成功！',
        state: 1
    };

});


/**
 * 分页获取文章数据
 * pageLength 每页条数默认10条
 * pageIndex 开始页码 默认第0页  开始页码换算开始条数算法：总长度 求余数 每页条数
 */
router.get('/get_indexArticle_byPage',async (ctx,next)=>{
    let {pageIndex,pageLength} = ctx.request.query;
    if (!pageLength || !pageIndex) return ctx.body = {data:"",message:"参数错误!",state:0};
    // let pageIndex = 4;//第几页
    // let pageLength = 2;//每页条数
    let start = (pageIndex - 1) * pageLength;//因为界面上是从第1也算起的，而计算机是从第0页算起的

    //同时返回总条数 及每页按pageLength长度划分的第pageIndex页的数据
    let sql = "SELECT COUNT(*) FROM article_table; SELECT * FROM article_table LIMIT " + start + "," + pageLength;
    await ctx.db.query(sql).then(res =>{
        if (res.length > 1){
            if (res[1].length > 0) {
                ctx.body = {
                    data:res,
                    message:"获取列表成功！",
                    state : 1
                }
            }else {
                ctx.body = {
                    data:res,
                    message:"获取列表失败！",
                    state : 0
                }
            }
        }else {
            ctx.body = {
                data:res,
                message:"获取列表失败！",
                state : 0
            }
        }
    });
});

/**
 * 首页文章推荐
 * count 获取条数
 */
router.get('/get_index_recommended',async (ctx,next)=>{
    // console.log(Object.keys(ctx));
    // console.log('参数',ctx.req)
    let {count} = ctx.request.query;
    if (!count || (count <= 0)) return ctx.body = {data:"",message:"参数错误!",state:0};
    // let count = 3;//随机获取条数
    // SELECT * FROM article_table  ORDER BY  RAND() LIMIT count 从表中随机获取10条
    let sql = "SELECT * FROM article_table  ORDER BY  RAND() LIMIT " + count;
    await ctx.db.query(sql).then(
        res =>{
            if (res.length>0){
                ctx.body = {
                    data:res,
                    message:"获取成功！",
                    state:'1'
                }
            } else {
                ctx.body = {
                    data:res,
                    message:"获取成功！",
                    state:'1'
                }
            }
        }
    )
});

module.exports = router.routes();
