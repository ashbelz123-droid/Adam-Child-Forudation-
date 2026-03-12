const router = require("express").Router()
const Post = require("../models/Post")
const Notification = require("../models/Notification")

router.post("/:id", async (req,res)=>{
  const post = await Post.findById(req.params.id)
  post.likes += 1
  await post.save()

  const notif = new Notification({
    message: "Someone liked your post"
  })

  await notif.save()

  res.json(post)
})

module.exports = router
