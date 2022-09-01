const express = require('express');
const { getComment, createComment } = require('./Controllers')

const router = express.Router();

router.get('/comment', getComment);
router.post('/comment', createComment);


module.exports = router;