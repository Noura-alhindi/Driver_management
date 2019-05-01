const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const companySchema= new Schema({

    name : {type: String, require: true },
    logo : {type: String, require: true },
    address :{type: String, require: true },
    city : {type: String, require: true },
    telephone:{type: String, require: true },
    
    drivers:[{
        name: {type: String, require: true },
        age: {type: Number, require: true },
        image : {type: String},
    }],
    cars :[{
        name : {type: String, require: true },
        model : {type: String, require: true },
        year : {type: String, require: true },
        image : {type: String, require: true },
    }],

    
}, {timestamps: true})

const Company = mongoose.model('Company', companySchema);


module.exports = Company;