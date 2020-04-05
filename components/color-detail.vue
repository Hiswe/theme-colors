<script>
// https://markrabey.github.io/kwulers/
import * as kwulers from 'kwulers'

import * as colorsHelpers from '~/helpers/colors.js'
import TcColorTestNuances from '~/components/color-text-nuances.vue'

export default {
  name: `TsColorDetail`,
  components: { TcColorTestNuances },
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
        return (
          kwulers
            .getCMYKFromHex(c.hexValue)
            // sometimes value is NaN (full mega black)
            .map((value) =>
              Number.isNaN(value) ? 100 : Math.round(value * 100),
            )
        )
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
      <dt class="ts-color-detail__left-bar">
        <h3 class="ts-color-detail__name">{{ color.name }}</h3>
        <p>{{ color.baseColor }}</p>
        <button @click="$emit(`close`)">close</button>
      </dt>
      <dd class="ts-color-detail__values">
        <tc-color-test-nuances
          class="ts-color-detail__section"
          title="Colors (HEX)"
          :nuances="colorHexList"
        />
        <tc-color-test-nuances
          class="ts-color-detail__section"
          title="Colors (RGB)"
          :nuances="colorRgbList"
        />
        <tc-color-test-nuances
          class="ts-color-detail__section"
          title="Colors (CMYK)"
          :nuances="colorCmykList"
        />
        <tc-color-test-nuances
          class="ts-color-detail__section"
          title="CSS (meaningful)"
          :nuances="colorMeaningfulCss"
        />
        <div class="ts-color-detail__section"></div>
        <tc-color-test-nuances
          class="ts-color-detail__section"
          title="CSS"
          :nuances="colorCss"
        />
      </dd>
    </dl>
  </aside>
</template>

<style scoped>
.ts-color-detail {
  --panel-gutter: 2rem;
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
