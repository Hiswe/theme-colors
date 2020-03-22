<script>
import TcColorsItem from '~/components/colors-item.vue'

export default {
  name: `tc-colors-list`,
  components: { TcColorsItem },
  props: { colorNuances: { type: Object, default: () => ({}) } },
  computed: {
    isValid() {
      return Array.isArray(this.colorNuances.colors)
    },
  },
}
</script>

<template>
  <dl class="tc-colors-list">
    <dt class="tc-colors-list__header">
      <p>{{ colorNuances.name }}</p>
      <p>{{ colorNuances.baseColor }}</p>
      <button @click="$emit(`theme`, colorNuances)">show hexColors</button>
    </dt>
    <dd class="tc-colors-list__content">
      <ol class="tc-colors-list__list">
        <tc-colors-item
          :baseColorHex="colorNuances.baseColor"
          :color="color"
          v-for="color in colorNuances.colors"
          :key="color.name"
        />
      </ol>
    </dd>
  </dl>
</template>

<style scoped>
.tc-colors-list {
  font-size: 0.75rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  align-items: stretch;
}
.tc-colors-list__header {
  flex: 0 0 auto;
}
.tc-colors-list__content {
  display: contents;
}
.tc-colors-list__list {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
