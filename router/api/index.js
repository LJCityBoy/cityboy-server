const Router = require('koa-router');



//测试
let router = new Router();

router.get('/test',async ctx =>{
    let dats = await ctx.db.query("SELECT * FROM article_table");
    ctx.body = dats[0].article;
    //读取用户数据
    // ctx.body = await ctx.db.query("SELECT * FROM article_table");
});
//上传文章的接口
router.post('/upload_article',async (ctx) =>{

    // console.log(ctx.request.fields.coverIcon);
    // [ 'app',
    //     'req',
    //     'res',
    //     'ctx',
    //     'response',
    //     'originalUrl',
    //     'json',
    //     '_parse_json',
    //     'urlencoded',
    //     '_parse_urlencoded',
    //     'text',
    //     'buffer',
    //     'multipart',
    //     'fields',
    //     'files' ]
    const {coverIcon,articleTitle,articleData,postTime,author} = ctx.request.fields;
    //把数据获取到并存到数据库中
    await ctx.db.query("INSERT INTO article_table (article, title, coverIcon, postTime,author) VALUE (?,?,?,?,?)",
        [articleData,articleTitle,coverIcon[0].path,postTime,author]);
    return ctx.body = {
       message:'上传成功！',
       state: 1
   };

});


module.exports = router.routes();
