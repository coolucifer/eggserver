module.exports = (app) => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/api/filelist', controller.fs.list);
  router.get('/api/file', controller.fs.content);
  router.get('/api/get', controller.user.list);
  router.post('/api/post', controller.post.create);
  // router.get('/news', controller.news.list);
};
