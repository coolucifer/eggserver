// 安全配置
exports.security = {
  // 生产环境开启csrf, 只有同域名可以访问
  csrf: {
    enable: false,
    ignoreJSON: true,
  },
  domainWhiteList: ['*']
};

exports.cors = {
  origin: ['http://localhost:7001'],
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
