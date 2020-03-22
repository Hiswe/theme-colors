const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const nodeConfig = require('../node.config.js')
const nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = process.env.NODE_ENV !== 'production'
const colors = require('./colors.js')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  const { host, port } = nuxt.options.server
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.get(`/api/colors`, (req, res) => {
    res.json({
      colors: nodeConfig.colors,
      ...colors.generateVariations(nodeConfig.colors),
    })
  })
  app.post(`/api/colors`, (req, res) => {
    console.log(req.body)
    res.json({ colors: req.body, ...colors.generateVariations(req.body) })
  })

  await nuxt.ready()
  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
