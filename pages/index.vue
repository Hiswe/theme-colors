<script>
import * as colorsHelpers from '~/helpers/colors.js'
import TcColorsList from '~/components/color-list.vue'
import TcColorsForm from '~/components/colors-form.vue'
import ThemeDetail from '~/components/theme-detail.vue'

export default {
  name: `page-index`,
  components: { TcColorsForm, TcColorsList, ThemeDetail },
  data() {
    return {
      colors: [
        { name: 'dark-blue', hexCode: '#2475a5', index: 5 },
        { name: 'pink', hexCode: '#e0807c', index: 5 },
        { name: 'yellow', hexCode: '#f29100', index: 5 },
        { name: 'sky-blue', hexCode: '#0fb0e5', index: 5 },
        { name: 'primary', hexCode: '#62a7a5', index: 5 },
        { name: 'secondary', hexCode: '#18223e', index: 5 },
        { name: 'accent', hexCode: '#87cbc9', index: 5 },
        { name: 'error', hexCode: '#ff5252', index: 5 },
        { name: 'info', hexCode: '#2196f3', index: 5 },
        { name: 'success', hexCode: '#4caf50', index: 5 },
        { name: 'warning', hexCode: '#fb8c00', index: 5 },
      ],
      loading: false,
      themeDetailOpen: false,
      themeDetail: {},
    }
  },
  methods: {
    showNuances(colorNuances) {
      this.themeDetail = colorNuances
      this.themeDetailOpen = true
    },

    hideNuances() {
      this.themeDetailOpen = false
      this.themeDetail = {}
    },
  },
}
</script>

<template>
  <div class="container">
    <!-- <tc-colors-form v-model="colors" @submit="updateColors" /> -->
    <div class="nuances">
      <tc-colors-list
        class="nuances__item"
        v-for="(color, colorIndex) in colors"
        :key="color.name"
        v-model="colors[colorIndex]"
        @theme="showNuances"
      />
    </div>
    <!-- <theme-detail @close="hideNuances" :open="themeDetailOpen" :color-nuances="themeDetail" /> -->
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.nuances {
  display: flex;
  margin: 0rem;
  min-height: 0;
  flex: 1 1 auto;
  align-items: stretch;
}
</style>
