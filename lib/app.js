const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('../config');
const mongoose = require('mongoose');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const helmet = require('helmet')
app.use(helmet())
const routes = require('./routes')

// Connect to MongoDB
mongoose.connect(config.mongoConnectionString, { useNewUrlParser: true });

app.use('/api', routes)

module.exports = app