const { Controller } = require('egg');

class DefaultController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    await ctx.socket.emit('res', `Hi! I've got your messsage: ${message}`);
  }
}

module.exports = DefaultController;
