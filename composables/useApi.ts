import axios from "axios";

const baseURL = "https://api.unsplash.com/";

const unsplash = axios.create({
  baseURL,
  headers: {},
});
export { unsplash };
