const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const driverSchema= new Schema({

    
    driver:[{
        name: {type: String, require: true },
        age: {type: Number, require: true },
        image : {type: String},
    }],


    
}, {timestamps: true})

const Driver = mongoose.model('Driver', driverSchema);


module.exports = Driver;