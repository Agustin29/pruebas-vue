import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    "Content-type": "application/json",
  },
});
