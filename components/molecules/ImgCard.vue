<template>
  <div class="imgCard" :style="`aspect-ratio: ${img.width}/${img.height}`">
    <div class="imgCard__container">
      <div
        @click="isSelected = img.id"
        :class="{ isActive: selectedImgId === img.id }"
        class="imgCard__wrapper"
      >
        <img
          :class="{ isActive: isLoaded }"
          :src="img.urls.regular"
          :alt="img.description"
          @load="onImgLoad()"
        />
      </div>
      <div v-if="selectedImgId === img.id" class="imgCard__front">
        <div class="imgCard__user">
          <UserInfo
            @click="$router.push(`/imageId/${img.id}`)"
            :isImgPage="false"
            :user="img.user"
          />
        </div>
        <div class="icons">
          <button class="icons__favicon" @click="addSwitch">
            <FavsIcon :isAdded="idsOfFavorites[img.id]" @add="addSwitch" />
          </button>
          <button @click="isFullOpen = true">
            <Widescreen />
          </button>
          <a
            download="image.jpg"
            :href="img.urls.full"
            target="_blank"
            title="ImageName"
          >
            <Download />
          </a>
        </div>
      </div>
      <WideImage
        @close="isFullOpen = false"
        v-if="selectedImgId === img.id && isFullOpen"
        :img="img.urls.full"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import UserInfo from "@/components/atoms/ImgCard/UserInfo.vue";
import FavsIcon from "@/components/atoms/icons/FavsIcon.vue";
import Widescreen from "@/components/atoms/icons/Widescreen.vue";
import WideImage from "@/components/atoms/ImgCard/WideImage.vue";
import Download from "@/components/atoms/icons/Download.vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useImgStore } from "@/store/images";
import { ref } from "vue";
import { onMounted } from "vue";

const props = defineProps({
  selectedImgId: String,
  img: Object,
});
const route = useRoute();
const stateImgs = useImgStore();
const { removeFromFavs, addToFavs } = stateImgs;
const { favorites, imgs, idsOfFavorites } = storeToRefs(stateImgs);

let isLoaded = ref(false);
let isFullOpen = ref(false);

const onImgLoad = () => {
  isLoaded.value = true;
};

function addSwitch() {
  if (idsOfFavorites.value[props.img.id]) {
    removeFromFavs(props.img);
  } else {
    addToFavs(props.img);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";

.icons {
  display: flex;
  align-items: center;
  gap: rem(40);
  justify-content: center;
  svg {
    cursor: pointer;
    max-width: rem(34);
    height: rem(34);
    // transition: 0.3s;
    // &:hover {
    //   transition: 0.3s;
    //   // width: 100%;
    //   width: rem(40);
    //   height: rem(40);
    // }
  }
}
.imgCard {
  margin: rem(10) 0;
  @media (max-width: 800px) {
    // margin: 10px 0px;
    img {
      max-width: unset;
      height: unset;
    }
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__user {
    margin-bottom: 10%;
  }
  &__front {
    position: absolute;
    width: 100%;
    max-width: rem(232);
  }

  &__wrapper {
    cursor: pointer;
    &.isActive {
      border-radius: 8px;
      filter: blur(4px) brightness(0.5);
    }
  }
  img {
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      box-shadow: 0 0 rem(9) rgb(0, 0, 0);
    }
    &.isActive {
      opacity: 1;
    }
    color: black;
    opacity: 0;
    max-width: rem(473.72);
    border-radius: rem(8);
  }
}
</style>
