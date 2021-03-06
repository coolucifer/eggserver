const { Controller } = require('egg');

class DefaultController extends Controller {
  // async message() {
  //   const { ctx } = this;
  //   // ctx.args: [{...}, callback]
  //   const message = ctx.args[0];
  //   const callback = ctx.args[1];
  //   await ctx.socket.emit('reply', Object.assign({}, message, {
  //     from: 'server',
  //     to: 'me',
  //     timestamp: +new Date(),
  //   }),
  //   callback());
  // }

  async chat() {
    const { ctx, app } = this;
    const nps = app.io.of('/');
    const message = ctx.args[0] || {};
    console.log('chat msg: ', message);
    const { socket } = ctx;
    const client = socket.id;

    try {
      const { target, payload } = message;
      if (!target) return;
      // helper.js在app/extend目录下
      const msg = ctx.helper.parseMsg('chat', payload, { client, target });
      nps.to('default').emit('chat', msg);
    } catch (e) {
      app.logger.error(e);
    }
  }

  async message() {
    const { ctx, app } = this;
    const nps = app.io.of('/');
    const message = ctx.args[0] || {};

    try {
      nps.to('default').emit('message', message);
    } catch (e) {
      app.logger.error(e);
    }
  }

  // 获取房间在线人员名单
  async getOnlineList() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const { query } = ctx.socket.handshake;
    const callback = ctx.args[0];
    const { room } = query;

    const { connected } = nsp.in(room);
    const res = [...Object.keys(connected)].map(key => {
      const connection = connected[key];
      const { userId, userName, avatar = '' } = connection.handshake.query;
      return {
        userInfo: {
          userId,
          userName,
          avatar,
        },
        id: key,
      };
    });
    callback(res);
  }
}

module.exports = DefaultController;
