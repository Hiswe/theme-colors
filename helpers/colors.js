// https://markrabey.github.io/kwulers/
import * as kwulers from 'kwulers'
// import the same Vuetify colors helpers for coherent branding
import * as colorUtils from 'vuetify/es5/util/colorUtils.js'
import * as LAB from 'vuetify/es5/util/color/transformCIELAB.js'
import * as sRGB from 'vuetify/es5/util/color/transformSRGB.js'

const COLOR_INDEX_TO_MEANINGFUL_NAME = [
  `-whitest`,
  `-whiter`,
  `-white`,
  `-lightest`,
  `-lighter`,
  ``,
  `-darker`,
  `-darkest`,
  `-black,`,
  `-blacker`,
  `-blackest`,
]

function getNuanceNames(nuanceIndex) {
  const isBase = nuanceIndex === 5
  const isLighter = nuanceIndex <= 4
  const name = isBase
    ? `base`
    : isLighter
    ? `lighten-${4 - nuanceIndex}`
    : `darken-${nuanceIndex - 5}`
  return {
    name,
    meaningfulName: COLOR_INDEX_TO_MEANINGFUL_NAME[nuanceIndex],
  }
}

export function generateColorVariations(color = {}) {
  const variations = []
  if (color.hexCode == null) return variations
  const value = colorUtils.colorToInt(color.hexCode)
  for (let i = color.index; i > 0; --i) {
    variations.push(colorUtils.intToHex(lighten(value, i)))
  }
  variations.push(colorUtils.intToHex(value))
  for (let i = 1; i <= 10 - color.index; ++i) {
    variations.push(colorUtils.intToHex(darken(value, i)))
  }
  return variations.map((hexValue, nuanceIndex) => {
    const nuanceNames = getNuanceNames(nuanceIndex)
    const rgbVal = kwulers.getRGBFromHex(hexValue)
    // sometimes value is NaN (full mega black)
    const cmykVal = kwulers
      .getCMYKFromHex(hexValue)
      .map((value) => (Number.isNaN(value) ? 100 : Math.round(value * 100)))
    return {
      name: `${color.name}-${nuanceNames.name}`,
      meaningfulName: `${color.name}${nuanceNames.meaningfulName}`,
      nuanceNames,
      hexValue,
      hex: hexValue,
      rgb: `rgb(${rgbVal.join(`, `)})`,
      cmyk: `cmyk(${cmykVal.join(`, `)})`,
    }
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
