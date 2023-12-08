import { unsplash } from "@/composables/useApi";

// UNSPLASH TOKEN
const clienId = "A3bgwzO64v6lsr1AjI956fkhVlFSHjAyqLbsq4SvanE";

const endpoints = {
  search: "/search/photos",
  getRandom: "/photos/random",
  getById: "/photos/",
  getTopicById: "/topics/",
};
const api = {
  async getById(id) {
    const response = await unsplash.get(
      endpoints.getById + `${id}?client_id=${clienId}`
    );
    return response.data;
  },
  async getTopics() {
    const response = await unsplash.get(
      endpoints.getTopicById + `?client_id=${clienId}`
    );
    return response.data;
  },
  async getRandom() {
    const response = await unsplash.get(
      endpoints.getRandom + `?count=15&client_id=${clienId}`
    );
    return response.data;
  },
  async searchRequest(data) {
    let newData = data.replace("&", "and");
    const response = await unsplash.get(
      endpoints.search + `?query=${newData}&client_id=${clienId}`
    );
    return response.data;
  },
};
export default api;
