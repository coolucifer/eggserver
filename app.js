// egg.js 入口文件 可选 进行启动过程自定义
module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    // 调整mongodb时区
    // https://blog.csdn.net/u010668495/article/details/50817136
    app.TZ = 'Asia/Shanghai';
    Date.prototype.TimeZone = new Map([
      ['Europe/London', 0],
      ['Asia/Shanghai', -8],
      ['America/New_York', 5]
    ]);
    Date.prototype.zoneDate = () => {
      if (app.TZ === undefined) return new Date();
      for (let item of this.TimeZone.entries()) {
        if (item[0] === app.TZ) {
          let date = new Date();
          date.setHours(date.getHours()+item[1]);
          return date;
        }
      }
      return new Date();
    }
  });
}