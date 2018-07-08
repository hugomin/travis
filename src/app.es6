import Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import config from './config/config';

import babel_po from "babel-polyfill";
import babel_co from 'babel-register';
const app = new Koa();
initController.init(app, router);

app.context.render = co.wrap(render({
    root:config.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));
app.use(serve(config.get('staticDir')));
app.listen(config.get('port'), () => {
    console.log('Server is Running')
});

// 1.先起服务  babel  编译
// 2.建立路由  将路由简历单独文件夹 一个用来专门处理路由 另一个用来处理渲染的页面  koa-simple-router
// 3.静态页面  koa-swig  同时还要安装co模块  layout.html  index.html
// 4.设计静态资源文件库   koa-static   path
// 5 config  端口号  静态资源  模板资源
// 6  babel 强化  babel-register  babel-polyfill
// 7  迁移项目  html  css  js(全局add)

// 8 php  面向对象接口  header   
// 9  php  构造函数 连接数据库 更新数据库  关闭数据库
// 10  request 请求   model  建立与后台接口有联系的逻辑

// 11 点击事件进行稀释   
// 12  测试  supertest mocha 性能测试  端到端测试

// 遇见问题  1.cache  模板 title  {{}}
// 2.exports is  defined
// 3.php  更新语句
// 4.php  输出为空
// 5.php  header  encode
// 6 import rp  报错  import  文件不要加后缀名


export default app;