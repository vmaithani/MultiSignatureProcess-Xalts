const express = require('express');
const router = express.Router();
const processController = require('../controllers/processController');

router.post('/create', processController.createProcess);
router.get('/view/:processId', processController.viewProcess);

module.exports = router;