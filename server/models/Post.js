const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
  author: String,
  text: String,
  image: String,
  video: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Post", PostSchema)
