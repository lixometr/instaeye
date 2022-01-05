<template>
  <div class="shadow-md rounded-lg p-5">
    <h3 class="text-lg">Add To Queue</h3>
    <div class="flex items-center space-x-3 mb-2">
      <label>
        <t-checkbox v-model="getFollowers" />
        <span class="ml-2 text-sm">Get Followers</span>
      </label>
      <label>
        <t-checkbox v-model="getFollowings" />
        <span class="ml-2 text-sm">Get Followings</span>
      </label>
      <div>
        <label class="w-16 block">
          <span class="text-sm">Count</span>
          <t-input v-model.number="count" />
        </label>
      </div>
      <div>
        <label class="w-20 block">
          <span class="text-sm">Max Deep</span>
          <t-input v-model.number="maxDeep" />
        </label>
      </div>
    </div>
    <div class="flex space-x-3">
      <t-input v-model="username" /> <t-button @click="add">Add</t-button>
    </div>
  </div>
</template>

<script>
import { parseAddToQueue } from "../../api/parse";
export default {
  data: () => ({
    count: 30,
    username: "",
    getFollowers: true,
    getFollowings: false,
    maxDeep: -1,
  }),
  methods: {
    async add() {
      if (!this.username) return;
      const toSend = {
        count: this.count,
        username: this.username,
        followers: this.getFollowers,
        followings: this.getFollowings,
        maxDeep: this.maxDeep,
      };
      await parseAddToQueue(toSend);
      this.username = "";
    },
  },
};
</script>

<style lang="scss"></style>
