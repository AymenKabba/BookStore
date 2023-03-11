import http from "./http-common";

async function getAllUsers(){
    return await http.get('/users');
}

async function addUser(users){
    return await http.post(`/users`,users);
}
async function deleteUserById(id){
    return await http.delete(`/users/${id}`);
}
async function updateUser(users){
    return await http.put(`/users/${users._id}`,users);
}

const userServices = {getAllUsers,addUser,deleteUserById,updateUser}
export default userServices