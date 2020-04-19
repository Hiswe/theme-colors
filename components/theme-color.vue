<script>
import { mapActions } from 'vuex'

import { THEMES, SET_COLOR, SHOW_DETAIL_COLOR } from '~/store/themes.js'
import * as colorsHelpers from '~/helpers/colors.js'
import TcColorsItem from '~/components/colors-item.vue'

export default {
  name: `tc-theme-color`,
  components: { TcColorsItem },
  model: { prop: `color`, event: `update` },
  props: {
    themeId: { type: String, required: true },
    color: { type: Object, default: () => ({}) },
  },
  computed: {
    isValid() {
      return true
    },
    variations() {
      return colorsHelpers.generateColorVariations(this.color)
    },
  },
  methods: {
    onColorDetail() {
      this.showDetailColor({ color: this.color })
    },
    onUpdateColor(hexCode) {
      const { themeId } = this
      this.setColor({ themeId, color: { ...this.color, hexCode } })
    },
    onUpdateIndex(index) {
      const { themeId } = this
      this.setColor({ themeId, color: { ...this.color, index } })
    },
    ...mapActions(THEMES, {
      setColor: SET_COLOR,
      showDetailColor: SHOW_DETAIL_COLOR,
    }),
  },
}
</script>

<template>
  <dl class="tc-theme-color">
    <dt class="tc-theme-color__header">
      <p>{{ color.name }}</p>
      <tc-button outline small @click="onColorDetail">
        <tc-icon name="visibility" />
      </tc-button>
    </dt>
    <dd class="tc-theme-color__content">
      <ol class="tc-theme-color__list">
        <tc-colors-item
          v-for="(variation, variationIndex) in variations"
          :key="variation.name"
          :color="color"
          :base-color-hex="color.hexCode"
          :variation="variation"
          :variation-index="variationIndex"
          @update:color="onUpdateColor"
          @update:index="onUpdateIndex"
        />
      </ol>
    </dd>
  </dl>
</template>

<style scoped>
.tc-theme-color {
  font-size: 0.75rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  align-items: stretch;
}
.tc-theme-color__header {
  flex: 0 0 auto;
  background: #222;
  color: white;
}
.tc-theme-color__content {
  display: contents;
}
.tc-theme-color__list {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.tc-theme-color__list::before,
.tc-theme-color__list::after {
  content: '';
  min-height: 2rem;
}
.tc-theme-color__list::before {
  background: white;
}
.tc-theme-color__list::after {
  background: black;
}
</style>
