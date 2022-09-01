const express = require('express');
const { getCoupleInfoById, getCoupleInfo, saveCoupleInfo, deleteCoupleInfo, updateCoupleInfo } = require('./Controllers')
const { verifyUser } = require('../middleware/AuthUser')

const router = express.Router();

router.get('/coupleinfo', getCoupleInfo);
router.get('/coupleinfo/:id', getCoupleInfoById);
router.post('/coupleinfo', verifyUser, saveCoupleInfo);
router.delete('/coupleinfo/:id', verifyUser, deleteCoupleInfo);
router.patch('/coupleinfo/:id', verifyUser, updateCoupleInfo);

module.exports = router;