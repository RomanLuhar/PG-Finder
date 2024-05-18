const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname:{
        type:String
    },
    username:{
        type:String
    },
    phoneNo:{
        type:String 
    },
    email:{
        type:String,
        Unique:true
    },
    age:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type: Schema.Types.ObjectId,
        ref:'role'
    }
    
})
module.exports = mongoose.model('users',userSchema);