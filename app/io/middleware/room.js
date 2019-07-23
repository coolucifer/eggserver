module.exports = () => async (ctx, next) => {
  const { app, socket } = ctx;
  const { id } = socket;
  const { query } = socket.handshake;
  const { userName, userId, avatar = '', room } = query;
  // const room = 'default';
  const nsp = app.io.of('/');
  nsp.once('connection', () => {
    socket.join(room);
    nsp.in(room).clients((err, clients) => {
      nsp.to(room).emit('join', {
        userInfo: { id, userId, userName, avatar },
        clients
      });
    });
  });
  await next();

  nsp.in(room).clients((err, clients) => {
    nsp.to(room).emit('leave', { userId, clients });
  });

  console.log('disconnection!');
};
