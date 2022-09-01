const express = require('express');
const { Login, logOut, Me } = require('./Controllers')

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);

module.exports = router;