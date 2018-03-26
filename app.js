const express = require('express');

const app = express();


app.listen('3000');

app.get('/test', (req, res, next) => {
  //
  res.status(200).json("test")
})
