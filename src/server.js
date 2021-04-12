const config = require('./config')

const express = require('express')
const cors = require('cors')

const ROUTES = require('./routes')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/shopify', ROUTES)
app.listen(config.server.port, () => {
  console.log(`App is running. URL: ${config.server.hostname}:${config.server.port}`)
})