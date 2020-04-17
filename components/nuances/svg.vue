<script>
export default {
  name: `tc-nuances-svg`,
  props: {
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
      <rect
        v-for="(nuance, nuanceIndex) in nuances"
        :key="nuance.name"
        width="100"
        height="40"
        :y="nuanceIndex * 40"
        :fill="nuance.hex"
      />
    </svg>
  </div>
</template>
