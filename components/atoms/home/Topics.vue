<template>
  <div class="topics">
    <div v-for="topic in topics" :key="topic.id">
      <div @click="emit('getTopic', topic.title)" class="topics__topic">
        <p>
          {{ topic.title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  topics: Array,
});
const emit = defineEmits(["getTopic"]);
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.topics {
  color: white;
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  margin: rem(45) auto;
  // align-items: center;
  width: 100%;
  max-width: rem(330);
  overflow: auto;
  @include media("desktop-up") {
    max-width: unset;
    font-size: rem(12);
  }
  &__topic {
    p {
      font-size: rem(12);
      margin-right: rem(5);
      @include media("desktop-up") {
        font-size: rem(18);
      }
    }
    cursor: pointer;
    color: #fff;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
