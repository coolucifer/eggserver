const { Controller } = require('egg');

class WowTokenController extends Controller {
  async list() {
    const { ctx } = this;
    const msg = await ctx.service.wowToken.query()
      .then(res => {
        const list = res.map(i => {
          // 解决无法编辑返回数据的问题
          const item = i.toObject();
          delete item._id;
          return item;
        });
        return { success: true, resultCode: '100', list };
      })
      .catch(err => ({ success: false, err }));
    ctx.body = msg;
  }
}

module.exports = WowTokenController;
