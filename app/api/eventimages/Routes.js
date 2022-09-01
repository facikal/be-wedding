const express = require('express');
const { getImage, getEventImageById, saveImage, updateImage, deleteImage } = require('./Controllers')
const { verifyUser } = require('../middleware/AuthUser')


const router = express.Router();

router.get('/eventimage', getImage);
router.get('/eventimage/:id', getEventImageById);
router.post('/eventimage', verifyUser, saveImage);
router.delete('/eventimage/:id', verifyUser, deleteImage);
router.patch('/eventimage/:id', verifyUser, updateImage);

module.exports = router;