// 文章
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PostSchema = new Schema({
    title: { type: String },
    createDate: { type: String },
    content: { type: String },
  });

  return mongoose.model('Post', PostSchema);
}