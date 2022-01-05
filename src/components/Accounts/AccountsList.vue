<template>
  <div>
    <t-card header="Filter" class="mb-3">
      <t-input v-model="filter" @keypress.enter="fetch" />
    </t-card>
    <div class="flex flex-wrap">
      <div class="px-6 py-5 w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2" v-for="item in items" :key="item.username">
        <account-item :item="item" @remove="removeItem(item._id)" />
      </div>
    </div>
    <t-pagination :totalItems="totalItems" :per-page="perPage" v-model="page" />
  </div>
</template>

<script>
import { findAccounts, removeAccount } from "../../api/account";
import AccountItem from "./AccountItem.vue";
export default {
  components: { AccountItem },
  data() {
    return {
      page: (this.$route.query.page && parseInt(this.$route.query.page)) || 1,
      items: [],
      perPage: 10,
      totalItems: 100,
      filter: localStorage.getItem("filterStore"),
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let query = {};

      try {
        if (this.filter) {
          query = JSON.parse(this.filter);
        }
      } catch (err) {
        this.$toast.error("Invalid json");
      }
      const {
        data: { data, meta },
      } = await findAccounts({ page: this.page, query });
      this.items = data;
      this.perPage = meta.perPage;
      this.totalItems = meta.total;
    },
    async removeItem(id) {
      try {
        const yes = confirm("Sure?");
        if (!yes) return;
        await removeAccount(id);
        this.$toast.success("Удален!");
        this.fetch();
      } catch (err) {
        this.$toast.error("Ошибка!");
      }
    },
  },
  watch: {
    page() {
      this.$router.replace({ query: { page: this.page } });
      this.fetch();
    },
    filter() {
      localStorage.setItem("filterStore", this.filter);
    },
  },
};
</script>

<style lang="postcss"></style>
