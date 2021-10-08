// const ronin     = require( 'ronin-server' )
// const mocks     = require( 'ronin-mocks' )
// const database  = require( 'ronin-database' )
// const server = ronin.server()

const express = require('express')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
dotenv.config()

app.use('/', require('./route'))




const PORT = process.env.PORT || 5000
var databaseUrl = process.env.DATABASE_URL + process.env.DATABASE
mongoose.connect(databaseUrl.toString(), { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log("database connected"))
    .catch( () => console.log('Error'))



app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT} with the single worker ${process.pid}`)
})

// database.connect( process.env.CONNECTIONSTRING )
// server.start()
