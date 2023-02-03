const mongoose = require('mongoose');
const { ObjectId, Date } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
  dislikes: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
      author: {
        type: ObjectId,
        ref: 'User',
        requred: true,
      },
    },
  ],
  author: {
    type: ObjectId,
    ref: 'User',
    required: true,
  }
},
{ timestamps: true });

module.exports = mongoose.model('Post', postSchema);
