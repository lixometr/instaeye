<template>
  <div>
    <pre class="text-sm">{{ logs }}</pre>
  </div>
</template>

<script>
import { getLogs } from "../api/logs";
export default {
  data: () => ({ logs: "" }),
  mounted() {
    this.fetch();
  },
  methods: {
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
