// import the same Vuetify colors helpers for coherent branding
import { intToHex, colorToInt } from 'vuetify/es5/util/colorUtils.js'
import * as LAB from 'vuetify/es5/util/color/transformCIELAB.js'
import * as sRGB from 'vuetify/es5/util/color/transformSRGB.js'

export function generateColorVariations(color = {}) {
  const value = colorToInt(color.hexCode)
  const variations = []
  for (let i = color.index; i > 0; --i) {
    variations.push(intToHex(lighten(value, i)))
  }
  variations.push(intToHex(value))
  for (let i = 1; i <= 10 - color.index; ++i) {
    variations.push(intToHex(darken(value, i)))
  }
  return variations.map((hexValue, index) => {
    const variationName =
      index === 5
        ? `base`
        : index <= 4
        ? `lighten-${4 - index}`
        : `darken-${index - 5}`
    return { name: `${color.name}-variationName`, variationName, hexValue }
  })
}

// COPY FROM VUETIFY
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
