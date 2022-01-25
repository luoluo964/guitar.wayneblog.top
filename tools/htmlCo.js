/*
    返回通用html内容的工具类
*/

//返回一般通用的html页面头信息
function getHtmlHead(){
    return "<title>吉他谱收集仓</title>"+
    "<link rel='stylesheet' href='css/bootstrap.min.css'/>"+
    "<script src='js/jquery.min.js'></scrpt>"+
    "<script src='js/bootstrap.min.js'></script>"+
    "<body style='background-color:#f2f2f0;color:#0a0a0a'>";
}

//返回回退上个URL的信息
function getBackHtml(){
    return "<button onclick=window.history.back() type='button' class='btn btn-info'"+
    " style='margin-top:20%;margin-bottom:20%;margin-left:70%'>返回</button>";
}


//对外打包
module.exports={getHtmlHead,getBackHtml};



