'use strict'

const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
// const compression = require('compression')
// const minify = require('express-minify')
// const _ = require('lodash')
// const dotenv = require('dotenv').config()
const app = express()
// app.use(compression())
// app.use(minify())
app.use(express.static('./'))


const nunjucks = require('nunjucks')
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})


// app.use(express.urlencoded())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



const threeX = require('./threeX.js')




// START THE SERVER
app.listen(3002, () => {
	console.log('X3D Example')
	console.log('Running on http://localhost:3002')
})


// ROUTES
app.get('/', (req, res) => { res.render('index.html') })


