// 在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，对认证失败的客户端做出相应的处理
module.exports = () => async (ctx, next) => {
  console.log('a user connected');
  ctx.socket.on('message', (socket) => {
    console.log('message got: ', socket);
    setTimeout(() => {
      ctx.socket.emit('reply', socket);
    }, 1000);
  });
  ctx.socket.emit('res', 'connected!');
  await next();
  // execute when disconnect
  console.log('disconnected!');
};
