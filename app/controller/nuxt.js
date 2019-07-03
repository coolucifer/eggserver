// 使用nuxtjs进行ssr渲染
const { Controller } = require('egg');

class NuxtController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log('=== in ===');
  }
}

module.exports = NuxtController;
