const router = require("express").Router()
const Comment = require("../models/Comment")
const Notification = require("../models/Notification")

router.post("/", async (req,res)=>{
  const comment = new Comment(req.body)
  await comment.save()

  const notif = new Notification({
    message: req.body.name + " commented on a post"
  })

  await notif.save()

  res.json(comment)
})

router.get("/:postId", async (req,res)=>{
  const comments = await Comment.find({postId:req.params.postId})
  res.json(comments)
})

module.exports = router
