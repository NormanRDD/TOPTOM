<template>
  <div class="tags">
    <p class="tags__title">Похожие теги</p>
    <div class="tags__list">
      <div v-for="(item, index) in tags" :key="index" class="tags__item">
        <nuxt-link :to="`/`" class="tags__tag">{{ item.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";

const props = defineProps({
  tags: Array,
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.tags {
  @include media("tablet-landscape-up") {
    text-align: left;
  }
  text-align: center;
  margin-top: rem(40);
  &__title {
    background-color: rgba(0, 0, 0, 0.367);
    border-radius: 10px;
    padding: rem(5);
    max-width: rem(168);
    margin: 0 auto;
    color: #fff;
    font-family: sans-serif;
    font-size: rem(24);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @include media("tablet-landscape-up") {
      color: black;
    }
  }
  &__list {
    display: flex;
    @include media("tablet-landscape-up") {
      justify-content: left;
      flex-wrap: wrap;
    }
    justify-content: center;
    gap: rem(20);
    margin-top: rem(20);
  }
  &__item {
    border-radius: rem(8);
    background: #fff;
    padding: rem(5) rem(10);
    a {
      color: var(--Gray-3, #828282);
      font-family: sans-serif;
      font-size: rem(18);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
