<template>
  <div id="app">
    <a-header />
    <router-view />
  </div>
</template>

<script>
import AHeader from "./components/AHeader/AHeader.vue";
export default {
  components: { AHeader },
};
</script>

<style></style>
