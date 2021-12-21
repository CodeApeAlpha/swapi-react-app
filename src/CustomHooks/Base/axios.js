import axios from "axios";

const instance=axios.create({
    baseURL:"https://www.swapi.tech/api/"
});

export default instance;