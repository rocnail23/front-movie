import axios from "axios";

export default axios.create({
    baseURL: "https://movie-back-3g8r.onrender.com/api/v1"
})