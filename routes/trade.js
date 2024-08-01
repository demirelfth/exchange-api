const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

router.post('/buy', tradeController.buyShare);
router.post('/sell', tradeController.sellShare);

module.exports = router;