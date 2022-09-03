const express = require('express');
const { getUser, getUserById, createUser, deleteUser, updateUser } = require('./Controllers')
const {verifyUser, adminOnly} = require('../middleware/AuthUser')

const router = express.Router();

router.get('/user', verifyUser, adminOnly, getUser);
router.get('/user/:id', verifyUser, adminOnly, getUserById);
router.post('/user', createUser);
router.delete('/user/:id', verifyUser, adminOnly, deleteUser);
router.patch('/user/:id', verifyUser, adminOnly, updateUser);

module.exports = router;