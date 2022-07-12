const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

// Tells User is a model/collection named user and schema followed is userSchema defined above
const User = mongoose.model('User',userSchema)

module.exports=User