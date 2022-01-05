<template>
  <div>
    <t-rich-select
      :options="items"
      v-on="$listeners"
      v-bind="$attrs"
      valueAttribute="_id"
      textAttribute="host"
      :fetch-options="fetchData"
    >
      <template #option="{ option }">
        <div class="py-2 px-3">{{ option.raw.host }}:{{ option.raw.port }}</div>
      </template>
    </t-rich-select>
  </div>
</template>

<script>
import { findInnerProxys } from "../../api/inner-proxy";
export default {
  data: () => ({ items: [] }),
  mounted() {
    // this.fetch();
  },
  methods: {
    async fetchData() {
      const { data } = await findInnerProxys();
      return { results: data };
      // this.items = data;
    },
  },
};
</script>

<style lang="postcss"></style>
