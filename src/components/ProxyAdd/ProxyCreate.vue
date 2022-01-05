<template>
  <t-card header="Add proxy">
    <form
      class="space-y-3 flex flex-col items-stretch"
      @submit.prevent="onSubmit"
    >
      <label>
        <span>Host</span>
        <t-input v-model="host" />
      </label>
      <label>
        <span>Port</span>
        <t-input v-model.number="port" />
      </label>
      <label>
        <span>Username</span>
        <t-input v-model="username" />
      </label>
      <label>
        <span>Password</span>
        <t-input v-model="password" />
      </label>

      <t-button type="submit">Submit</t-button>
    </form>
  </t-card>
</template>

<script>
import { createInnerProxy } from "../../api/inner-proxy";
import ProxySelect from "./ProxySelect.vue";
export default {
  components: { ProxySelect },
  data: () => ({
    username: "",
    password: "",
    host: "",
    port: "",
  }),
  methods: {
    clear() {
      this.host = "";
      this.port = "";
    },
    async onSubmit() {
      const toSend = {
        username: this.username,
        password: this.password,
        host: this.host,
        port: this.port,
      };
      try {
        const res = await createInnerProxy(toSend);
        this.$toast.success("Created!");
        this.clear();
      } catch (err) {
        this.$toast.error("Error " + err?.response?.data?.message);
      }
    },
  },
};
</script>

<style lang="postcss"></style>
