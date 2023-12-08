<template>
  <div class="search">
    <div class="search__container">
      <div class="search__wrapper">
        <Search :topic="newTopic" @getData="sendData" />
        <Topics @getTopic="setTopic" :topics="topics" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import Topics from "~/components/atoms/home/Topics.vue";
import Search from "~/components/atoms/home/Search.vue";

const stateImgs = useImgStore();
const { imgs, topics } = storeToRefs(stateImgs);
const { sendRequest, getTopicsAction } = stateImgs;

let newTopic = ref("");
const setTopic = (topic) => {
  newTopic.value = topic;
};
const sendData = (data) => {
    sendRequest(data);
};
onMounted(() => {
  getTopicsAction();
});
</script>
<style scoped lang="scss">
@import "@/assets/scss/functions.scss";

.search {
  background: url("../assets/images/background.png");
  form {
    text-align: center;
  }
  &__wrapper {
    align-items: center;
    margin: 0 auto;
    text-align: center;
    max-width: rem(1200);
    width: 100%;
    margin: 0 auto;
    height: rem(86);
    @media (max-width: 1200px) {
      padding: 0 rem(20);
    }
  }
  &__container {
    height: rem(253);
    background-color: black;
  }
}
</style>
