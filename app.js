const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    mesasge:"v1",
    code: 200,
    version: "1.0.0" 
  })
})

module.exports = app
