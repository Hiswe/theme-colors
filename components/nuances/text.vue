<script>
export default {
  name: `tc-nuances-text`,
  props: {
    title: { type: String, default: `` },
    keyName: { type: String, required: true },
    nuances: { type: Array, default: () => [] },
  },
  computed: {
    _nuances() {
      return this.nuances.map((n) => n[this.keyName])
    },
    copyContent() {
      return this._nuances.join(`\n`)
    },
    htmlContent() {
      return this._nuances.join(`<br />`)
    },
  },
}
</script>

<template>
  <div class="tc-nuances-text">
    <header class="tc-nuances-text__header">
      <h5 class="tc-nuances-text__title" v-text="title" />
      <tc-button
        v-clipboard:copy="copyContent"
        class="tc-nuances-text__button-copy"
        small
      >
        <tc-icon name="file_copy" />
      </tc-button>
    </header>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="tc-nuances-text__list" v-html="htmlContent" />
  </div>
</template>

<style scoped>
.tc-nuances-text__header {
  display: flex;
  align-items: center;
}
.tc-nuances-text__title {
  margin: 0 1rem 0 0;
}
.tc-nuances-text__button-copy svg {
  height: 1rem;
  width: auto;
}
.tc-nuances-text__list {
  white-space: nowrap;
  background: var(--c-primary-lightest);
  margin: 0.5rem;
  padding: 1rem;
}
</style>
