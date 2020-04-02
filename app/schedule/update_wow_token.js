// 定时任务更新怀旧服时光徽章价格
// https://eggjs.org/zh-cn/basics/schedule.html
const { Subscription } = require('egg');

class UpdateWowToken extends Subscription {
  super() {
    this.accessToken = '';
  }

  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // 每20分钟准点执行一次
      cron: '0 */20 * * * *',
      type: 'all', // 指定所有的 worker 都需要执行,
      immediate: true, // 应用启动后立即执行一次
    };
  }

  async getAccessToken() {
    // 'curl -u 900143fcccbd4eceab3c91fc70a71807:mfAPIY5e3n7UhFUnvKCoi1h3tjmbHHd9 -d grant_type=client_credentials https://www.battlenet.com.cn/oauth/token'
    const { data: tokenRes } = await this.ctx.curl('https://www.battlenet.com.cn/oauth/token', {
      method: 'POST',
      // 需要发送的请求数据，根据 method 自动选择正确的数据处理方式。
      data: { grant_type: 'client_credentials' },
      // 设置响应数据格式，默认不对响应数据做任何处理，直接返回原始的 buffer 格式数据。 支持 text 和 json 两种格式。
      dataType: 'json',
      // 简单登录授权（Basic Authentication）参数，将以明文方式将登录信息以 Authorization 请求头发送出去。
      auth: '900143fcccbd4eceab3c91fc70a71807:mfAPIY5e3n7UhFUnvKCoi1h3tjmbHHd9',
    });
    this.accessToken = tokenRes.access_token;
  }

  async getWowTokenData() {
    // 'curl -H "Authorization: Bearer CNPdGgGnESWkw09Li8CBZuVPl0IYp7TST7" https://gateway.battlenet.com.cn/data/wow/token/index?namespace=dynamic-classic-cn&local=zh-CN'
    const res = await this.ctx.curl('https://gateway.battlenet.com.cn/data/wow/token/index?namespace=dynamic-classic-cn&local=zh-CN', {
      dataType: 'json',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    console.log(new Date(), 'getTokenData');
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        resolve({ data: res.data });
      } else {
        const err = { status: res.status, data: res.data };
        reject(err);
      }
    });
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    if (!this.accessToken) {
      await this.getAccessToken();
    }
    let res = null;
    try {
      res = await this.getWowTokenData();
    } catch (e) {
      if (e.status === 401) {
        // 未授权(accessToken过期)
        await this.getAccessToken();
        res = await this.getWowTokenData();
      }
    }
    const { last_updated_timestamp: updateTime, price } = res.data;
    this.ctx.service.wowToken.create({
      updateTime,
      price,
    });
    const response = await this.ctx.service.wowToken.query();
    console.log(new Date(), 'res: ', response);
  }
}

module.exports = UpdateWowToken;
