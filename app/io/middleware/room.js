const room = Math.random();

module.exports = app => async (ctx, next) => {
  ctx.socket.join(room);
  ctx.app.io.of('/').to(room).emit('online', { msg: 'welcome', id: ctx.socket.id });
  await next();
  console.log('disconnection!');
};
