const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/minifacebook")

app.use("/auth", require("./routes/auth"))
app.use("/posts", require("./routes/posts"))
app.use("/comments", require("./routes/comments"))
app.use("/likes", require("./routes/likes"))
app.use("/notifications", require("./routes/notifications"))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
