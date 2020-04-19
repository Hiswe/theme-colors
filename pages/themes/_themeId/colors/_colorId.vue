<script>
import slugify from '@sindresorhus/slugify'
import { mapGetters } from 'vuex'

import { THEMES, THEME_COLOR } from '~/store/themes.js'
import * as colorsHelpers from '~/helpers/colors.js'
import TcNuancesText from '~/components/nuances/text.vue'
import TcNuancesSvg from '~/components/nuances/svg.vue'

export default {
  name: `page-color`,
  components: { TcNuancesText, TcNuancesSvg },
  computed: {
    nuances() {
      return colorsHelpers.generateColorVariations(this.color)
    },
    color() {
      return this.themeColor(this.$route.params)
    },
    ...mapGetters(THEMES, {
      themeColor: THEME_COLOR,
    }),
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
  <tc-main class="page-color">
    <dl class="page-color__content">
      <dt class="page-color__header" :style="{ background: nuances[0].hex }">
        <h3 class="page-color__name" :style="{ color: color.hexCode }">
          {{ color.name }} <small>({{ color.hexCode }})</small>
        </h3>
      </dt>
      <dd class="page-color__svg">
        <tc-nuances-svg ref="svg" :color="color" :nuances="nuances" />
        <tc-button class="page-color__download-svg" @click="downloadSvg">
          download SVG
        </tc-button>
      </dd>
      <dd class="page-color__values">
        <tc-nuances-text
          class="page-color__section"
          title="Colors (HEX)"
          key-name="hex"
          :nuances="nuances"
        />
        <tc-nuances-text
          class="page-color__section"
          title="Colors (RGB)"
          key-name="rgb"
          :nuances="nuances"
        />
        <tc-nuances-text
          class="page-color__section"
          title="Colors (CMYK)"
          key-name="cmyk"
          :nuances="nuances"
        />
        <tc-nuances-text
          class="page-color__section"
          title="CSS (meaningful)"
          key-name="cssVarMeaningful"
          :nuances="nuances"
        />
        <div class="page-color__section"></div>
        <tc-nuances-text
          class="page-color__section"
          title="CSS"
          key-name="cssVar"
          :nuances="nuances"
        />
      </dd>
    </dl>
  </tc-main>
</template>

<style scoped>
.page-color {
  --panel-gutter: 2rem;
  --pannel-padding: var(--panel-gutter);
  --panel-left-width: 12rem;
}
.page-color__content {
  background: white;
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
  grid-template-rows: min-content minmax(0, 1fr);
  flex: 1;
  margin: 0;
}
.page-color__close-button {
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
.page-color__header {
  background: var(--c-primary-lightest);
  padding: calc(var(--pannel-padding) / 2) var(--pannel-padding);
  grid-column: span 2;
  text-align: left;
}
.page-color__name {
  margin-top: 0;
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
}
.page-color__name small {
  font-weight: 500;
}
/* MAIN CONTENT */
.page-color__svg {
  padding: var(--pannel-padding);
  margin: 0;
  object-fit: contain;
  text-align: left;
  position: relative;
}
.page-color__download-svg {
  position: absolute;
  top: var(--pannel-padding);
  right: var(--pannel-padding);
}
.tc-nuances-svg {
  display: block;
  height: 100%;
  width: auto;
}
.page-color__values {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: var(--pannel-padding);
}
.page-color__section {
  flex: 1 0 0;
}
</style>
