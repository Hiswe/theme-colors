'use strict'

const path = require('path')
const fs = require('fs')
const _ = require('lodash')

// import the same Vuetify colors helpers for coherent branding
const { intToHex, colorToInt } = require('vuetify/es5/util/colorUtils.js')
const LAB = require('vuetify/es5/util/color/transformCIELAB.js')
const sRGB = require('vuetify/es5/util/color/transformSRGB.js')

module.exports = {
  generateVariations,
}

generateVariations()

function generateVariations(colors = {}) {
  const themeColors = Object.entries(colors).map(([colorName, colorValue]) => {
    const variations = genVariations(colorName, colorToInt(colorValue))
    const colors = Object.entries(variations).map(
      ([variationName, variationColor]) => {
        return {
          name: `${colorName}-${variationName}`,
          variationName,
          hexValue: variationColor,
        }
      },
    )
    return {
      name: colorName,
      baseColor: colorValue,
      colors,
    }
  })
  // console.log(themeColors);
  // const flattenThemeColors = _.flatten(themeColors)
  // const cssCustomProperties = flattenThemeColors.map(color => `  --c-${color};`)
  //   fs.writeFileSync(path.join(__dirname, `../colors.md`), flattenThemeColors.join(`\n`))
  //   fs.writeFileSync(path.join(__dirname, `../colors.css`), `:root {
  // ${cssCustomProperties.join(`\n`)}
  // }`)
  return { themeColors }
}

// COPY FROM VUETIFY
function genVariations(name, value) {
  const values = {
    base: intToHex(value),
  }
  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = intToHex(lighten(value, i))
  }
  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = intToHex(darken(value, i))
  }
  return values
}
function lighten(value, amount) {
  const lab = LAB.fromXYZ(sRGB.toXYZ(value))
  lab[0] = lab[0] + amount * 10
  return sRGB.fromXYZ(LAB.toXYZ(lab))
}
function darken(value, amount) {
  const lab = LAB.fromXYZ(sRGB.toXYZ(value))
  lab[0] = lab[0] - amount * 10
  return sRGB.fromXYZ(LAB.toXYZ(lab))
}
