module.exports = () => async (ctx, next) => {
  const {
    app, socket, logger, helper,
  } = ctx;
  const { id } = socket;
  const nsp = app.io.of('/');
  const { query } = socket.handshake;

  // 用户信息
  const { room, userId } = query;
  const rooms = [room];

  logger.debug('#user_info', id, room, userId);

  // 踢出用户
  const tick = (tid, msg) => {
    logger.debug('#tick', tid, msg);

    // 踢出用户前发送消息
    socket.emit(tid, helper.parseMsg('deny', msg));

    // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
    nsp.adapter.remoteDisconnect(tid, true, (err) => {
      logger.error(err);
    });
  };

  // 检查房间是否存在，不存在则踢出用户
  const hasRoom = true;

  logger.debug('#has_exist', hasRoom);

  if (!hasRoom) {
    tick(id, {
      type: 'deleted',
      message: 'deleted, room has been deleted.',
    });
    return;
  }

  // https://github.com/eggjs/egg/issues/3810
  nsp.once('connection', () => {
    // 用户加入
    console.log('#join ', room);
    socket.join(room);
    console.log('joined room: ', room, id);
    // 在线列表
    // nsp.in(room).clients((err, clients) => {
    nsp.adapter.clients(rooms, (err, clients) => {
      console.log('room clients: ', clients);
  
      // 更新在线用户列表
      nsp.to(room).emit('online', {
        clients,
        action: 'join',
        target: 'participator',
        message: `User(${id}) joined.`,
      });
    });
  });


  await next();

  // 用户离开
  logger.debug('#leave', room);

  // 在线列表
  nsp.in(room).clients((err, clients) => {
  // nsp.adapter.clients(rooms, (err, clients) => {
    logger.debug('#online_leave', clients);

    // 获取 client 信息
    // const clientsDetail = {};
    // clients.forEach(client => {
    //   const _client = app.io.sockets.sockets[client];
    //   const _query = _client.handshake.query;
    //   clientsDetail[client] = _query;
    // });

    // 更新在线用户列表
    nsp.to(room).emit('online', {
      clients,
      action: 'leave',
      target: 'participator',
      message: `User(${id}) leaved.`,
    });
  });
};
