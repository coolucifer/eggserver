module.exports = () => async (ctx, next) => {
  const { app, socket } = ctx;
  const { id } = socket;
  const room = 'default';
  const nsp = app.io.of('/');
  nsp.once('connection', () => {
    socket.join(room);
    nsp.in(room).clients((err, clients) => {
      nsp.to(room).emit('online', { clients });
    });
  });
  await next();

  nsp.to(room).emit('leave', { id });

  console.log('disconnection!');
};
