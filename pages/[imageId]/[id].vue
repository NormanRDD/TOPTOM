<template>
  <div>
    <ImgPage :img="img" />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import { onMounted } from "vue";
import { ref } from "vue";
import ImgPage from "@/components/organisms/ImgPage.vue";

const route = useRoute();
const stateImgs = useImgStore();
const { img } = storeToRefs(stateImgs);
const { getByIdAction } = stateImgs;
onMounted(() => {
  getByIdAction(route.params.id);
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";

.currentImg {
  &__container {
    padding: rem(140) rem(220);
    height: 150vh;
    @media (max-width: rem(1200)) {
      // margin: 0 20px;
    }
    padding-top: rem(50);
  }
  &__info {
    text-align: left;
  }
  &__name,
  &__login {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: rem(15);
    line-height: rem(35);
    color: #f2f2f2;
  }
  &__heart.isActive {
    background-color: red;
    svg {
      fill: white;
      path {
      }
    }
  }
  &__heart {
    text-align: center;
    align-items: center;
    width: rem(49.07);
    height: rem(49.07);
    background: #ffffff;
    box-shadow: 0 0 rem(4) rgba(0, 0, 0, 0.25);
    border-radius: rem(8);
    padding-top: rem(14);
  }
  &__download {
    margin-left: rem(10);
    p {
      position: relative;
      bottom: rem(10);
    }
    img {
      top: rem(11);
      left: rem(10);
      position: relative;
    }
    font-family: sans-serif;
    width: rem(206.25);
    height: rem(49.62);
    background: #fff200;
    border: 1px solid #fff200;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  &__name {
    font-size: 25px;
  }
  &__author {
    img {
      margin: 5px 10px 40px 0;
      width: 55px;
      height: 55px;
      border: 1px solid #ffffff;
      border-radius: 8px;
    }
  }
  &__mainImage {
    img {
      width: 100%;
      max-width: 1452px;
      height: 744px;
      object-fit: contain;
      @media (max-width: 800px) {
        object-fit: contain;
      }
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
      display: block;
    }
  }
  &__author {
    display: flex;
  }
  &__btns {
    display: flex;
  }
}
</style>
