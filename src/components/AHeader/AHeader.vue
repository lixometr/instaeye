<template>
  <div class="mb-4">
    <div class="container">
      <div class="flex space-x-3 py-2 border-b border-gray-300">
        <router-link to="/" class="text-lg underline text-blue-500"
          >Home</router-link
        >
        <router-link to="/accounts" class="text-lg underline text-blue-500"
          >View Accounts</router-link
        >
        <router-link to="/proxy-add" class="text-lg underline text-blue-500"
          >Proxy Add</router-link
        >
        <router-link to="/proxy-list" class="text-lg underline text-blue-500"
          >Proxy List</router-link
        >
        <router-link to="/logs" class="text-lg underline text-blue-500"
          >Logs</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss"></style>
