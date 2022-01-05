<template>
  <div>
    <h2 class="text-lg">Proxy Accounts</h2>
    <t-table
      :data="items"
      :headers="['Username', 'Password', 'Last use', 'Proxy', 'Actions']"
    >
      <template v-slot:row="props">
        <tr
          :class="[
            props.trClass,
            props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
            props.row.isActive && 'bg-green-200',
          ]"
        >
          <td :class="props.tdClass">
            <span class="flex space-x-2 items-center">
              <span> {{ props.row.username }}</span>
            </span>
          </td>
          <td :class="props.tdClass">{{ props.row.password }}</td>
          <!-- <td :class="props.tdClass">{{ props.row.email }}</td>
          <td :class="props.tdClass">{{ props.row.emailPassword }}</td> -->
          <td :class="props.tdClass">{{ props.row.usedDate }}</td> 
          <td
            :class="props.tdClass"
            style="min-width: 180px"
            class="min-w-[200px]"
          >
            <proxy-select
              :value="props.row.proxy && props.row.proxy._id"
              @input="setProxy(props.row._id, $event)"
              :key="props.row.proxy && props.row.proxy._id"
            />
          </td>
          <td :class="props.tdClass">
            <div class="flex space-x-2">
              <t-button @click="setActive(props.row._id)">
                <v-icon name="check" class="fill-current text-green-white" />
              </t-button>
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
import {
  findInnerAccounts,
  deleteInnerAccount,
  makeInnerAccountActive,
  updateInnerAccount,
} from "../../api/inner-account";
import ProxySelect from "../ProxyAdd/ProxySelect.vue";
export default {
  components: { ProxySelect },
  data: () => ({ items: [] }),
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await findInnerAccounts();
      this.items = data;
    },
    async setProxy(id, proxyId) {
      try {
        await updateInnerAccount(id, { proxy: proxyId });
        this.$toast.success("Изменен");
        this.fetch();
      } catch (err) {
        this.$toast.error("Ошибка");
      }
    },
    async setActive(id) {
      try {
        await makeInnerAccountActive(id);
        this.$toast.success("Обновлен");
        this.fetch();
      } catch (err) {
        this.$toast.error("Ошибка");
      }
    },
    async removeItem(id) {
      try {
        const yes = confirm("Are sure want to delete?");
        if (!yes) return;
        await deleteInnerAccount(id);
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
