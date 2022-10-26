const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'Please enter product name.'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed characters.']
    },
    price: {
        type: Number,
        required: [true , 'Please enter product price.'],
        maxLength: [5, 'Product name cannot exceed characters.'],
        default: 0.00
    },
    description: {
        type: String,
        required: [true , 'Please enter product description.'],        
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product.'],
        enum: {
            values: [
                'Succulents',
                'Cacti',
                'Pots',
                'Planters'
            ],
            message: 'Please select a correct category for this product.'
        }
    },
    stock: {
        type: Number,
        required: [true , 'Please enter product stock.'],
        maxLength:[5, 'Product name cannot exceed 5 characters.'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Product', productSchema);