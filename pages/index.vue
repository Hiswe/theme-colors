<script>
import TcColorsList from '~/components/color-list.vue'
import TcColorsForm from '~/components/colors-form.vue'
import ThemeDetail from '~/components/theme-detail.vue'

export default {
  components: { TcColorsForm, TcColorsList, ThemeDetail },
  data() {
    return {
      colors: {},
      themeColors: {},
      loading: false,
      themeDetailOpen: false,
      themeDetail: {},
    }
  },
  async asyncData(nuxtContext) {
    const { $axios } = nuxtContext
    try {
      const { colors, themeColors } = await $axios.$get(`/colors`)
      console.log({ colors, themeColors })
      return { colors, themeColors }
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    colorsName() {
      return Object.keys(this.colors)
    },
  },
  methods: {
    async updateColors() {
      console.log(`update-Colors`)
      this.loading = true
      try {
        const { colors, themeColors } = await this.$axios.$post(
          `/colors`,
          this.colors,
        )
        this.colors = colors
        this.themeColors = themeColors
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
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
    <tc-colors-form v-model="colors" @submit="updateColors" />
    <div class="nuances">
      <tc-colors-list
        class="nuances__item"
        v-for="theme in themeColors"
        :key="theme.name"
        :color-nuances="theme"
        @theme="showNuances"
      />
    </div>
    <theme-detail @close="hideNuances" :open="themeDetailOpen" :color-nuances="themeDetail" />
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
.nuances__item {
  /* width: 10vw; */
  /* flex: 1 1 auto; */
  /* min-width: 0; */
}
</style>
