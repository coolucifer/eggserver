const { Controller } = require('egg');

class PostController extends Controller {
  async list() {
    const { ctx, app } = this;
    const msg = await ctx.service.post.list()
      .then(res => {
        const list = res.map(i => {
          // 解决无法编辑返回数据的问题
          const item = i.toObject();
          item.id = item._id;
          delete item._id;
          item.createTime = app.toLocalTime(item.createTime);
          item.updateTime = app.toLocalTime(item.updateTime);
          return item;
        });
        return { success: true, resultCode: '100', list };
      })
      .catch(err => ({ success: false, err }));
    ctx.body = msg;
  }

  async create() {
    const { ctx } = this;
    const { body: params } = ctx.request;
    const msg = await ctx.service.post.create(params)
      .then(res => ({ success: true, resultCode: '100', id: res._id }))
      .catch(err => ({ success: false, err }));
    ctx.body = msg;
  }

  async update() {
    const { ctx } = this;
    const { body: params } = ctx.request;
    const msg = await ctx.service.post.update(params._id, params)
      .then(res => ({ success: true, resultCode: '100', id: res._id }))
      .catch(err => ({ success: false, err }));
    ctx.body = msg;
  }

  async query() {
    const { ctx, app } = this;
    const { id: params } = ctx.request.query;
    const msg = await ctx.service.post.query(params)
      .then(res => {
        // 根据Id获取的文章是唯一的, 取查询到的数组的第0位
        let post = res[0];
        post = post.toObject();
        post.id = post._id;
        delete post._id;
        post.createTime = app.toLocalTime(post.createTime);
        post.updateTime = app.toLocalTime(post.updateTime);
        return { success: true, resultCode: '100', post };
      })
      .catch(err => ({ success: false, err }));
    ctx.body = msg;
  }
}

module.exports = PostController;
