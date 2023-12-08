<template>
  <div v-if="img?.urls?.full" class="currentImg">
    <div
      :style="{ 'background-image': 'url(' + img.urls.full + ')' }"
      class="background"
    >
      <div class="currentImg__container">
        <ImgPageHeader :user="img.user" />
        <div v-if="img?.urls" class="currentImg__mainImage">
          <img :src="img.urls?.full" alt="" />
        </div>
        <Tags :tags="img.tags_preview" />
      </div>
    </div>
    <div class="currentImg__similarPhotos">
      <ImgList :imgs="imgs">
        <template #title>
          <h2>Похожие фотографий</h2>
        </template>
      </ImgList>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import ImgPageHeader from "@/components/molecules/ImgPage/Header.vue";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import Tags from "@/components/molecules/ImgPage/Tags.vue";
import ImgList from "~/components/organisms/ImgList.vue";

const stateImgs = useImgStore();
const { imgs } = storeToRefs(stateImgs);

const { sendRequest } = stateImgs;

let add = ref(false);
const { img } = defineProps(["img"]);
onMounted(() => {
  // sendRequest(similarPhotos);
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.background {
  width: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  @include media("tablet-landscape-up") {
    background-image: unset !important;
  }
}
.currentImg {
  h2 {
    margin: rem(42) 0 rem(20);
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: rem(18);

    @include media("desktop-up") {
      margin: rem(80) 0 rem(20);
      font-size: rem(36);
    }
  }
  &__container {
    backdrop-filter: blur(10px);
    position: relative;
    padding: rem(140) rem(220) rem(63) rem(220);
    padding-top: rem(50);
    @include media("tablet-landscape-up") {
      padding: rem(32) rem(20);
    }
    @media (max-width: 1200px) {
      // margin: 0 20px;
    }
  }
  &__mainImage {
    img {
      border-radius: 8px;
      max-width: rem(1482);
      height: rem(744);
      @include media("tablet-landscape-up") {
        height: unset;
      }
      object-fit: contain;
      width: 100%;
      @media (max-width: 800px) {
        // object-fit: contain;
      }
    }
  }
}
</style>
