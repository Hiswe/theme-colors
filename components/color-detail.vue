<script>
import slugify from '@sindresorhus/slugify'

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
    nuances() {
      return colorsHelpers.generateColorVariations(this.color)
    },
  },
  methods: {
    // https://stackoverflow.com/a/20194533
    downloadSvg() {
      const a = window.document.createElement(`a`)
      a.href = window.URL.createObjectURL(
        new Blob([this.$refs.svg.$el.outerHTML], { type: `text/svg` }),
      )
      a.download = `${slugify(this.color.name)}.svg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
  },
}
</script>

<template>
  <aside v-if="open" class="ts-color-detail">
    <dl class="ts-color-detail__content">
      <dt
        class="ts-color-detail__header"
        :style="{ background: nuances[0].hex }"
      >
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
      <dd class="ts-color-detail__svg">
        <tc-nuances-svg ref="svg" :color="color" :nuances="nuances" />
        <tc-button class="ts-color-detail__download-svg" @click="downloadSvg">
          download SVG
        </tc-button>
      </dd>
      <dd class="ts-color-detail__values">
        <tc-nuances-text
          class="ts-color-detail__section"
          title="Colors (HEX)"
          key-name="hex"
          :nuances="nuances"
        />
        <tc-nuances-text
          class="ts-color-detail__section"
          title="Colors (RGB)"
          key-name="rgb"
          :nuances="nuances"
        />
        <tc-nuances-text
          class="ts-color-detail__section"
          title="Colors (CMYK)"
          key-name="cmyk"
          :nuances="nuances"
        />
        <tc-nuances-text
          class="ts-color-detail__section"
          title="CSS (meaningful)"
          key-name="cssVarMeaningful"
          :nuances="nuances"
        />
        <div class="ts-color-detail__section"></div>
        <tc-nuances-text
          class="ts-color-detail__section"
          title="CSS"
          key-name="cssVar"
          :nuances="nuances"
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
  grid-template-columns: min-content minmax(0, 1fr);
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
.ts-color-detail__svg {
  padding: var(--pannel-padding);
  margin: 0;
  object-fit: contain;
  text-align: left;
  position: relative;
}
.ts-color-detail__download-svg {
  position: absolute;
  top: var(--pannel-padding);
  right: var(--pannel-padding);
}
.tc-nuances-svg {
  display: block;
  height: 100%;
  width: auto;
}
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
