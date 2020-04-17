<script>
export default {
  name: `tc-button`,
  props: {
    to: { type: [Boolean, String], default: false },
    href: { type: [Boolean, String], default: false },
    color: { type: String, default: `primary` },
    outline: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  render(h) {
    // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBtn/VBtn.ts
    // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/mixins/routable.ts
    const tag =
      this.href !== false ? `a` : this.to !== false ? `nuxt-link` : `button`
    const isButton = tag === `button`
    const data = {
      attrs: {
        disabled: isButton ? this.disabled : void 0,
        href: this.href ? this.href : void 0,
        type: !isButton
          ? void 0
          : this.$attrs.type
          ? this.$attrs.type
          : `button`,
      },
      class: {
        'tc-button': true,
        [`tc-button--${this.color}`]: true,
        'tc-button--small': this.small,
        'tc-button--large': this.large,
        'tc-button--outline': this.outline,
        'tc-button--disabled': this.disabled,
      },
      props: {
        to: this.to ? this.to : void 0,
      },
      [this.to ? `nativeOn` : `on`]: {
        ...this.$listeners,
      },
    }
    return h(tag, data, this.$slots.default)
  },
}
</script>

<style scoped>
.tc-button {
  --tc-button-bg: var(--c-primary);
  --tc-button-color: white;
  --tc-button-border-color: var(--button-border-color, var(--c-primary));
  --tc-button-border: 2px solid
    var(--button-border-color, var(--tc-button-border-color));

  text-decoration: none;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 1em;
  font-size: 1rem;
  transition: color var(--transition-duration) ease-in-out,
    background-color var(--transition-duration) ease-in-out,
    border-color var(--transition-duration) ease-in-out;
  border-radius: var(--button-border-radius, var(--border-radius));
  border: var(--button-border, var(--tc-button-border));
  background: var(--button-bg, var(--tc-button-bg));
  color: var(--button-color, var(--tc-button-color));
  cursor: pointer;
  outline: none;
}
.tc-button--small {
  padding: 0 0.5rem;
}
.tc-button--large {
  padding: 0.75rem 1.5rem;
}
.tc-button--accent {
  --button-bg: var(--c-accent);
  --button-border-color: var(--c-accent);
  --button-color: white;
}
.tc-button--accent:hover {
  --button-bg: var(--c-accent);
  --button-border-color: var(--c-accent);
}
.tc-button--outline {
  background-color: var(--button-bg-outline, white);
  color: var(--button-bg, var(--tc-button-bg));
  --button-border-color: var(--button-bg, var(--tc-button-bg));
  --button-border: 2px solid var(--button-border-color);
}
.tc-button--outline:hover {
  background-color: var(--button-bg);
  color: var(--button-color);
}
.tc-button--disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
