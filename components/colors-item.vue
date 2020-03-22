<script>
export default {
  name: `tc-colors-item`,
  props: {
    baseColorHex: { type: String, default: `` },
    color: { type: Object, default: () => ({}) },
  },
  computed: {
    isBaseColor() {
      return this.color.hexValue === this.baseColorHex
    },
    componentClasses() {
      return { 'tc-colors-item--base': this.isBaseColor }
    },
  },
}
</script>

<template>
  <li
    class="tc-colors-item"
    :class="componentClasses"
    :style="`background-color: ${color.hexValue}`"
  >
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
.tc-colors-item--base {
  box-shadow: inset 0 0 0 5px #fff;
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
