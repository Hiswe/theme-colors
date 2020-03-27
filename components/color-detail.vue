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
  <aside class="ts-color-detail" v-if="open">
    <dl class="ts-color-detail__content">
      <dt class="ts-color-detail__left-bar">
        <h3 class="ts-color-detail__name">{{ color.name }}</h3>
        <p>{{ color.baseColor }}</p>
        <button @click="$emit(`close`)">close</button>
      </dt>
      <dd class="ts-color-detail__values">
        <div class="ts-color-detail__section">
          <h5>Colors</h5>
          <p v-html="colorHexList" />
        </div>
        <div class="ts-color-detail__section">
          <h5>CSS (meaningful)</h5>
          <p v-html="colorMeaningfulCss" />
        </div>
        <div class="ts-color-detail__section">
          <h5>CSS</h5>
          <p v-html="colorCss" />
        </div>
      </dd>
    </dl>
  </aside>
</template>

<style scoped>
.ts-color-detail {
  --panel-gutter: 5rem;
  --panel-left-width: 12rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
}
.ts-color-detail__content {
  position: absolute;
  top: var(--panel-gutter);
  right: var(--panel-gutter);
  bottom: var(--panel-gutter);
  left: var(--panel-gutter);
  background: white;
  display: flex;
  padding: 2rem;
}
/* LEFT BAR */
.ts-color-detail__left-bar {
  width: var(--panel-left-width);
  flex: 0 0 var(--panel-left-width);
  font-size: 1rem;
}
.ts-color-detail__name {
  margin-top: 0;
}
/* MAIN CONTENT */
.ts-color-detail__values {
  display: flex;
  flex: 1 0 0;
}
.ts-color-detail__section {
  flex: 1 0 0;
}
</style>
