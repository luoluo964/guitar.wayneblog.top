var express=require('express');
//node的内置模块，专门用来处理物理路径
const path=require('path')

//把express做一个实例化
const app=express()

let indexRouter=require('./router/indexRouter.js')
let singerRouter=require('./router/singerRouter.js')
let songsRouter=require('./router/songsRouter.js')
let contentRouter=require('./router/contentRouter.js')

//定义内置中间件
app.use(express.static(path.join(__dirname,'./public')));

//路由分发
app.use('/',indexRouter);
app.use('/singer',singerRouter);
app.use('/songs',songsRouter);
app.use('/content',contentRouter)

//开启服务端
app.listen(3000,()=>{
    console.log('server start');
})















































