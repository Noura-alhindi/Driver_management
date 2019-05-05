const express = require('express')
const router = express.Router()

const Company = require('../models/company')


// Index company
router.get('/companys',(req,res )=>{
    Company.find().then((company)=>{
        res.render('index',{company})
    }).catch((err)=>{
        console.log(err);
        
    })
})

//New company
router.get('/companys/new', (req,res)=>{
    res.render('new')
})

// Post company
router.post('/companys',(req,res)=>{
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
//Show company
router.get('/company/:id',(req,res)=>{
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

// Edit company
router.get("companys/:id", (req,res)=>{
    Company.findById(req.params.id)
    .then(company =>{
        res.render('edit',{company})
    })
})

// Update company
router.put('companys/:id' ,(req ,res)=>{
    Company.findByIdAndUpdate(req.params.id)
    .then(company=>{
        res.redirect(`/companys/${company._id}`)
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router