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
        { name: 'p-primary', hexCode: '#5756A2', index: 5 },
        { name: 'p-secondary', hexCode: '#0FB0E5', index: 5 },
        { name: 'p-neutral', hexCode: '#6C6C6F', index: 5 },
        { name: 'studio-primary', hexCode: '#2B3C6F', index: 5 },
        { name: 'studio-secondary', hexCode: '#77CACF', index: 5 },
        { name: 'studio-accent', hexCode: '#E55539', index: 5 },
        { name: 'store-primary', hexCode: '#920C2F', index: 5 },
        { name: 'store-accent', hexCode: '#182282', index: 5 },
        { name: 'training', hexCode: '#F29100', index: 5 },
        { name: 'quantum', hexCode: '#E0807C', index: 5 },
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
