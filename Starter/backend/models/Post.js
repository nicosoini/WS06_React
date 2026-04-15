const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is missing'],
      trim: true,
      minlength: 2
    },
      content: {
      type: String,
      required: [true, 'Content is missing'],
      trim: true,
      minlength: 4
    },
      author: {
      type: String,
      required: [true, 'Author is missing'],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);