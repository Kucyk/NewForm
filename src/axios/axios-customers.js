import axios from "axios";

const instance = axios.create({
  baseURL: "https://marcinkucjas.firebaseio.com/"
});

export default instance;
