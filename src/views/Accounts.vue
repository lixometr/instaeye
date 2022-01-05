<template>
  <div class="pb-10 pt-5">
    <div class="flex">
      <h2 class="text-2xl text-center font-bold mb-3 mx-auto">Accounts:</h2>
    </div>
    <accounts-list />
  </div>
</template>

<script>
import AccountsList from "../components/Accounts/AccountsList.vue";
export default {
  components: { AccountsList },
};
</script>

<style lang="postcss"></style>
