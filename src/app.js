require('dotenv').config()
const express = require('express')
const router = require('./routes')
const mongo = require('./database/mongo')
const logger = require('./utils/logger')
const cookies = require('cookie-parser')
const { cors } = require('./config/index')
// const cors = require('cors')
const { requestResponse } = require('./utils/index')

mongo.createConnection().then((_) => {
    logger.info(`SUCCESS CONNECTING TO DATABASE MONGODB`)
}).catch((err) => {
    console.error(err)
})

const app = express()

app.use(cors)
app.use(cookies())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.get('/', (req, res) => {
    res.json({
        msg: 'selamat datang di Photograph API',
    });
});

module.exports = app


