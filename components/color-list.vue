<script>
export default {
  name: `color-list`,
  props: { colorNuances: { type: Object, default: () => ({}) } },
  computed: {
    isValid() {
      return Array.isArray(this.colorNuances.colors)
    },
  },
}
</script>

<template>
  <dl>
    <dt>
      <p>{{ colorNuances.name }}</p>
      <p>{{ colorNuances.baseColor }}</p>
      <button @click="$emit(`theme`, colorNuances)">show hexColors</button>
    </dt>
    <dd>
      <ul v-for="color in colorNuances.colors" :key="color.name">
        <li :style="`background-color: ${color.hexValue}`">
          <span>{{ color.variationName }}</span>
          <span>{{ color.hexValue }}</span>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<style scoped>
dt {
  font-size: 0.75rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  height: 3.5rem;
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
</style>
