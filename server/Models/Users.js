const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    password:{
        type: String,
    },
    role:{
        type:String,
        default:'user',
    },
    userCollection: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'collections'
    }
},{ timestamps: true })

module.exports = mongoose.model('users',userSchema)