import http from "./http-common";

async function getAllLivres(){
    return await http.get('/livres');
}

async function getLivreById(id){
    return await http.get(`/livres/${id}`);
}

async function deleteLivreById(id){
    return await http.delete(`/livres/${id}`);
}

async function addLivre(livre){
    return await http.post(`/livres`,livre);
}
async function updateLivre(livre){
    return await http.put(`/livres/${livre._id}`,livre);
}

const livreServices = {getAllLivres,getLivreById,deleteLivreById,addLivre,updateLivre}
export default livreServices