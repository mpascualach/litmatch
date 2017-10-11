const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = new Schema({
  creator : { type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  content: String,
  comments: [ { type: Schema.Types.ObjectId,  ref: 'Comment' } ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
