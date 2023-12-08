import { defineStore } from "pinia";
import api from "@/api/api";

// interface MyObject {
//   img: {};
// }
interface MyFavs {
  img: string;
}
// const arr: Array<MyObject> = [];

export const useImgStore = defineStore("main", {
  state: () => ({
    topics: [],
    imgs: [],
    img: {},
    favorites: [] as MyFavs[],
  }),
  getters: {
    idsOfFavorites() {
      const favId = {};
      this.favorites.forEach((e) => {
        favId[e.id] = true;
      });
      return favId;
    },
  },
  actions: {
    addToFavs(image: { id: number; urls: { [key: string]: string } }) {
      const favoriteImage = {
        id: image?.id,
        img: image?.urls?.regular,
      };

      this.favorites.push(favoriteImage);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    removeFromFavs(image: { id: number; urls: { [key: string]: string } }) {
      this.favorites = this.favorites.filter((e) => e.id !== image.id);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    getByIdAction(id) {
      api
        .getById(id)
        .then((res) => {
          this.img = res;
          const similarPhotos = res.tags.map((e) => e.title).join(" ");
          this.sendRequest(similarPhotos);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTopicsAction() {
      api
        .getTopics()
        .then((res) => {
          this.topics = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRandomAction() {
      api
        .getRandom()
        .then((res) => {
          this.imgs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendRequest(payload) {
      api
        .searchRequest(payload)
        .then((res) => {
          this.imgs = res.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
