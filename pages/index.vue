<script>
import * as colorsHelpers from '~/helpers/colors.js'
import TcColorsList from '~/components/color-list.vue'
import TsColorDetail from '~/components/color-detail.vue'

export default {
  name: `page-index`,
  components: { TcColorsList, TsColorDetail },
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
        { name: 'grey', hexCode: '#777777', index: 5 },
        { name: 'error', hexCode: '#ff5252', index: 5 },
        { name: 'info', hexCode: '#2196f3', index: 5 },
        { name: 'success', hexCode: '#4caf50', index: 5 },
        { name: 'warning', hexCode: '#fb8c00', index: 5 },
      ],
      loading: false,
      colorDetailOpen: false,
      colorDetail: {},
      isGrey: false,
    }
  },
  computed: {
    mainClasses() {
      return { 'container--blurred': this.colorDetailOpen }
    },
    nuancesClasses() {
      return { 'nuances--grey': this.isGrey }
    },
  },
  methods: {
    showNuances(color) {
      this.colorDetail = color
      this.colorDetailOpen = true
    },

    hideNuances() {
      this.colorDetailOpen = false
      this.colorDetail = {}
    },
  },
}
</script>

<template>
  <div class="container">
    <main class="main" :class="mainClasses">
      <header class="header">
        <label>
          <input type="checkbox" name="grey-toggle" id="grey-toggle" v-model="isGrey" />
          check grey values
        </label>
      </header>
      <div class="nuances" :class="nuancesClasses">
        <tc-colors-list
          class="nuances__item"
          v-for="(color, colorIndex) in colors"
          :key="color.name"
          v-model="colors[colorIndex]"
          @theme="showNuances"
        />
      </div>
    </main>
    <ts-color-detail @close="hideNuances" :open="colorDetailOpen" :color="colorDetail" />
  </div>
</template>

<style scoped>
.main {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.main--blurred {
  filter: blur(2px);
}
.header {
  background: #333;
  text-align: right;
  padding: 1rem;
  color: white;
  height: var(--header-height);
}
.nuances {
  display: flex;
  margin: 0rem;
  min-height: 0;
  flex: 1 1 auto;
  align-items: stretch;
}
.nuances--grey {
  filter: grayscale();
}
</style>
