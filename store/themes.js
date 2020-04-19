import Vue from 'vue'

export const THEMES = `themes`

export const state = () => {
  return {
    colorDetail: false,
    list: [
      {
        id: `lgP5L-1aj4BrJbaZ-UDVh"`,
        name: `brand`,
        colors: [
          {
            id: `dKnzXePTodyDRJm6bMSmI`,
            name: `primary`,
            hexCode: `#5756A2`,
            index: 5,
          },
          {
            id: `o5IV6-ME4xfMy4ctYwh5k`,
            name: `secondary`,
            hexCode: `#0FB0E5`,
            index: 5,
          },
          {
            id: `GfMIisFM1AeX8bLdfzt2h`,
            name: `neutral`,
            hexCode: `#6C6C6F`,
            index: 5,
          },
        ],
      },
      {
        id: `pNRimTfRerxkX54lIWafJ`,
        name: `pio`,
        colors: [
          {
            id: `rwC5_c6hWn-5E-CLTTkJy`,
            name: `primary`,
            hexCode: `#2B3C6F`,
            index: 7,
          },
          {
            id: `Cg_lRaWFfPShqiQaTHpuI`,
            name: `secondary`,
            hexCode: `#77CACF`,
            index: 4,
          },
          {
            id: `CHIl90s_RKa2EpBSkDT8r`,
            name: `accent`,
            hexCode: `#E55539`,
            index: 6,
          },
        ],
      },
      {
        id: `7XZFOfYXzyOPvvT1WvzB`,
        name: `str`,
        colors: [
          {
            id: `Od-f-8u3RfG1k1bZxF55Q`,
            name: `primary`,
            hexCode: `#920C2F`,
            index: 7,
          },
          {
            id: `Piw0m4_Oe2BOtgwLSEg-q`,
            name: `accent`,
            hexCode: `#182282`,
            index: 7,
          },
        ],
      },
      {
        id: `LtCh_C6Wg58N2ShOuSAfR`,
        name: `services`,
        colors: [
          {
            id: `jWjsv7yrtd_voboiXoeYp`,
            name: `training`,
            hexCode: `#F29100`,
            index: 5,
          },
          {
            id: `gWr_rc8NaEJBo7Yzdfqxi`,
            name: `quantum`,
            hexCode: `#E0807C`,
            index: 4,
          },
        ],
      },
      {
        id: `gSsSsPcQZeAanmdxOXej7`,
        name: `utils`,
        colors: [
          {
            id: `kgilD455Za3JjQPHUjIRA`,
            name: `info`,
            hexCode: `#2196f3`,
            index: 5,
          },
          {
            id: `lIRfEX2jYdoQ07i9L5ZeX`,
            name: `success`,
            hexCode: `#5dbf37`,
            index: 5,
          },
          {
            id: `5zssTykjqHSR_teGNr_RT`,
            name: `warn`,
            hexCode: `#ffa500`,
            index: 5,
          },
          {
            id: `yZ_WzP4Tss2ZgmhMCSsgV`,
            name: `error`,
            hexCode: `#e44d4d`,
            index: 6,
          },
        ],
      },
    ],
  }
}

export const THEME_COLOR = `THEME_COLOR`

export const getters = {
  [THEME_COLOR]: (state) => ({ themeId, colorId }) => {
    const theme = state.list.find((theme) => theme.id === themeId)
    return theme.colors.find((themeColor) => themeColor.id === colorId)
  },
}

const M_SET_COLOR = `M_SET_COLOR`

export const mutations = {
  [M_SET_COLOR](state, { themeId, color }) {
    const theme = state.list.find((theme) => theme.id === themeId)
    const colorIndex = theme.colors.findIndex(
      (themeColor) => themeColor.id === color.id,
    )
    Vue.set(theme.colors, colorIndex, color)
  },
}

export const SET_COLOR = `SET_COLOR`

export const actions = {
  [SET_COLOR](vuexCtx, { themeId, color }) {
    const { commit } = vuexCtx
    commit(M_SET_COLOR, { themeId, color })
  },
}
