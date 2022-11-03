const express = require('express')
const router = express.Router();

const { 
    processPayment,
    sendPaymongoApi
} = require('../controllers/paymentController')

const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/paymongoapi').get(isAuthenticatedUser, sendPaymongoApi);

module.exports = router;