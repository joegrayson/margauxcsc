const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

// const paymongo = require('Paymongo')(process.env.PAYMONGO_SECRET_KEY);


// Process PayMongo payments  =>  /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    const paymentIntent = await paymongo.paymentIntents.create({
        amount: req.body.amount,
        currency: 'PHP',
        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })
})

// Send PayMongo API Key  =>  /api/v1/paymongoapi
exports.sendPaymongoApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        paymongoApiKey: process.env.PAYMONGO_PUBLIC_KEY
    })
})