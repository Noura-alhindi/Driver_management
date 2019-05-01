require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT
const ejs = require('ejs');
const mongoose = require('mongoose')
const Company = require('./models/company')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false})) //get json from body
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/companys', {useNewUrlParser: true}).then(() => {
    console.log('mongodb running');
}, (err) => console.log(err))

// Index
app.get('/companys',(req,res )=>{
    Company.find().then((company)=>{
        res.render('index',{company})
    }).catch((err)=>{
        console.log(err);
        
    })
})

//New 
app.get('/companys/new', (req,res)=>{
    res.render('new')
})

// Post
app.post('/companys',(req,res)=>{
    let data = {
        name : req.body.name,
        logo : req.body.logo, 
        address : req.body.address,
        city : req.body.city, 
        telephone : req.body.telephone
    }
    let company = new Company(data)
    company.save()
    .then(()=>{
        res.redirect('./companys')
    }).catch((err)=>{
        console.log(err)
    })
})
//Show
app.get('/company/:id',(req,res)=>{
    Company.findById(req.params.id)
    .then((company)=>{
        res.render('show',{
            company: company
        })
        .catch((err)=>{
            console.log(err)
        })
    })

})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})