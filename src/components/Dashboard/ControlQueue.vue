<template>
  <div class="shadow-md rounded-lg p-5 mb-5">
    <h3 class="text-lg mb-3">Control</h3>
    <div>
      Status:
      <span :class="status === 'active' ? 'text-green-400' : 'text-yellow-400'">
        {{ status }}
      </span>
    </div>
    <div class="flex space-x-3">
      <div>
        <t-button @click="sendContinue">Continue</t-button>
      </div>
      <div>
        <t-button @click="sendPause">Pause</t-button>
      </div>
      <div>
        <t-button @click="sendClear">Clear</t-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  parsePause,
  parseContinue,
  parseClear,
  parseGetStatus,
} from "../../api/parse";
export default {
  data: () => ({ status: "" }),
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await parseGetStatus();
      this.status = data;
    },
    async sendPause() {
      try {
        await parsePause();
        this.$toast.success("Paused");
      } catch (err) {
        this.$toast.error("Error");
      }
    },
    async sendClear() {
      const yes = confirm("Are u sure? It will clear all queue!");
      if (!yes) return;
      try {
        await parseClear();
        this.$toast.success("Cleared");
      } catch (err) {
        this.$toast.error("Error");
      }
    },
    async sendContinue() {
      try {
        await parseContinue();
        this.$toast.success("Started");
      } catch (err) {
        this.$toast.error("Error");
      }
    },
  },
};
</script>

<style lang="postcss"></style>
