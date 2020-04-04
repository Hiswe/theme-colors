<script>
import * as colorsHelpers from '~/helpers/colors.js'
import TcColorsItem from '~/components/colors-item.vue'

export default {
  name: `tc-colors-list`,
  components: { TcColorsItem },
  model: { prop: `color`, event: `update` },
  props: { color: { type: Object, default: () => ({}) } },
  computed: {
    isValid() {
      return true
    },
    variations() {
      return colorsHelpers.generateColorVariations(this.color)
    },
  },
  methods: {
    onUpdateColor(hexCode) {
      this.$emit(`update`, { ...this.color, hexCode })
    },
    onUpdateIndex(index) {
      this.$emit(`update`, { ...this.color, index })
    },
  },
}
</script>

<template>
  <dl class="tc-colors-list">
    <dt class="tc-colors-list__header">
      <p>{{ color.name }}</p>
      <button @click="$emit(`theme`, color)">
        <tc-icon name="visibility" />
      </button>
    </dt>
    <dd class="tc-colors-list__content">
      <ol class="tc-colors-list__list">
        <tc-colors-item
          v-for="(variation, variationIndex) in variations"
          :color="color"
          :baseColorHex="color.hexCode"
          :variation="variation"
          :variation-index="variationIndex"
          :key="variation.name"
          @update:color="onUpdateColor"
          @update:index="onUpdateIndex"
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
  background: #222;
  color: white;
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
.tc-colors-list__list::before,
.tc-colors-list__list::after {
  content: '';
  min-height: 2rem;
}
.tc-colors-list__list::before {
  background: white;
}
.tc-colors-list__list::after {
  background: black;
}
</style>
