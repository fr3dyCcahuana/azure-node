const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    code: 200,
    version: "4.0.0" 
  })
})

module.exports = app
