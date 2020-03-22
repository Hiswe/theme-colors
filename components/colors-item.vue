<script>
export default {
  name: `tc-colors-item`,
  props: {
    color: { type: Object, default: () => ({}) },
  },
}
</script>

<template>
  <li class="tc-colors-item" :style="`background-color: ${color.hexValue}`">
    <span class="tc-colors-item__text">{{ color.variationName }}</span>
    <span class="tc-colors-item__text">{{ color.hexValue }}</span>
  </li>
</template>

<style scoped>
.tc-colors-item {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tc-colors-item__text {
  --outline-color: rgba(255, 255, 255, 0.65);
  font-weight: bold;
  text-shadow: -1px -1px 0 var(--outline-color), 1px -1px 0 var(--outline-color),
    -1px 1px 0 var(--outline-color), 1px 1px 0 var(--outline-color);
  opacity: 0;
}
.tc-colors-item:hover .tc-colors-item__text {
  opacity: 1;
}
</style>
