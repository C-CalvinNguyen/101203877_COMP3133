const mongoose = require('mongoose')

let UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            match: [/^[a-zA-Z\s]*$/, 'City can only have letters and space']
        },
        zipcode: {
            type: String,
            required: true,
            match: [/([0-9]{5}).\-?([0-9]{4})/, 'Please enter a valid ZIP code']
        },
        geo: {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        match: [/([0-9]).\-?([0-9]{3}).\-?([0-9]{3}).\-?([0-9]{4})/, 'Please enter a valid phone number']
    },
    website: {
        type: String,
        required: true,
        match: [/^(?:(?:(?:http?|https):)?\/\/).+\..+/, 'Please enter a valid URL']

    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('Users', UsersSchema)