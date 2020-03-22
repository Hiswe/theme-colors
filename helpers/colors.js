// import the same Vuetify colors helpers for coherent branding
import { intToHex, colorToInt } from 'vuetify/es5/util/colorUtils.js'
import * as LAB from 'vuetify/es5/util/color/transformCIELAB.js'
import * as sRGB from 'vuetify/es5/util/color/transformSRGB.js'

export function generateColorVariations({
  name: colorName,
  hexCode: colorValue,
} = {}) {
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
  return colors
}

// COPY FROM VUETIFY
function genVariations(name, value) {
  const values = {}
  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = intToHex(lighten(value, i))
  }
  values.base = intToHex(value)
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
