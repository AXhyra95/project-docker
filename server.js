const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )
const database  = require( 'ronin-database' )
const server = ronin.server()

const express = require('express')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
dotenv.config()

server.use('/', require('./route'))

const PORT = process.env.PORT || 5000
var databaseUrl = process.env.DATABASE_URL + process.env.DATABASE
// console.log(databaseUrl);
mongoose.connect(databaseUrl.toString() )
    .then(() => console.log("database connected"))
    .catch( () => console.log('Error'))

database.connect( process.env.CONNECTIONSTRING )
server.start()
