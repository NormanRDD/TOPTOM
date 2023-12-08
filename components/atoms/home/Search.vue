<template>
  <div class="search">
    <form @submit.prevent="$emit('getData', searchData)">
      <input v-model="searchData" placeholder="Поиск" type="text" />
    </form>
  </div>
</template>
<script setup lang="ts">
const searchData = ref("");
// const emit = defineEmits(["getData"]);
const props = defineProps({
  topic: String,
});
watch(
  () => props.topic,
  (value) => {
    if (value !== "") {
      searchData.value = props.topic;
      emit("getData", searchData.value);
    }
  }
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";

.search {
  &__icon {
    position: absolute;
    right: rem(23);
    bottom: rem(20);
  }

  input {
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: white;
      font-size: rem(72);
    }
    background: black;
    text-align: center;
    width: 75%;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: rem(72);
    line-height: rem(28);
    border-style: solid;
    border-width: 0 0 rem(1) 0;
    border-image: linear-gradient(
      to right,
      transparent,
      rgba(255, 254, 254, 0.491),
      transparent
    );
    border-image-slice: 1;
    color: white;
  }
}
</style>
