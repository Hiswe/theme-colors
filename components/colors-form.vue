<script>
export default {
  name: `tc-colors-form`,
  model: {
    prop: `colors`,
    event: `update`,
  },
  props: {
    colors: { type: Object, default: () => ({}) },
  },
  computed: {
    colorsName() {
      return Object.keys(this.colors)
    },
  },
  methods: {
    submit() {
      this.$emit(`submit`)
    },
  },
}
</script>

<template>
  <form class="tc-colors-form" @submit.prevent="submit">
    <label class="tc-colors-form__input" v-for="colorName in colorsName" :key="colorName">
      <p class="tc-colors-form__label">{{ colorName }}</p>
      <input type="color" v-model="colors[colorName]" />
    </label>
    <button class="tc-colors-form__button" type="submit">update</button>
  </form>
</template>

<style scoped>
.tc-colors-form {
  background: #333;
  color: white;
  display: flex;
}
.tc-colors-form > * {
  flex: 1 1 auto;
  min-width: 0;
}
.tc-colors-form > * + * {
  border-left: 1px solid #666;
}
.tc-colors-form__inputs {
  display: flex;
}
.tc-colors-form__input {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0 0 1rem;
}
.tc-colors-form__label {
  margin: 0;
  padding: 0 0 0.5rem;
  font-size: 0.75rem;
}
.tc-colors-form__button {
  display: block;
  padding: 0.5rem;
  font-size: inherit;
  margin: 0.5rem;
}
</style>
