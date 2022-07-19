<template>
  <div>
    <TheNavBar />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from './components/TheNavBar.vue';

</script>

<style lang="scss" scoped>
  .main {
    margin-block-start: 9rem;
    background-color: #F1F8FE;
    height: 100vh;
    padding-inline: 2rem;
    padding-block: 2rem;
  }
</style>