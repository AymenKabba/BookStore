import axios from "axios";

const http = axios.create({
    baseURL:"http://localhost:3366",
    headers:{"content-type":"application/json"}
})

export default http