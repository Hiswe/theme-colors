<script>
export default {
  name: `tc-greyscale-toggle`,
  props: {
    value: { type: Boolean, required: true },
  },
}
</script>

<template>
  <label class="tc-greyscale-toggle">
    <input
      id="grey-toggle"
      :value="value"
      type="checkbox"
      name="grey-toggle"
      @input="$emit(`input`, $event.target.checked)"
    />
    check grey values
  </label>
</template>

<style scoped></style>
