<template>
  <div class="homeHeader">
    <Header />
    <Search v-if="route.path === '/'" />
  </div>
</template>
<script lang="ts" setup>
import Header from "~/components/molecules/Header.vue";
import Search from "~/components/molecules/home/Search.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
