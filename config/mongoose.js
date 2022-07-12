const mongoose = require('mongoose')

//making the connection
mongoose.connect('mongodb://localhost/socialize_development')
// calling it development because we are in development envionment 

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"))

db.once('open',function(){
    console.log("Connected to databse :: MongoDB")
})

module.exports=db