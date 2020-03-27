<script>
import * as colorsHelpers from '~/helpers/colors.js'

export default {
  name: `ts-color-detail`,
  props: {
    color: { type: Object, default: () => ({}) },
    open: false,
  },
  computed: {
    variations() {
      return colorsHelpers.generateColorVariations(this.color)
    },
    colorHexList() {
      return this.variations.map((c) => c.hexValue).join(`<br />`)
    },
    colorMeaningfulCss() {
      return this.variations
        .map((c) => `--${c.meaningfulName}: ${c.hexValue};`)
        .join(`<br />`)
    },
    colorCss() {
      return this.variations
        .map((c) => `--${c.name}: ${c.hexValue};`)
        .join(`<br />`)
    },
  },
}
</script>

<template>
  <aside class="ts-color-detail" v-if="open" :style="{ background: color.baseColor }">
    <dl>
      <dt>
        <p>{{ color.name }}</p>
        <p>{{ color.baseColor }}</p>
        <button @click="$emit(`close`)">close</button>
      </dt>
      <dd>
        <h5>Colors</h5>
        <p v-html="colorHexList" />
        <h5>CSS (meaningful)</h5>
        <p v-html="colorMeaningfulCss" />
        <h5>CSS</h5>
        <p v-html="colorCss" />
      </dd>
    </dl>
  </aside>
</template>

<style scoped>
.ts-color-detail {
  position: fixed;
  height: 100vh;
  right: 0;
  top: var(--header-height);
  width: 33%;
  color: white;
  background: black;
}
</style>
