<script>
export default {
  name: `tc-main`,
}
</script>

<template>
  <main class="tc-main">
    <header class="tc-main__header">
      <h1 class="tc-main__title">
        <nuxt-link class="tc-main__home-link" to="/">Theme Colors</nuxt-link>
      </h1>
      <div class="tc-main__header-content">
        <slot name="header" />
      </div>
    </header>
    <slot />
  </main>
</template>

<style scoped>
.tc-main {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.tc-main__header {
  background: #333;
  text-align: right;
  padding: 1rem;
  color: white;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tc-main__title {
  margin: 0;
}
.tc-main__home-link {
  text-decoration: none;
  color: white;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 1.5rem;
}
</style>
