<script>
// https://markrabey.github.io/kwulers/
import * as kwulers from 'kwulers'

import * as colorsHelpers from '~/helpers/colors.js'
import TcNuancesText from '~/components/nuances/text.vue'
import TcNuancesSvg from '~/components/nuances/svg.vue'

export default {
  name: `ts-color-detail`,
  components: { TcNuancesText, TcNuancesSvg },
  props: {
    color: { type: Object, default: () => ({}) },
    open: { type: Boolean, default: false },
  },
  computed: {
    variations() {
      return colorsHelpers.generateColorVariations(this.color)
    },
    colorHexList() {
      return this.variations.map((c) => c.hexValue)
    },
    colorRgbList() {
      return this.variations
        .map((c) => kwulers.getRGBFromHex(c.hexValue))
        .map((rgb) => `rgb(${rgb.join(`, `)})`)
    },
    cmykList() {
      return this.variations.map((c) => {
        return kwulers
          .getCMYKFromHex(c.hexValue)

          .map((value) => (Number.isNaN(value) ? 100 : Math.round(value * 100)))
      })
    },
    colorCmykList() {
      return this.cmykList.map((cmyk) => `cmyk(${cmyk.join(`, `)})`)
    },
    colorMeaningfulCss() {
      return this.variations.map((c) => `--${c.meaningfulName}: ${c.hexValue};`)
    },
    colorCss() {
      return this.variations.map((c) => `--${c.name}: ${c.hexValue};`)
    },
  },
}
</script>

<template>
  <aside v-if="open" class="ts-color-detail">
    <dl class="ts-color-detail__content">
      <dt class="ts-color-detail__header">
        <h3 class="ts-color-detail__name" :style="{ color: color.hexCode }">
          {{ color.name }} <small>({{ color.hexCode }})</small>
        </h3>
        <tc-button
          class="ts-color-detail__close-button"
          outline
          color="accent"
          @click="$emit(`close`)"
        >
          <tc-icon name="close" />
        </tc-button>
      </dt>
      <dd class="ts-color-detail__values">
        <tc-nuances-svg :nuances="variations" />
      </dd>
      <dd class="ts-color-detail__values">
        <tc-nuances-text
          class="ts-color-detail__section"
          title="Colors (HEX)"
          key-name="hex"
          :nuances="colorHexList"
        />
        <tc-nuances-text
          class="ts-color-detail__section"
          title="Colors (RGB)"
          key-name="rgb"
          :nuances="colorRgbList"
        />
        <tc-nuances-text
          class="ts-color-detail__section"
          title="Colors (CMYK)"
          key-name="cmyk"
          :nuances="colorCmykList"
        />
        <tc-nuances-text
          class="ts-color-detail__section"
          title="CSS (meaningful)"
          key-name="cssNameMeaningful"
          :nuances="colorMeaningfulCss"
        />
        <div class="ts-color-detail__section"></div>
        <tc-nuances-text
          class="ts-color-detail__section"
          title="CSS"
          key-name="cssName"
          :nuances="colorCss"
        />
      </dd>
    </dl>
  </aside>
</template>

<style scoped>
.ts-color-detail {
  --panel-gutter: 2rem;
  --pannel-padding: var(--panel-gutter);
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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: min-content minmax(0, 1fr);
}
.ts-color-detail__close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  height: 2rem;
  width: 2rem;
  padding: 0;
}
/* LEFT BAR */
.ts-color-detail__header {
  background: var(--c-primary-lightest);
  padding: calc(var(--pannel-padding) / 2) var(--pannel-padding);
  grid-column: span 2;
}
.ts-color-detail__name {
  margin-top: 0;
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
}
.ts-color-detail__name small {
  font-weight: 500;
}
/* MAIN CONTENT */
.ts-color-detail__values {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: var(--pannel-padding);
}
.ts-color-detail__section {
  flex: 1 0 0;
}
</style>
