const { Nuxt, Builder } = require('nuxt');
const config = require('../../nuxt.config');
module.exports = (options, app) => {
  const nuxtRender = new Nuxt(config);
  let isProduction = process.env.NODE_ENV === 'production';
  // 在开发模式下启用编译构建和热加载
  if (!isProduction) {
    new Builder(nuxtRender).build();
  }
  return async function (ctx, next) {
    let flag = false;
    let routerArr = [];
    if (!flag) {
      routerArr = app.router.stack.map(el => el.path);
      flag = true;
    }
    if (routerArr.some(el => el === ctx.path)) {
      return await next();
    }
    ctx.status = 200;
    ctx.req.session = ctx.session;
    const { res, req } = ctx;
    return new Promise((resolve, reject) => {
      ctx.res.on("close", resolve);
      ctx.res.on("finish", resolve);
      nuxtRender.render(req, res, promise => {
        promise.then(resolve).catch(reject);
      });
    });
  };
};