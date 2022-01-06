<template>
  <div>
    <pre class="text-sm">{{ logs }}</pre>
  </div>
</template>

<script>
import { getLogs } from "../api/logs";
export default {
  data: () => ({ logs: "", interval: 1000, isStoped: false }),
  mounted() {
    this.intervalFetch();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    this.isStoped = true;
  },
  methods: {
    async intervalFetch() {
      await this.fetch();
      if (this.isStoped) return;
      this.timer = setTimeout(this.intervalFetch, this.interval);
    },
    async fetch() {
      const { data } = await getLogs();
      let logs = data;
      //   const matches = logs.replace(/(info: START Parsing account) (.*)$/mg, (value) => )
      //   console.log(matches)
      logs = logs.split("\n").reverse().join("\n");
      this.logs = logs;
    },
  },
};
</script>

<style lang="postcss"></style>
