// 封装数据格式
const formatMsg = (action, payload = {}, metaData = {}) => {
  const meta = Object.assign({}, {
    timestamp: +Date.now(),
  },
  metaData);
  return {
    meta,
    data: {
      action,
      payload,
    },
  };
};

module.exports = formatMsg;
