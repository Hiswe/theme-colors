<script>
export default {
  name: `tc-nuances-svg`,
  HEIGHT: 50,
  props: {
    color: { type: Object, default: () => ({}) },
    nuances: { type: Array, default: () => [] },
  },
  computed: {
    totalHeight() {
      return this.$options.HEIGHT * 10
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="totalHeight"
    :width="totalHeight"
    :viewBox="`0 0 ${totalHeight} ${totalHeight}`"
    class="tc-nuances-svg"
  >
    <template v-for="(nuance, nuanceIndex) in nuances">
      <rect
        :key="`bucket-${nuance.name}`"
        width="100"
        :height="$options.HEIGHT"
        x="0"
        :y="nuanceIndex * $options.HEIGHT"
        :fill="nuance.hex"
      />
      <g :key="`text-${nuance.name}`" style="transform: translate(110px, 0);">
        <text
          :style="{
            'font-size': `12px`,
            'font-weight': nuanceIndex === color.index ? `bold` : void 0,
          }"
          :y="nuanceIndex * $options.HEIGHT + 15"
          v-text="nuance.hex"
        />
        <text
          :style="{
            'font-size': `12px`,
            'font-weight': nuanceIndex === color.index ? `bold` : void 0,
          }"
          :y="nuanceIndex * $options.HEIGHT + 30"
          v-text="nuance.rgb"
        />
        <text
          :style="{
            'font-size': `12px`,
            'font-weight': nuanceIndex === color.index ? `bold` : void 0,
          }"
          :y="nuanceIndex * $options.HEIGHT + 45"
          v-text="nuance.cmyk"
        />
      </g>
    </template>
  </svg>
</template>
