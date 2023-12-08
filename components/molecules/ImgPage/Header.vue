<template>
  <div class="header">
    <UserInfo :isImgPage="true" :user="img.user" />
    <div class="header__btns">
      <div
        style="cursor: pointer"
        @click="addSwitch"
        class="header__heart"
        :class="{ isActive: add }"
      >
        <Heart />
      </div>
      <div class="header__download">
        <img src="@/assets/icons/download.svg" alt="" />
        <p>Download</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import UserInfo from "@/components/atoms/ImgCard/UserInfo.vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import { onMounted } from "vue";
import { ref } from "vue";
import Heart from "~/components/atoms/icons/Heart.vue";

let add = ref(false);
const props = defineProps({
  img: Object,
});

const route = useRoute();
const stateImgs = useImgStore();
const { img } = storeToRefs(stateImgs);
const { removeFromFavs, addToFavs } = stateImgs;
function addSwitch() {
  if (add.value === true) {
    add.value = false;
    removeFromFavs(img.value);
  } else {
    add.value = true;
    addToFavs(img.value);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__info {
    text-align: left;
    background-color: rgba(0, 0, 0, 0.367);
    border-radius: 10px;
    padding: rem(5);
  }
  &__name,
  &__login {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: rem(15);
    line-height: rem(25);
    color: #fffffff6;
    @include media("tablet-landscape-up") {
      font-size: rem(10);
      line-height: rem(20);
    }
  }
  &__name {
    font-size: rem(25);
    @include media("tablet-landscape-up") {
      font-size: rem(15);
      line-height: rem(20);
    }
  }
  &__heart {
    svg {
      path {
        stroke: grey;
      }
    }
  }
  &__heart.isActive {
    background-color: red;
    svg {
      fill: red;
      stroke: red;
      path {
        fill: grey;
      }
    }
  }
  &__heart {
    text-align: center;
    align-items: center;
    width: rem(49);
    height: rem(49);
    background: #ffffff;
    box-shadow: 0 0 rem(4) rgba(0, 0, 0, 0.25);
    border-radius: rem(8);
    padding-top: rem(14);
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      background: red;
      box-shadow: 0 0 rem(100) rgb(230, 28, 28);
    }
    svg {
      width: rem(25);
      height: rem(23);
    }
  }
  &__download {
    cursor: pointer;
    margin-left: rem(10);
    display: flex;
    padding: 0 rem(8);
    align-items: center;
    justify-content: center;
    color: var(--Gray-6, #f2f2f2);
    font-family: sans-serif;
    font-size: rem(20);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: rem(50);
    border-radius: 8px;
    border: 1px solid var(--Green-1, #219653);
    background: var(--Green-1, #219653);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    @include media("desktop-up") {
      padding: rem(8) rem(41) rem(8) rem(18);
    }
    p {
      transition: 0.5s;
      display: none;
      @include media("desktop-up") {
        display: block;
      }
    }
    &:hover {
      img {
        transition: 0.5s;
        opacity: 0.5;
      }
      p {
        transition: 0.5s;
        color: rgba(255, 255, 255, 0.557);
      }
      transition: 0.5s;
      background: var(--Green-1, #236d43da);
      border: 1px solid var(--Green-1, #21965400);
    }
    img {
      transition: 0.5s;
      @include media("desktop-up") {
        margin-right: rem(12);
        display: block;
      }
      width: rem(34);
      height: rem(34);
    }
  }
  &__author {
    margin-bottom: rem(10);
    display: flex;
    align-items: center;
    @include media("tablet-landscape-up") {
      margin-right: 20px;
    }
    img {
      margin: 0 rem(10) 0 0;
      width: rem(55);
      height: rem(55);
      border: rem(1) solid #ffffff43;
      border-radius: rem(8);
      @include media("tablet-landscape-up") {
        width: rem(48);
        height: rem(48);
      }
    }
  }

  &__btns {
    display: flex;
  }
}
</style>
