const express= require("express");
//获取路由的实例
const router=express.Router();
var path=require('path');
const fileCo=require("../tools/fileCo");
const htmlCol=require('../tools/htmlCo');

//处理songs曲目的路由
router.get('/',(req,res)=>{
    var singer=req.query.singer;
    var dirTarget=path.resolve('./public/img/'+singer);
    var scornDir=fileCo.readMusicScornDir(dirTarget); //检索目录
    
    var htmlContent=htmlCol.getHtmlHead();
    
    htmlContent+="<div style='text-align:center;margin-top:5%;margin-left:35%;margin-right:35%' class='list-group'>";
    htmlContent+="<ul class='list-unstyled'>";  //定义返回内容
    scornDir.forEach((item)=>{
        htmlContent+="<li><a href=content?singer="+singer
        +"&song="+item+" class='list-group-item'>"+item+"</a></li>";
    });
    htmlContent+="</ul>"

    htmlContent+="</div>";
    htmlContent+="</body>";

    htmlContent+=htmlCol.getBackHtml();

    res.send(htmlContent);
})

//对外打包
module.exports=router;
