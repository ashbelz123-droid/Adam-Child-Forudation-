const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const postRoutes = require("./routes/posts")
const commentRoutes = require("./routes/comments")
const likeRoutes = require("./routes/likes")
const notificationRoutes = require("./routes/notifications")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/minifacebook")

app.use("/posts", postRoutes)
app.use("/comments", commentRoutes)
app.use("/likes", likeRoutes)
app.use("/notifications", notificationRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
