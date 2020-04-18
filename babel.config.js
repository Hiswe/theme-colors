const path = require(`path`)

const ROOT = path.resolve(__dirname)

module.exports = {
  env: {
    test: {
      plugins: [
        [
          `module-resolver`,
          {
            root: [ROOT],
            alias: {
              '@': `.`,
              '~': `.`,
            },
          },
        ],
      ],
    },
  },
}
