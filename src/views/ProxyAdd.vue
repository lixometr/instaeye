<template>
  <div>
    <div class="container">
      <h2 class="text-center text-2xl mb-4">Proxy settings</h2>
      <div class="grid grid-cols-2 gap-8">
        <proxy-account />
        <proxy-create />
      </div>
    </div>
  </div>
</template>

<script>
import ProxyAccount from "../components/ProxyAdd/ProxyAccount.vue";
import ProxyCreate from "../components/ProxyAdd/ProxyCreate.vue";
export default {
  components: { ProxyCreate, ProxyAccount },
};
</script>

<style lang="postcss"></style>
