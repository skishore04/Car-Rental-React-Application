const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://skishore_04:kishore@cluster0.soqzb7n.mongodb.net/rentacar' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose