<script>
export default {
  name: `TcIcon`,
  props: {
    name: { type: String, required: true },
  },
}
</script>

<template>
  <i class="tc-icon material-icons" v-text="name" />
</template>

<style scoped>
.tc-icon {
  font-size: inherit;
}
</style>
