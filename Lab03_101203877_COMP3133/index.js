const express = require('express')
const mongoose = require('mongoose')
const restaurantRoutes = require('./routes/RestaurantRoutes.js')
const app = express()
app.use(express.json())

const db = "mongodb+srv://all_user:comp3133_access@comp3123.bxzhg.mongodb.net/comp3133?retryWrites=true&w=majority"

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(restaurantRoutes)

app.listen(3000, () => { console.log('Server is listening at port 3000') });