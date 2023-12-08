<template>
  <div class="header">
    <div class="header__nav">
      <div class="header__left">
        <router-link :to="'/'">
          <img src="@/assets/icons/unsplash.svg" alt="" />
          <p class="header__title">ImageStock</p>
        </router-link>
      </div>
      <div class="header__right">
        <div v-if="route.path !== '/'" class="header__searchIcon">
          <router-link :to="'/'">
            <img src="@/assets/icons/blackSearch.svg" alt="" />
            <p class="header__caption">Поиск</p>
          </router-link>
        </div>
        <router-link :to="'/favorites'">
          <FavsIcon />
          <p class="header__caption">Избранное</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import FavsIcon from "~/components/atoms/icons/FavsIcon.vue";

const route = useRoute();
</script>

<style scoped lang="scss">
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.header {
  p {
    @include media("tablet-landscape-up") {
      display: none;
    }
  }
  &__title {
    font-size: rem(24);
    font-family: sans-serif;
    color: white;
  }
  &__nav {
    @include media("tablet-landscape-up") {
      padding: rem(25) rem(22);
    }
    padding: 0 rem(100);
    padding-top: rem(37);
    height: rem(128);
    background: #000000;
    display: flex;
    justify-content: space-between;
  }
  &__left {
    a {
      display: flex;
    }
    img {
      margin-right: rem(10);
      // width: 100%;
      width: rem(28);
    }
  }
  &__searchIcon {
    display: flex;
    margin-right: rem(38);
  }
  &__caption {
    @media (max-width: 600px) {
      display: none;
    }
    margin-left: rem(10);
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: rem(18);
    line-height: rem(21);
    color: #ffffff;
  }
  &__right {
    display: flex;
    a {
      display: flex;
      align-content: center;
    }
    img,
    svg {
      fill: white;
      stroke: white;
      width: rem(23);
      height: rem(21);
    }
  }
}
</style>
