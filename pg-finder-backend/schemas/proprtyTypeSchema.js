const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const propertyTypeSchema = new Schema({
   type :{
        type:String,
        // require: true
    },
    
})

module.exports= mongoose.model('propertyType',propertyTypeSchema);