<script>
export default {
  name: `color-list`,
  props: {
    colorNuances: { type: Object, default: () => ({}) },
    open: false,
  },
  computed: {
    isValid() {
      return Array.isArray(this.colorNuances.colors)
    },
    colorHexList() {
      if (!this.isValid) return ``
      return this.colorNuances.colors.map((c) => c.hexValue).join(`<br />`)
    },
  },
}
</script>

<template>
  <aside v-if="open" :style="{ background: colorNuances.baseColor }">
    <dl>
      <dt>
        <p>{{ colorNuances.name }}</p>
        <p>{{ colorNuances.baseColor }}</p>
        <button @click="$emit(`close`)">close</button>
      </dt>
      <dd>
        <p v-html="colorHexList" />
      </dd>
    </dl>
  </aside>
</template>

<style scoped>
aside {
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  width: 33%;
  color: white;
}
</style>
