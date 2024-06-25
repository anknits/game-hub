import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: { key: "9229f914363a4e258f202b114884003a"}
});