const express = require('express')
const app = express()
const server = require('http').Server(app)

const config = require('./config')

const cors = require('cors')

const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

db(config.dbUrl)

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router(app)

app.use(config.publicRoute, express)

server.listen(config.port, () => {
    console.log('Running in ' + config.host + ':' + config.port)
}) 