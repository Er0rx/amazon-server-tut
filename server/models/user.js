const mongoose = require('mongoose');
const { productSchema } = require('./product');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(regex);
            },
            message: 'Enter a valid email address'
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return value.length >= 6;
            },
            message: 'Your password is too short!'
        }
    },
    address: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },
    cart: [
        {
            product: productSchema,
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],

});

const User = mongoose.model('User', userSchema);
module.exports = User;
