const express = require('express')
const restaurantModel = require('../models/Resturants.js')
const app = express()

app.get('/restaurants', async (req, res) => {

    try {

        const restaurants = await restaurantModel.find({})
        let option = null

        if (req.query.sortBy == 'ASC') {
            const filtered = await restaurantModel.find({}, 'cuisine name city restaurant_id').sort({restaurant_id: 1})
            return res.status(200).send(filtered)
        }
        if (req.query.sortBy == 'DESC') {
            const filtered = await restaurantModel.find({}, 'cuisine name city restaurant_id').sort({restaurant_id: -1})
            return res.status(200).send(filtered)
        }

        return res.status(200).send(restaurants);
      } catch (err) {
        return res.status(500).send(err);
      }
})

app.get('/restaurants/cuisine/Japanese', async (req, res) => {
    const restaurants = await restaurantModel.find({cuisine: "Japanese"})   

    try {
        res.status(200).send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
})

app.get('/restaurants/cuisine/Bakery', async (req, res) => {
    const restaurants = await restaurantModel.find({cuisine: "Bakery"})

    try {
        res.status(200).send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
})

app.get('/restaurants/cuisine/Italian', async (req, res) => {
    const restaurants = await restaurantModel.find({cuisine: "Italian"})   

    try {
        res.status(200).send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
})

app.get('/restaurants/Delicatessen', async (req, res) => {
    const restaurants = await restaurantModel.find({cuisine: "Delicatessen", city: {$ne: 'Brooklyn'}}, '-_id cuisine name city restaurant_id').sort({name: 1})

    try {
        res.status(200).send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
})

module.exports = app