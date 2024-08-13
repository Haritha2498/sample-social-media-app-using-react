const mongoose = require('mongoose');
const {Schema}= require('mongoose');
const {model}=require('mongoose');


const commentSchema = new Schema({
    commenterEmail: {type: String,required: true},

    commentContent: {type: String,required: true}


});

const postSchema = new Schema({
  email: {type: String,required: true},

  title: {type: String,required: true },

  content: {type: String,required: true},

  imageUrl: { type: String },

  comments: {type: [commentSchema ],default: []}, // Array of comments

});

const Post = model('Post', postSchema);

module.exports = Post;
