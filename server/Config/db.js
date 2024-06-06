const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://nutgzazah:2869978331@cluster0.gwi43ll.mongodb.net/gunplapedia')
        console.log('DB Connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB