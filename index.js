const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const multer = require("multer")
const app = express()
const jsonfile = require('jsonfile');


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/signup', (req, res) => res.render('pages/signup'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/inputData', (req, res) => res.render('pages/inputData'))
  .get('/viewData', (req, res) => res.render('pages/viewData'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
