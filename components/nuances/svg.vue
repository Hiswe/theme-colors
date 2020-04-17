<script>
export default {
  name: `tc-nuances-svg`,
  HEIGHT: 50,
  props: {
    color: { type: Object, default: () => ({}) },
    nuances: { type: Array, default: () => [] },
  },
  computed: {},
}
</script>

<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1000"
      viewBox="0 0 1000 1000"
      width="1000"
    >
      <template v-for="(nuance, nuanceIndex) in nuances">
        <rect
          :key="`bucket-${nuance.name}`"
          width="100"
          :height="$options.HEIGHT"
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
  </div>
</template>
