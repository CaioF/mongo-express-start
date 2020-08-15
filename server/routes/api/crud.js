const express = require('express');

const router = express.Router();

// read all
router.get('/', (req, res, next) => {
  res.json({
    message: 'read all'
  });
});

// read one
router.get('/:id', (req, res, next) => {
  res.json({
    message: 'read one'
  });
});

// create one
router.post('/', (req, res, next) => {
  res.json({
    message: 'create one'
  });
});

// update one
router.put('/:id', (req, res, next) => {
  res.json({
    message: 'update one'
  });
});

// delete one
router.put('/:id', (req, res, next) => {
  res.json({
    message: 'delete one'
  });
});

module.exports = router;
