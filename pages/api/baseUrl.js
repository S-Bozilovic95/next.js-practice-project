import axios from "axios";

const API = axios.create({
  baseURL: "https://nextjs-practice-project-35b28-default-rtdb.firebaseio.com/",
});

export default API;
