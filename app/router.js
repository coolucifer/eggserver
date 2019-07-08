module.exports = (app) => {
  const { router, controller, io } = app;
  router.get('/api/filelist', controller.fs.list);
  router.get('/api/file', controller.fs.content);
  // 获取文章列表
  router.get('/api/post/list', controller.post.list);
  // 创建文章
  router.post('/api/post', controller.post.create);
  // 查询文章
  router.get('/api/post', controller.post.query);
  // 更新文章
  router.put('/api/post', controller.post.update);
  // 上传文件
  router.post('/api/upload', controller.upload.index);
  // router.get('/news', controller.news.list);
  // socket.io
  // route(服务器on收到的方法, 对应的controller)
  io.of('/').route('message', io.controller.default.message);
  // 聊天
  io.of('/').route('chat', io.controller.default.chat);
};
