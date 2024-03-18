import axios from 'axios';

const ADMIN_SPRING_BASE_URL='http://localhost:6060/admin';
class AdminService{

    getAllAdmins(){
        return axios.get(ADMIN_SPRING_BASE_URL+"/adminList")
    }

    getAllUsers(){
        return axios.get(ADMIN_SPRING_BASE_URL+"/userList");
    }

    deleteUserById(userId){
        return axios.delete(ADMIN_SPRING_BASE_URL+"/deleteUser/"+userId);
    }
}

export default new AdminService();