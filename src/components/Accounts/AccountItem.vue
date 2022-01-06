<template>
  <div class="shadow-sm rounded-md">
    <div>
      <img :src="photoUrl" alt="avatar" />
    </div>
    <div class="flex space-x-1 mt-1">
      <img
        :src="url"
        alt=""
        v-for="(url, idx) in gallery"
        :key="idx"
        class="w-1/3 object-cover"
      />
    </div>
    <div class="p-3">
      <div class="text-lg font-bold">
        <a :href="profileLink" target="_blank">{{ item.name || "Unknown" }}</a>
      </div>
      <div class="mb-1 text-sm flex justify-between items-center flex-wrap">
        <a :href="profileLink" target="_blank">@{{ item.username }}</a>
        <div>
          <b>{{ item.followers }}</b> Followers
        </div>
      </div>
      <div class="flex justify-between">
        <div>Age: {{ item.age }}</div>
        <div>Gender: {{ item.gender === 1 ? "Male" : "Female" }}</div>
      </div>
      <div>
        <p class="text-sm">
          {{ item.description }}
        </p>
      </div>
      <div class="mt-2 flex flex-wrap items-center">
        <div class="text-sm font-bold mr-2">
          {{ item.location && item.location.name }}
        </div>
        <a
          href="#"
          @click.prevent="removeItem"
          class="flex items-center justify-center w-5 h-5 rounded-full bg-red-400 ml-auto"
        >
          <v-icon name="trash" class="fill-current text-white" width="10px" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getProxyImage } from "../../helpers/proxy-image";
export default {
  props: {
    item: Object,
  },
  computed: {
    profileLink() {
      return "https://instagram.com/" + this.item.username;
    },
    photoUrl() {
      return getProxyImage(this.item.photo);
    },
    gallery() {
      return this.item.gallery.map((path) => getProxyImage(path));
    },
  },
  methods: {
    removeItem() {
      this.$emit("remove");
    },
  },
};
</script>

<style lang="postcss"></style>
