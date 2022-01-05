<template>
  <div>
    <h2 class="text-lg">Proxies</h2>

    <t-table
      :data="items"
      :headers="['Host', 'Port', 'Username', 'Password', 'Actions']"
    >
      <template v-slot:row="props">
        <tr
          :class="[
            props.trClass,
            props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
            props.row.isActive && 'bg-green-200',
          ]"
        >
          <td :class="props.tdClass">{{ props.row.host }}</td>
          <td :class="props.tdClass">{{ props.row.port }}</td>
          <td :class="props.tdClass">{{ props.row.username }}</td>
          <td :class="props.tdClass">{{ props.row.password }}</td>
          <td :class="props.tdClass">
            <div class="flex space-x-2">
              <t-button @click="removeItem(props.row._id)"
                ><v-icon name="trash" class="fill-current text-white"
              /></t-button>
            </div>
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script>
import { findInnerProxys, deleteInnerProxy } from "../../api/inner-proxy";
export default {
  data: () => ({ items: [] }),
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await findInnerProxys();
      this.items = data;
    },

    async removeItem(id) {
      try {
        const yes = confirm("Are sure want to delete?");
        if (!yes) return;
        await deleteInnerProxy(id);
        this.$toast.success("Удален");
        this.fetch();
      } catch (err) {
        this.$toast.error("Ошибка ");
      }
    },
  },
};
</script>

<style lang="postcss"></style>
