<template>
  <div class="home">
    <div class="container mx-auto px-4">
      <h2 class="mb-4 text-2xl text-center">Instaeye</h2>
      <div class="flex space-x-4">
        <div class="w-1/2">
          <control-queue />
          <add-queue />
        </div>
        <div class="w-1/2">
          <statistics-queue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddQueue from "../components/Dashboard/AddQueue.vue";
import ControlQueue from "../components/Dashboard/ControlQueue.vue";
import StatisticsQueue from "../components/Dashboard/StatisticsQueue.vue";
export default {
  name: "Home",
  components: { AddQueue, ControlQueue, StatisticsQueue },
};
</script>
