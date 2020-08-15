/*
web/index.js mounts all routes inside the web folder
these routes are mounted in ../server.js on the route '/'
*/
const express = require('express');
// const path = require('path');

const router = express.Router();
// const path2static = path.join(__dirname, '../../../app/example/');

router.get('/', (req, res, next) => {
  res.json({
    message: 'Web API is working'
  });
  // res.sendFile(`${path2static}devcycle.png`);
  next();
});

module.exports = router;
