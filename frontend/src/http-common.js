import axios from "axios";

export default axios.create({
    baseURL : "https://movie-hub1.herokuapp.com/" || "http://localhost:3000",
    headers : {
        "Content-type" : "application/json"
    }
});