const express = require('express')
const crypto = require('crypto')

const router = express.Router()

const config = require('../config')

router.get('/', (req, res) => {
  try {
    const shop = req.query.shop
    if(shop) {
      const state = crypto.randomBytes(16).toString('base64').replace(/\//g, '').replace(/\+/g, '').replace(/\=/g, '')
      const redirectUri = config.shopify.host + '/shopify/callback'
      const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${config.shopify.key}&scope=${config.shopify.scopes}&state=${state}&redirect_uri=${redirectUri}`
      res.cookie('state', state, { sameSite: 'none', secure: true })
    }
    else {
      res.status(400).send('Query parameter shop is missing from the url')
    }
  }
  catch(e) {
    console.log(e)
    res.status(500).send('Internal Server Error')
  }
})

router.get('/callback', (req, res) => {
  res.redirect('/')
})

module.exports = router