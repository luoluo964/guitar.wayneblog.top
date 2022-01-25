/*
    文件控制的工具类
*/

var path=require('path');
var fs=require('fs');


//读取dirtarget下的乐谱目录，将其加入数组
function readMusicScornDir(dirtarget){
    var scornDir=[];
    //同步读目录
    var files=fs.readdirSync(dirtarget);
    files.forEach((item)=>{
        var fullPath=path.join(dirtarget,item);
        //同步得到其状态
        const stat=fs.statSync(fullPath);
        if(stat.isDirectory()){
            scornDir.push(item);
        }
    })
    return scornDir;
}

//读取dirtarget下的乐谱，将文件名放入数组
function readMusicScorn(dirtarget){
    var scorn=[];
    //同步读目录
    var files=fs.readdirSync(dirtarget);
    files.forEach((item)=>{
        var fullPath=path.join(dirtarget,item);
        //同步得到其状态
        const stat=fs.statSync(fullPath);
        if(!stat.isDirectory()){
            scorn.push(item);
        }
    })
    return scorn;
}

//对外打包
module.exports={readMusicScornDir,readMusicScorn};
