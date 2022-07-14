const express = require('express')
//To read and write into cookie we require
const cookieParser=require('cookie-parser')
const port = 8000
const app = express()
const expressLayouts=require('express-ejs-layouts')
// connecting to database
const db = require('./config/mongoose')
const { urlencoded } = require('express')

app.use(express.static('./assets'))
app.use(expressLayouts)
// Reading through the post request (I thin geeting data in form of string from post request)
app.use(urlencoded({extended:false}))
// use cookie parser
app.use(cookieParser())

// telling this file to use router(folder) -> index.js for routing
app.use('/',require('./routes/index'))
app.set('view engine','ejs')

app.set('views','./views')

// placing style tag in head section when individual pages are getting wrapped around layout
app.set('layout extractStyles',true)

// placing script tag in correct position when individual pages are getting wrapped around layout
app.set('layout extractScripts',true)


app.listen(port,function(error){
    if(error)
    {
        console.log(`Error in running the server : ${error}`)
        return
    }
    console.log("our server is up and running on port ",port)
})
