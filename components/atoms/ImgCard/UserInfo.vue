<template>
  <div class="user" :class="{ isImgPage: isImgPage }">
    <div v-if="user" :class="{ isImgPage: isImgPage }" class="user__author">
      <img :src="user.profile_image.small" alt="" />
      <div :class="{ isImgPage: isImgPage }" class="user__info">
        <h2 class="user__name">{{ user.name }}</h2>
        <p class="user__login">@{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import { onMounted } from "vue";
import { ref } from "vue";
import Heart from "~/components/atoms/icons/Heart.vue";

let add = ref(false);
const props = defineProps({
  user: Object,
  isImgPage: Boolean,
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
.user {
  text-align: center;
  margin: 0 auto;
  &.isImgPage {
    margin: unset;
  }
  &__info {
    &.isImgPage {
      text-align: left;
      background-color: rgba(0, 0, 0, 0.367);
    }
    border-radius: 10px;
    padding: rem(5);
    max-width: rem(300);
    margin: 0 auto;
  }
  &__name,
  &__login {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: rem(15);
    line-height: rem(25);
    color: #fffffff6;
    margin: 0;
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
  &__author {
    cursor: pointer;
    text-align: center;
    &.isImgPage {
      flex-direction: row;
      img {
        margin: 0 rem(10) 0 0;
      }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    @include media("tablet-landscape-up") {
      margin-right: 20px;
    }
    img {
      margin-bottom: rem(13);
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
}
</style>
