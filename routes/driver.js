const express = require('express')
const router = express.Router()
const Driver = require('../models/driver')

// index Driver
router.get('/' ,(req,res)=>{
    Driver.find()
    .then(drivers =>{
        res.render('driver/index',{drivers})
    })
})

// New Driver
router.get('/new',(req,res )=>{
    Driver.find()
    .then(drivers =>{
        res.render('driver/new', {drivers})
    })
})

// Show driver
router.get('/:id',(req,res)=>{
    Driver.findById(req.params.id)
    .then((drivers)=>{
        res.render('driver/show',{drivers:drivers})
    })
})

// Edit Driver
router.get('/:id',(req,res)=>{
    Driver.findById(req.params.id)
    .then((drivers)=>{
        res.render('/car/edit',{drivers})
    })


})

// Update driver
router.put('/:id',(req , res)=>{
    Driver.findByIdAndUpdate(req.params.id,req.body)
    .then(drivers =>{
        res.redirect(`/driver/${drivers.id}`)
    })
})

// driver Delete
router.get('/:id',(req,res)=>{
    Driver.findByIdAndDelete()
    .then(()=>{
        res.redirect('driver')
    })
})
module.exports= router