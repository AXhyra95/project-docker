const controller = require('./controller')

// configurations
const express = require('express')
const routes = express.Router()

// view profile
routes.get('/', (req, res) => {
    controller.viewProfile(req, res)
})

// get profile
routes.get('/getprofile', (req, res) => {
    controller.getProfile(req, res)
})


// view repositories
routes.get('/viewrepositories', (req, res) => {
    controller.viewPepositories(req, res)
})

// get repositories
routes.get('/getrepositories', (req, res) => {
    controller.getRepositories(req, res)
})

module.exports = routes
