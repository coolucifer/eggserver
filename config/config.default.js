exports.keys = '334433';

exports.middleware = ['nuxt'];

// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.files = {
  filePath: './sources',
};

exports.mongoose = {
  client: {
    url: 'mongodb://manager:main_db_manager@89.208.248.23:27017/main',
    options: {},
  },
};

// 安全配置
exports.security = {
  csrf: {
    enable: false,
  },
};

// socket.io
exports.io = {
  init: {},
  namespace: {
    '/': {
      connectionMiddleware: ['connection', 'room'],
      packetMiddleware: [],
    },
    '/example': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
  },
};

// egg-multipart文件上传
exports.multipart = {
  fileSize: '20mb',
  // 添加白名单
  fileExtensions: [
    '.pdf',
  ],
};
