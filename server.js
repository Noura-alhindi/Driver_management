require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT
const ejs = require('ejs');
const mongoose = require('mongoose')
const company = require('./models/company')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false})) //get json from body
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/companys', {useNewUrlParser: true}).then(() => {
    console.log('mongodb running');
}, (err) => console.log(err))

// Index
app.get('/companys',(req,res )=>{
    company.find().then((companies)=>{
        res.render('index',{companies})
    }).catch((err)=>{
        console.log(err);
        
    })
})

//New 
app.get('/companys/new', (req,res)=>{
    res.render('new')
})

//Show
app.get('/company/:id',(req,res)=>{
    res.render('show',{
        company: companys[req.params.id]
    })

})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})