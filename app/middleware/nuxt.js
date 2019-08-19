const { Nuxt } = require('nuxt');
const config = require('../../nuxt.config');

module.exports = () => {
  const nuxtRender = new Nuxt(config);
  return async function nuxt(ctx, next) {
    const { app } = ctx;
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
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxtRender.render(req, res, promise => {
        promise.then(resolve).catch(reject);
      });
    });
  };
};
