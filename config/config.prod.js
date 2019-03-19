// 安全配置
exports.security = {
  // 生产环境开启csrf, 只有同域名可以访问
  csrf: {
    enable: true,
    cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
  },
};
