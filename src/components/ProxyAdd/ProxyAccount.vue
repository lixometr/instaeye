<template>
  <t-card header="Add instagram account">
    <form
      class="space-y-3 flex flex-col items-stretch"
      @submit.prevent="onSubmit"
    >
      <label>
        <span>Username</span>
        <t-input v-model="username" />
      </label>
      <label>
        <span>Password</span>
        <t-input v-model="password" />
      </label>
      <label>
        <span>Email</span>
        <t-input v-model="email" />
      </label>
      <label>
        <span>Email Password</span>
        <t-input v-model="emailPassword" />
      </label>
      <label>
        <span>Proxy</span>
        <proxy-select v-model="proxy" />
      </label>
      <t-button type="submit">Submit</t-button>
    </form>
  </t-card>
</template>

<script>
import { createInnerAccount } from "../../api/inner-account";
import ProxySelect from "./ProxySelect.vue";
export default {
  components: { ProxySelect },
  data: () => ({
    username: "",
    password: "",
    email: "",
    emailPassword: "",
    proxy: undefined,
  }),
  methods: {
    clear() {
      this.username = "";
      this.password = "";
      this.email = "";
      this.emailPassword = "";
    },
    async onSubmit() {
      const toSend = {
        username: this.username,
        password: this.password,
        email: this.email,
        emailPassword: this.emailPassword,
        proxy: this.proxy,
      };
      try {
        const res = await createInnerAccount(toSend);
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
