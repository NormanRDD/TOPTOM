<template>
  <div class="favs">
    <div class="favs__container">
      <h2 class="favs__header">Избранное</h2>
      <div class="favs__imgs">
        <div v-for="(img, index) in favorites" :key="index">
          <ImgCard :image="img.img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import ImgCard from "@/components/molecules/ImgCard.vue";
import { onMounted } from "vue";

const stateImgs = useImgStore();
const { favorites } = storeToRefs(stateImgs);
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";

.favs {
  .imgCard img {
    width: unset;
    max-width: unset;
  }
  &__header {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    @media (max-width: 801px) {
      font-size: 35px;
    }
    font-size: rem(72);
    line-height: rem(84);
    text-align: center;
    color: #000000;
  }
  &__container {
    @media (max-width: 1201px) {
      margin: 0 20px;
    }
    margin: 0 rem(100);
  }
  &__imgs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: rem(20) 0;
    @media (max-width: 1201px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 701px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
