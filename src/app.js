require('dotenv').config()
const express = require('express')
const router = require('./routes')
const mongo = require('./database/mongo')
const logger = require('./utils/logger')
const cors = require('cors')
const { requestResponse } = require('./utils/index')

mongo.createConnection().then((_) => {
    logger.info(`SUCCESS CONNECTING TO DATABASE MONGODB`)
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

module.exports = app

