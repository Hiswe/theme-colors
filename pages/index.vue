<script>
import ColorsList from '~/components/color-list.vue'
import ThemeDetail from '~/components/theme-detail.vue'

export default {
  components: { ColorsList, ThemeDetail },
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
    <form class="color-form" @submit.prevent="updateColors">
      <div class="color-form__inputs">
        <label class="color-form__input" v-for="colorName in colorsName" :key="colorName">
          <p>{{ colorName }}</p>
          <input type="color" v-model="colors[colorName]" />
        </label>
      </div>
      <button class="color-form__button" type="submit">update</button>
    </form>
    <div class="nuances">
      <colors-list
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
}
.nuances {
  display: flex;
  margin-top: 1rem;
}
.nuances__item {
  width: 10vw;
  flex: 1 1 auto;
  min-width: 0;
}
.color-form {
  padding: 1rem;
}
.color-form__inputs {
  display: flex;
}
.color-form__input {
  flex: 1 1 auto;
  min-width: 0;
}
.color-form__button {
  display: block;
  padding: 0.5rem;
  width: 100%;
  font-size: inherit;
  margin-top: 1rem;
}
</style>
