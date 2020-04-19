<script>
import { mapState } from 'vuex'

import { THEMES } from '~/store/themes.js'
import TcTheme from '~/components/theme.vue'

export default {
  name: `page-index`,
  components: { TcTheme },
  data() {
    return {
      isGrey: false,
    }
  },
  computed: {
    nuancesClasses() {
      return { 'nuances--grey': this.isGrey }
    },
    ...mapState(THEMES, {
      themes: (state) => state.list,
    }),
  },
}
</script>

<template>
  <tc-main :class="mainClasses">
    <template #header>
      <label>
        <input
          id="grey-toggle"
          v-model="isGrey"
          type="checkbox"
          name="grey-toggle"
        />
        check grey values
      </label>
    </template>
    <div class="themes" :class="nuancesClasses">
      <tc-theme
        v-for="theme in themes"
        :key="theme.id"
        :theme="theme"
        :style="`flex: ${theme.colors.length};`"
        class="themes__item"
      />
    </div>
  </tc-main>
</template>

<style scoped>
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
