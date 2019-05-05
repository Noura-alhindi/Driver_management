const express = require('express')
const router = express.Router()
const Car = require('../models/car')

// Index Car 
router.get('/cars', (req,res)=>{
    Car.find().then((car)=>{
        res.render('car/index',{car})
    })  
})
// New Car 

router.get('cars/new',(req , res)=>{
    Car.find()
    .then(car =>{
        res.render('car/new',{car})
    })
})


// Show car 
router.get('/cars/:id', (req,res)=>{
    Car.findById(req.params.id).then((car)=>{
        res.render('car/show',{car:car})
    })
})
// Edit car 
router.get('/cars/:id/edit',(req,res)=>{
    Car.findById(req.params.id)
    .then((car)=>{
        res.render('/car/edit',{car})
    })

})

// update Car
router.put('/cars/:id',(req , res)=>{
    Car.findByIdAndUpdate(req.params.id,req.body)
    .then(car =>{
        res.redirect(`/car/${car.id}`)
    })
})

// Delete  Car
router.delete('/cars/:id',(req,res)=>{
    Car.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/cars')
    })
})


module.exports = router 