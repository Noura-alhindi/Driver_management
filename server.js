require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT
const ejs = require('ejs');
const mongoose = require('mongoose')




app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false})) //get json from body
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/companys', {useNewUrlParser: true}).then(() => {
    console.log('mongodb running');
}, (err) => console.log(err))






app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})