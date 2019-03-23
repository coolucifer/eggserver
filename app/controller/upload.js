const { Controller } = require('egg');
const fs = require('fs');
const path = require('path');
const { write: awaitWriteStream } = require('await-stream-ready');
const sendToWormhole = require('stream-wormhole');

// https://www.jianshu.com/p/56bfdae6f5c6
class UploadController extends Controller {
  async index() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = new Date().getTime()
                    + stream.filename.replace(/.[^.]+$/, '')
                    + path.extname(stream.filename).toLocaleLowerCase();
    const target = path.join('/public/uploads', filename);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 出现错误关闭管道
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = {
      success: true,
      resultCode: '100',
      url: `/public/uploads/${filename}`,
    };
  }
}

module.exports = UploadController;
