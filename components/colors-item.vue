<script>
export default {
  name: `tc-colors-item`,
  props: {
    color: { type: Object, default: () => ({}) },
    variation: { type: Object, default: () => ({}) },
    variationIndex: { type: Number, default: 0 },
  },
  data() {
    return {
      isEditMode: false,
    }
  },
  computed: {
    isBaseColor() {
      return this.variationIndex === this.color.index
    },
    componentClasses() {
      return {
        'tc-colors-item--base': this.isBaseColor,
        'tc-colors-item--edition': this.isEditMode,
      }
    },
  },
  methods: {
    toggleEdit() {
      this.isEditMode = !this.isEditMode
      if (this.isEditMode) return this.$refs.colorInput.focus()
      this.$emit(`update:color`, this.$refs.colorInput.value)
    },
    changeIndex() {
      this.$emit(`update:index`, this.variationIndex)
    },
    changeColor($event) {},
  },
}
</script>

<template>
  <li
    class="tc-colors-item"
    :class="componentClasses"
    :style="`background-color: ${variation.hexValue}`"
  >
    <span class="tc-colors-item__text">{{ variation.variationName }}</span>
    <span class="tc-colors-item__text">{{ variation.hexValue }}</span>
    <template v-if="isBaseColor">
      <button class="tc-colors-item__edit-button" @click="toggleEdit">
        <tc-icon :name="isEditMode ? `done` : `create`" />
      </button>
      <input
        ref="colorInput"
        class="tc-colors-item__color-input"
        type="color"
        :value="variation.hexValue"
        @input="changeColor"
      />
    </template>
    <button v-else class="tc-colors-item__index-button" @click="changeIndex">
      set index
    </button>
  </li>
</template>

<style scoped>
.tc-colors-item {
  --current-color-border: 3px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.tc-colors-item--base {
  box-shadow: inset 0 0 0 var(--current-color-border) #fff;
}
.tc-colors-item__text {
  --outline-color: rgba(255, 255, 255, 0.65);
  font-weight: bold;
  text-shadow: -1px -1px 0 var(--outline-color), 1px -1px 0 var(--outline-color),
    -1px 1px 0 var(--outline-color), 1px 1px 0 var(--outline-color);
}
.tc-colors-item__edit-button {
  position: absolute;
  top: var(--current-color-border);
  right: var(--current-color-border);
  background: none;
  border: 0;
  font-size: 1rem;
}
.tc-colors-item__index-button {
  position: absolute;
  top: var(--current-color-border);
  right: var(--current-color-border);
}
.tc-colors-item__text,
.tc-colors-item__edit-button,
.tc-colors-item__color-input,
.tc-colors-item__index-button {
  opacity: 0;
  pointer-events: none;
}
.tc-colors-item__color-input {
  font-size: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.tc-colors-item:not(.tc-colors-item--edition):hover .tc-colors-item__text,
.tc-colors-item:hover .tc-colors-item__edit-button,
.tc-colors-item--edition .tc-colors-item__edit-button,
.tc-colors-item:hover .tc-colors-item__index-button,
.tc-colors-item--edition .tc-colors-item__color-input {
  opacity: 1;
  pointer-events: auto;
}
</style>
