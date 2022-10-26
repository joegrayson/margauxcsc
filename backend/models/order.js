const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    shippingInfo: {
        country: { 
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        region: { // walang region kay manong Indian
            type: String,
            required: true
        },
        phoneNumber: {  // phoneNo kay manong Indian
            type: String,
            required: true
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }

        }
    ],
    paymentInfo: { // Stripe daw gagamitin as payment
        id: {
            type: String
        },
        status: {
            type: String
        }
    },
    paidAt: {
        type: Date
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.00 // 0.0 sa kanya
    },
    // taxPrice: {
    //     type: Number,
    //     required: true,
    //     default: 0.00 // 0.0 sa kanya
    // },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.00 // 0.0 sa kanya
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.00 // 0.0 sa kanya
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Order', orderSchema)