import axios from 'axios';

const USER_SPRING_BOOT_URL='http://localhost:6060/user';

class UserService{
    

    addUser(user){
        console.log("User Details : "+JSON.stringify(user));
        return axios.post(USER_SPRING_BOOT_URL+"/register",user)
    }

    addAddress(address){
        return axios.post(USER_SPRING_BOOT_URL+"/register/address",address);
    }

    validateUser(user){
        console.log("in validation service method with user : "+user);
        return axios.post(USER_SPRING_BOOT_URL+"/login",user);
    }

    forgotPassword(user){
        console.log(" in user service method with data: "+JSON.stringify(user));
        return axios.post(USER_SPRING_BOOT_URL+"/forgotPassword",user);
    }
}

export default new UserService();