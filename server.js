const Koa = require('koa');

let server = new Koa();
server.listen(8081);
console.log('server start');


server.use(async ctx => {
  console.log('query:', ctx.query);
  
  let {a, b} = ctx.query;

  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body=parseInt(a) + parseInt(b);
})
