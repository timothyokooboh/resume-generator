<template>
  <div>
    <TheNavBar />
    <main class="main">
      <RouterView :key="$route.fullPath"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from './components/TheNavBar.vue';

</script>

<style lang="scss" scoped>
  .main {
    margin-block-start: 7rem;
    //background-color:#F1F8FE;
    min-height: 100vh;
    padding-inline: 2rem;
    padding-block-start: 1rem;
    padding-block-end: 5rem;
  }
</style>