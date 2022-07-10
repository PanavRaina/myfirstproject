const express = require('express')
const port = 8000
const app = express()

// telling this file to use router -> index.js for routing
app.use('/',require('./routes/index'))
app.set('view engine','ejs')

app.set('views','./views')

app.listen(port,function(error){
    if(error)
    {
        console.log(`Error in running the server : ${error}`)
        return
    }
    console.log("our server is up and running on port ",port)
})
