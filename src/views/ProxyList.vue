<template>
  <div class="">
    <div class="container">
      <div class="">
        <proxy-accounts-list class="mb-10" />
        <proxy-list />
      </div>
    </div>
  </div>
</template>

<script>
import ProxyAccountsList from "../components/ProxyList/ProxyAccountsList.vue";
import ProxyList from "../components/ProxyList/ProxyList.vue";
export default {
  components: { ProxyAccountsList, ProxyList },
};
</script>

<style lang="postcss"></style>
