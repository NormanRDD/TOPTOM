<template>
  <div class="header">
    <Home />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Home from "@/components/organisms/Home.vue";
const route = useRoute();
</script>
