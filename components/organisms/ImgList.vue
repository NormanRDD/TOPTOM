<template>
  <div class="imgList">
    <slot name="title" />
    <div class="imgList__container">
      <div class="imgList__gridBtns">
        <grid-column />
        <grid-row />
      </div>
      <div v-for="(img, idx) in imgs" :key="idx" class="imgList__card">
        <ImgCard
          @click="selectedImgId = img.id"
          :img="img"
          :selectedImgId="selectedImgId"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ImgCard from "@/components/molecules/ImgCard.vue";
import GridColumn from "@/components/atoms/icons/GridColumn.vue";
import GridRow from "@/components/atoms/icons/GridRow.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import GridColumnVue from "../atoms/icons/GridColumn.vue";

let selectedImgId = ref("");

const props = defineProps({
  imgs: Array,
});
const stateImgs = useImgStore();

const { favorites } = storeToRefs(stateImgs);
const { addToFavs } = stateImgs;

onMounted(() => {
  const localFavorites = JSON.parse(localStorage.getItem("favorites"));
  if (localFavorites) {
    localFavorites.forEach((e) => {
      addToFavs(e);
    });
  }
});
</script>
<style lang="scss">
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.imgCard {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.imgList {
  margin: rem(48) rem(20);
  @include media("desktop-up") {
    margin: rem(48) rem(200);
  }
  &__gridBtns {
    background-color: red;
    .column{
      display: none;
    }
  }
  &__card {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: rem(10);
    break-inside: avoid;
  }
  &__container {
    column-count: 2;
    column-gap: rem(27);
    @include media("desktop-up") {
      column-count: 3;
    }
    @include media("phone-only") {
      column-count: 1;
    }
  }
}
</style>
