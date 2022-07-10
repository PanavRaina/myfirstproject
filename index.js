const express = require('express')
const port = 8000
const app = express()
app.listen(port,function(error){
    if(error)
    {
        console.log(`Error in running the server : ${error}`)
        return
    }
    console.log("our server is up and running on port ",port)
})
