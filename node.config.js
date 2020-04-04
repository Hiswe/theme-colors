const rc = require(`rc`)

const config = rc(`tc`, {
  PORT: 3666,
  HOST: `localhost`,
  colors: {
    'dark-blue': `#2475a5`,
    'pink': `#e0807c`,
    'yellow': `#f29100`,
    'sky-blue': `#0fb0e5`,
    'primary': `#62a7a5`, // sky blue darkened (better for contrast)
    'secondary': `#18223e`, // deep blue
    'accent': `#87cbc9`, // sky blue
    // keep the same as default Vuetify
    'error': `#ff5252`,
    'info': `#2196f3`,
    'success': `#4caf50`,
    'warning': `#fb8c00`,
  },
})

module.exports = config
