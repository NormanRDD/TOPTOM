<template>
  <div class="full">
    <div class="full__inner">
      <button @click="$emit('close')" class="full__closeBtn">X</button>
      <img :src="img" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  img: String,
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";

.full {
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.476);
  backdrop-filter: blur(rem(10));
  &__inner {
    padding: rem(100);
    display: flex;
    justify-content: center;
  }
  &__closeBtn {
    color: white;
    position: absolute;
    font-size: rem(30);
    font-family: cursive;
    font-weight: 900;
    right: rem(100);
    z-index: 17;
  }
  img {
    width: 100%;
    max-width: rem(1482);
    height: rem(744);
    object-fit: contain;
  }
}
</style>
