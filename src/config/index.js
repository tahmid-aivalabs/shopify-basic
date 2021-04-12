const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || 'localhost'

const shopify = {
	key: process.env.SHOPIFY_API_KEY,
	secret: process.env.SHOPIFY_API_SECRET,
	scopes: process.env.SHOPIFY_API_SCOPES,
	host: process.env.HOST_ROUTE
}

const server = {
	port: PORT,
	hostname: HOSTNAME
}

module.exports = { server, shopify }