const config = require(`./node.config.js`)

module.exports = {
  mode: `universal`,

  server: {
    port: config.PORT,
    host: config.HOST,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || ``,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      {
        hid: `description`,
        name: `description`,
        content: process.env.npm_package_description || ``,
      },
    ],
    link: [
      { rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/icon?family=Material+Icons`,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: `#fff` },
  /*
   ** Global CSS
   */
  css: [`~/assets/global-styles/index.css`],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    `~/plugins/external-librairies.js`,
    `~/plugins/global-components.js`,
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
