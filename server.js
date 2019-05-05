require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT
const ejs = require('ejs');
const mongoose = require('mongoose')
const Company = require('./models/company')
const Car = require('./models/car')
const Driver = require('./models/driver')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false})) //get json from body
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/companys', {useNewUrlParser: true}).then(() => {
    console.log('mongodb running');
}, (err) => console.log(err))


///////////////////
// Driver
//////////////////
// index Driver
app.get('/drivers/' ,(req,res)=>{
    Driver.find()
    .then(drivers =>{
        res.render('driver/index',{drivers})
    })
})

// New Driver
app.get('/drivers/new',(req,res )=>{
    Driver.find()
    .then(drivers =>{
        res.render('driver/new', {drivers})
    })
})

// Show driver
app.get('/drivers/:id',(req,res)=>{
    Driver.findById(req.params.id)
    .then((drivers)=>{
        res.render('driver/show',{drivers:drivers})
    })
})

// Edit Driver
app.get('/drivers/:id',(req,res)=>{
    Driver.findById(req.params.id)
    .then((drivers)=>{
        res.render('/car/edit',{drivers})
    })


})

// Update driver
app.put('/drivers/:id',(req , res)=>{
    Driver.findByIdAndUpdate(req.params.id,req.body)
    .then(drivers =>{
        res.redirect(`/driver/${drivers.id}`)
    })
})

// driver Delete
app.get('/drivers/:id',(req,res)=>{
    Driver.findByIdAndDelete()
    .then(()=>{
        res.redirect('driver')
    })
})

//////////////////
// car
/////////////////
// Index Car 
app.get('/cars', (req,res)=>{
    Car.find().then((car)=>{
        res.render('car/index',{car})
    })  
})
// New Car 

app.get('cars/new',(req , res)=>{
    Car.find()
    .then(car =>{
        res.render('car/new',{car})
    })
})


// Show car 
app.get('/cars/:id', (req,res)=>{
    Car.findById(req.params.id).then((car)=>{
        res.render('car/show',{car:car})
    })
})
// Edit car 
app.get('/cars/:id/edit',(req,res)=>{
    Car.findById(req.params.id)
    .then((car)=>{
        res.render('/car/edit',{car})
    })

})

// update Car
app.put('/cars/:id',(req , res)=>{
    Car.findByIdAndUpdate(req.params.id,req.body)
    .then(car =>{
        res.redirect(`/car/${car.id}`)
    })
})

// Delete  Car
app.delete('/cars/:id',(req,res)=>{
    Car.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/cars')
    })
})

/////////////////////
// Company
////////////////////
// Index company
app.get('/companys',(req,res )=>{
    Company.find().then((company)=>{
        res.render('index',{company})
    }).catch((err)=>{
        console.log(err);
        
    })
})

//New company
app.get('/companys/new', (req,res)=>{
    res.render('new')
})

// Post company
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
//Show company
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

// Edit company
app.get("companys/:id", (req,res)=>{
    Company.findById(req.params.id)
    .then(company =>{
        res.render('edit',{company})
    })
})

// Update company
app.put('companys/:id' ,(req ,res)=>{
    Company.findByIdAndUpdate(req.params.id)
    .then(company=>{
        res.redirect(`/companys/${company._id}`)
    }).catch(err=>{
        console.log(err)
    })
})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})