const express = require('express');
const { getEventInfo, getEventInfoById, saveEventInfo, deleteEventInfo, updateEventInfo } = require('./Controllers')
const { verifyUser } = require('../middleware/AuthUser')


const router = express.Router();

router.get('/eventinfo', getEventInfo);
router.get('/eventinfo/:id', getEventInfoById);
router.post('/eventinfo', verifyUser, saveEventInfo);
router.delete('/eventinfo/:id', verifyUser, deleteEventInfo);
router.patch('/eventinfo/:id', verifyUser, updateEventInfo);

module.exports = router;