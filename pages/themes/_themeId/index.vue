<script>
import { mapGetters } from 'vuex'

import { THEMES, GET_THEME } from '~/store/themes.js'
import TsThemeColor from '~/components/theme-color.vue'
import TcGreyscaleToggle from '~/components/greyscale-toggle.vue'

export default {
  name: `page-theme`,
  components: { TsThemeColor, TcGreyscaleToggle },
  data() {
    return {
      isGrey: false,
    }
  },
  computed: {
    colorsClasses() {
      return { 'page-theme__colors--grey': this.isGrey }
    },
    theme() {
      return this.getTheme(this.$route.params)
    },
    ...mapGetters(THEMES, {
      getTheme: GET_THEME,
    }),
  },
}
</script>

<template>
  <tc-main class="page-theme">
    <template #header>
      <tc-greyscale-toggle v-model="isGrey" />
    </template>
    <h2 class="page-theme__title">{{ theme.name }}</h2>
    <div class="page-theme__colors" :class="colorsClasses">
      <ts-theme-color
        v-for="color in theme.colors"
        :key="color.id"
        :theme-id="theme.id"
        :color="color"
      />
    </div>
  </tc-main>
</template>

<style scoped>
.page-theme__title {
  margin: 0;
  padding: 1rem;
  color: white;
  text-align: left;
}
.page-theme__colors {
  display: flex;
  flex: 1;
}
.page-theme__colors--grey {
  filter: grayscale();
}
</style>
