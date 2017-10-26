const mongoose = require('mongoose');
const searchable = require('mongoose-searchable')
const Schema   = mongoose.Schema;

const postSchema = new Schema({
  creator : { type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  content: String,
  category: String,
  tags: [String],
  comments: [ { type: Schema.Types.ObjectId,  ref: 'Comment' } ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

postSchema.plugin(searchable)

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
