// wow怀旧服时光徽章价格记录
const { Service } = require('egg');
const mongoose = require('mongoose');

class WowTokenService extends Service {
  async create(params) {
    const { ctx } = this;
    const res = await ctx.model.WowToken.create(params);
    return res;
  }
  async retrieve() {
    const { ctx } = this;
    const res = await ctx.model.WowToken
    .find({}, {
      updateTime: 1, price: 1, createTime: 1
    }).sort({ _id: -1 })
    ;
    return res;
  }
}

module.exports = WowTokenService;