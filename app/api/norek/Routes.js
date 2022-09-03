const express = require('express');
const { getNorek, getNorekById, createNorek, deleteNorek, updateNorek } = require('./Controllers')
// const { verifyUser } = require('../middleware/AuthUser')


const router = express.Router();

router.get('/norek', getNorek);
router.get('/norek/:id', getNorekById);
router.post('/norek', createNorek);
router.delete('/norek/:id', deleteNorek);
router.patch('/norek/:id', updateNorek);

module.exports = router;