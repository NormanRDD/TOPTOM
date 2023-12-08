<template>
  <div class="mainPage">
    <ImgList :imgs="imgs" />
  </div>
</template>
<script lang="ts" setup>
import ImgList from "~/components/organisms/ImgList.vue";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import ImgCard from "@/components/molecules/ImgCard.vue";
import { onMounted } from "vue";

const stateImgs = useImgStore();
const { imgs } = storeToRefs(stateImgs);
const { getRandomAction } = stateImgs;

onMounted(() => {
  getRandomAction();
});
</script>
