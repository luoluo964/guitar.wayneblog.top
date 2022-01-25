const express= require("express");
//获取路由的实例
const router=express.Router();

const htmlCol=require('../tools/htmlCo');

router.get('/',(req,res)=>{
    //定义首页内容
    var htmlContent=htmlCol.getHtmlHead();
    htmlContent+="<div style='text-align:center;margin-top:5%'>"+
        "<h1>Wayne吉他谱收集仓  <small><mark>我的乐谱小仓库</mark></small></h1> "+
        "<button type='button' class='btn btn-success btn-lg' style='margin-top:5%' onclick=turn()>跳转</button>"+
        "<script>function turn(){ window.location.href='singer' }</script>";
    htmlContent+="</div>";
    htmlContent+="</body>";
    res.send(htmlContent);
})

//对外打包
module.exports=router;

