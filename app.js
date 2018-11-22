const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//connect db
mongoose.connect('mongodb://localhost/mongoosebikes')
//app
const app = express()
//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
//statics
app.use(express.static('public'))
//views
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
//routes

const bikeRoutes = require('./routes/bikes')
app.use('/', bikeRoutes)


app.listen(3000,()=>{
    console.log('app running on p 3000')
})

