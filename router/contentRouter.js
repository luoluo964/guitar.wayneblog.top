const express= require("express");
//获取路由的实例
const router=express.Router();
var path=require('path');
const fileCo=require("../tools/fileCo");
const htmlCol=require('../tools/htmlCo');

//处理content内容的路由
router.get('/',(req,res)=>{
    var singer=req.query.singer;
    var song=req.query.song;
    var dirTarget=path.resolve('./public/img/'+singer+'/'+song);
    var scornDir=fileCo.readMusicScorn(dirTarget); //读取乐谱
    //渲染
    var htmlContent=htmlCol.getHtmlHead();

    htmlContent+="<div style='text-align:center;margin-top:5%'>";
    htmlContent+="<div>";

    htmlContent+="<br/><hr/><br/>"
    htmlContent+="<img style='width:440px;height:180px' src=img/foundation.png class='img-responsive img-thumbnail' alt='Responsive image'>";
    htmlContent+="<br/>"
    htmlContent+="<img style='width:270px;height:180px' src=img/chord.png class='img-responsive img-thumbnail' alt='Responsive image'>";
    htmlContent+="<br/><br/><hr/><br/><br/>"
    scornDir.forEach((item)=>{
         htmlContent+="<img style='width:720px;height:880px' src=img/"+singer
                    +"/"+song
                    +"/"+item+" class='img-responsive img-thumbnail' alt='Responsive image'>";
     });
     htmlContent+="</div>";

     htmlContent+="</div>";
     htmlContent+="</body>";
     
    htmlContent+=htmlCol.getBackHtml();

     res.send(htmlContent);
})

//对外打包
module.exports=router;