const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const carSchema= new Schema({

    cars :[{
        name : {type: String, require: true },
        model : {type: String, require: true },
        year : {type: String, require: true },
        image : {type: String, require: true },
    }],

    
}, {timestamps: true})

const Car = mongoose.model('Car', carSchema);


module.exports = Car;