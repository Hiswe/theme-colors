<script>
export default {
  name: `tc-colors-list`,
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
      <ul class="tc-colors-list__list" v-for="color in colorNuances.colors" :key="color.name">
        <li class="tc-colors-list__item" :style="`background-color: ${color.hexValue}`">
          <span>{{ color.variationName }}</span>
          <span>{{ color.hexValue }}</span>
        </li>
      </ul>
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
.tc-colors-list__item {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
span {
  --outline-color: rgba(255, 255, 255, 0.65);
  font-weight: bold;
  text-shadow: -1px -1px 0 var(--outline-color), 1px -1px 0 var(--outline-color),
    -1px 1px 0 var(--outline-color), 1px 1px 0 var(--outline-color);
  opacity: 0;
}
li:hover span {
  opacity: 1;
}
dd {
  flex: 1 1 auto;
}
</style>
