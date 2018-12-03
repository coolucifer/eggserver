// egg.js 入口文件 可选 进行启动过程自定义
module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    // 调整mongodb时区
    // 通过app.toLocalTime()调用
    // https://blog.csdn.net/u010668495/article/details/50817136
    app.TZ = 'Asia/Shanghai';
    const TimeZone = new Map([
      ['Europe/London', 0],
      ['Asia/Shanghai', +8],
      ['America/New_York', -5]
    ]);
    app.toLocalTime = (date) => {
      if (app.TZ === undefined) return new Date(date);
      let d = date ? new Date(date) : new Date();
      for (let item of TimeZone.entries()) {
        if (item[0] === app.TZ) {
          d.setHours(d.getHours() + item[1]);
        }
      }
      return new Date(d);
    };
    app.toDbTime = (date) => {
      if (app.TZ === undefined) return new Date(date);
      let d = date ? new Date(date) : new Date();
      for (let item of TimeZone.entries()) {
        if (item[0] === app.TZ) {
          d.setHours(d.getHours() - item[1]);
        }
      }
      return new Date(d);
    };
  });
}