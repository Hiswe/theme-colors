<script>
import { mapState } from 'vuex'

import { THEMES } from '~/store/themes.js'
import TcTheme from '~/components/theme.vue'
import TsColorDetail from '~/components/color-detail.vue'

export default {
  name: `page-index`,
  components: { TcTheme, TsColorDetail },
  data() {
    return {
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
    ...mapState(THEMES, {
      themes: (state) => state.list,
    }),
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
          <input
            id="grey-toggle"
            v-model="isGrey"
            type="checkbox"
            name="grey-toggle"
          />
          check grey values
        </label>
      </header>
      <div class="themes" :class="nuancesClasses">
        <tc-theme
          v-for="theme in themes"
          :key="theme.id"
          :theme="theme"
          :style="`flex: ${theme.colors.length};`"
          class="themes__item"
        />
      </div>
    </main>
    <ts-color-detail
      :open="colorDetailOpen"
      :color="colorDetail"
      @close="hideNuances"
    />
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
.themes {
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
