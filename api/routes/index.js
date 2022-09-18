const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');


router.get('/hello', controller.hello);
router.post('/transfer', controller.transfer);
router.get('/user-wallet/:walletId', controller.userWallet);
router.get('/wallet-ballance/:walletId', controller.walletBallance);
router.get('/wallet-transactions/:walletId', controller.walletTransactions);

module.exports = router;
