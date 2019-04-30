const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const companySchema= new Schema({

    name : {type: String, require: true },
    logo : String,
    address :String ,
    city : String  , 
    telephone: Number,
    // createdAt: String,
    // updatedAt : String,
    
    driver:{
        name: String,
        age: Number,
        image : String
    },
    car :{
        name : String ,
        model : String ,
        year : Number,
        image : String
    },

    
}, {timestamps: true})

const Company = mongoose.model('Company', companySchema);


module.exports = Company;