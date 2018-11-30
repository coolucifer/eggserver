exports.keys = '334433';
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
    // url: 'mongodb://coolucifer:Inuyasha0425@89.208.248.45:27017/admin',
    url: 'mongodb://manager:main_db_manager@89.208.248.45:27017/main',
    options: {}
  }
};

// 安全配置
exports.security = {
  csrf: {
    enable: false
  },
};
