const router = require("express").Router()
const Notification = require("../models/Notification")

router.get("/", async (req,res)=>{
  const n = await Notification.find().sort({createdAt:-1})
  res.json(n)
})

module.exports = router
