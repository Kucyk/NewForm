import axios from "axios";

const instance = axios.create({
  baseURL: "https://football-db2fd.firebaseio.com/"
});

export default instance;
