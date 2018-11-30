const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    const { ctx } = this;
    let msg = await ctx.service.post.create();
    ctx.body = msg;
  }
};

module.exports = PostController;