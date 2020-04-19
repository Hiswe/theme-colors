<script>
import { mapGetters } from 'vuex'

import { THEMES, GET_THEME } from '~/store/themes.js'
import TsThemeColor from '~/components/theme-color.vue'

export default {
  name: `page-theme`,
  components: { TsThemeColor },
  computed: {
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
    <h2 class="page-theme__title">{{ theme.name }}</h2>
    <div class="page-theme__colors">
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
</style>
