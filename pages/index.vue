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
      colors: {},
      loading: false,
      themeDetailOpen: false,
      themeDetail: {},
    }
  },
  async asyncData(nuxtContext) {
    const { $axios } = nuxtContext
    try {
      const { colors } = await $axios.$get(`/colors`)
      return { colors }
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    // colorsName() {
    //   return Object.keys(this.colors)
    // },
    colorsNameValue() {
      return Object.entries(this.colors).map(([key, value]) => ({
        name: key,
        hexCode: value,
      }))
    },
  },
  methods: {
    async updateColors() {
      console.log(`update-Colors`)
      this.loading = true
      try {
        const { colors } = await this.$axios.$post(`/colors`, this.colors)
        this.colors = colors
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
    <!-- <tc-colors-form v-model="colors" @submit="updateColors" /> -->
    <div class="nuances">
      <tc-colors-list
        class="nuances__item"
        v-for="color in colorsNameValue"
        :key="color.name"
        :color="color"
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
