const express = require('express')
const port = 8000
const app = express()
const expressLayouts=require('express-ejs-layouts')
// connecting to database
const db = require('./config/mongoose')

app.use(express.static('./assets'))
app.use(expressLayouts)


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
