const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  user : { type: Schema.Types.ObjectId, ref: 'User'},
  post : { type: Schema.Types.ObjectId, ref: 'Post'},
  postTitle: { type: String, default:Schema.Types.title, ref:'Post', required: true},
  content: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
