import http from "./http-common";

async function getAllCategories(){
    return await http.get('/categories');
}

export default getAllCategories