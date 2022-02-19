const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Users = require('./models/Users.js')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/users', (req, res) => {
    
    let tempUsers = new Users({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        company: req.body.company
    })
    
    tempUsers.save((err) => {
        if (err) {
            return res.status(400).json(err.message)
        } else {
            return res.status(200).json({Message: 'Saved'})
        }
    })
})

let db = 'mongodb+srv://capstone_users:comp3078_access@comp3123.bxzhg.mongodb.net/comp3133?retryWrites=true&w=majority'

mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true})

app.listen(port, () => {
    console.log('Server at port ' + port)
})