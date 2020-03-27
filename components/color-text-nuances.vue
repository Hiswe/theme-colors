<script>
export default {
  name: `tc-color-text-nuances`,
  props: {
    title: { type: String, default: `` },
    nuances: { type: Array, default: () => [] },
  },
  computed: {
    copyContent() {
      return this.nuances.join(`\n`)
    },
    htmlContent() {
      return this.nuances.join(`<br />`)
    },
  },
}
</script>

<template>
  <div class="tc-color-text-nuances">
    <header class="tc-color-text-nuances__header">
      <h5 v-text="title" class="tc-color-text-nuances__title" />
      <button class="tc-color-text-nuances__button-copy" v-clipboard:copy="copyContent">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
          />
        </svg>
      </button>
    </header>
    <p class="tc-color-text-nuances__list" v-html="htmlContent" />
  </div>
</template>

<style scoped>
.tc-color-text-nuances__header {
  display: flex;
  align-items: center;
}
.tc-color-text-nuances__title {
  margin: 0 1rem 0 0;
}
.tc-color-text-nuances__button-copy svg {
  height: 1rem;
  width: auto;
}
.tc-color-text-nuances__list {
  white-space: nowrap;
}
</style>
