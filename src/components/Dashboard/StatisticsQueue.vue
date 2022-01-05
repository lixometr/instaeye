<template>
  <div class="shadow-md rounded-lg p-5">
    <h2 class="text-lg mb-1">Queue Statistics:</h2>
    <div class="grid grid-cols-2 gap-1">
      <div class="text-green-500">
        Completed: <b>{{ stats.completed }}</b>
      </div>
      <div class="text-blue-400">
        Paused: <b>{{ stats.paused }}</b>
      </div>
      <div class="text-yellow-500">
        Waiting: <b>{{ stats.waiting }}</b>
      </div>
      <div class="text-red-500">
        Failed: <b>{{ stats.failed }}</b>
      </div>
    </div>
  </div>
</template>

<script>
import { parseGetCount } from "../../api/parse";
export default {
  data: () => ({ stats: {} }),
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await parseGetCount();
      this.stats = data;
    },
  },
};
</script>

<style lang="postcss"></style>
