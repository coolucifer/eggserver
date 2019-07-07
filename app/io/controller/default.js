const { Controller } = require('egg');

class DefaultController extends Controller {
  async message() {
    const { ctx, app } = this;
    // ctx.args: [{...}, callback]
    const message = ctx.args[0];
    const callback = ctx.args[1];
    await ctx.socket.emit('reply', Object.assign({}, message, {
      from: 'server',
      to: 'me',
      timestamp: +new Date(),
    }),
    callback());
  }
}

module.exports = DefaultController;
