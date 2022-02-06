const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    building: {
        type: String
    },
    street: {
        type: String
    },
    zipcode: {
        type: String
    }
})

const RestaurantSchema = new mongoose.Schema({
    address: [{
        building: String,
        street: String,
        zipcode: String
    }],
    city: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: String,
        required: true
    }
})

const Restaurants = mongoose.model("Restaurants", RestaurantSchema, "Restaurants")
module.exports = Restaurants