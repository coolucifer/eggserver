// wow时光徽章
module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const WowTokenSchema = new Schema({
    updateTime: {
      type: String, unique: true, required: true, index: true,
    },
    price: { type: String },
  }, {
    // 关闭版本号, 否则存入的数据有个"__v"字段
    versionKey: false,
  });
  // 第一个参数是跟 model 对应的集合（ collection ）名字的 单数 形式。 Mongoose 会自动找到名称是 model 名字 复数 形式的 collection
  return mongoose.model('WowToken', WowTokenSchema);
};
