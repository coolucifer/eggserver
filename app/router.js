module.exports = (app) => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/api/filelist', controller.fs.list);
  router.get('/api/file', controller.fs.content);
  // 获取文章列表
  router.get('/api/post/list', controller.post.list);
  // 创建文章
  router.post('/api/post', controller.post.create);
  // 查询文章
  router.get('/api/post', controller.post.query);
  // router.get('/news', controller.news.list);
};
