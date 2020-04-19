<script>
import TsThemeColor from '~/components/theme-color.vue'

export default {
  name: `tc-theme`,
  components: { TsThemeColor },
  props: {
    theme: { type: Object, default: () => ({}) },
  },
}
</script>

<template>
  <dl class="tc-theme">
    <dt class="tc-theme__name">{{ theme.name }}</dt>
    <dd class="tc-theme__colors">
      <ts-theme-color
        v-for="color in theme.colors"
        :key="color.id"
        :theme-id="theme.id"
        :color="color"
      />
    </dd>
  </dl>
</template>

<style scoped>
.tc-theme {
  margin: 0;
  display: flex;
  flex-direction: column;
}
.tc-theme + .tc-theme {
  border-left: 2px solid black;
}
.tc-theme__name {
  background: var(--c-primary);
  color: white;
  flex: 0 0 auto;
  padding: 0.5rem 0;
  font-size: 1.5rem;
}
.tc-theme__colors {
  display: flex;
  margin: 0;
  flex: 1;
}
</style>
