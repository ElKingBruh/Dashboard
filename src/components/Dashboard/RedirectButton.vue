<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps({
  to: {
    type: String,
    required: true
  }
});
</script>

<template>
  <router-link :to="to" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-[105%] transition duration-400 ease-in-out">
    <slot></slot>
  </router-link>
</template>