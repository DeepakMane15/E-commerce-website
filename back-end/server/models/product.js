const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true,
        trim: true
    },
    slug:
    {
        type: String,
        required: true,
        unique: true
    },

    price: {
        type: Number,
        required: true,

    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    offer: {
        type: Number  
    },
    productPictures: [
        {
            img: { type: String }
        }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
            review: String
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
    updatedAt: Date,


},
    { timestamp: true });

module.exports = mongoose.model('Product', productSchema)