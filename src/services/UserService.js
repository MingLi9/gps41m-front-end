import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:4353/api/user";

class ProductService {

    login(username, password){
        //awaiting jwt implementation
        return axios.get(USER_API_BASE_URL + '/checkUsername/' + username).then((response) => console.log(response)).catch(() => alert("Error"));
    }

    register(username, password){
        return axios.post(USER_API_BASE_URL + '?username=' + username + '&password=' + password).then((response) => console.log(response)).catch(() => alert("Error"));
    }

    getUserInfo(userId){
        return axios.get(USER_API_BASE_URL + '/details/' + userId);
    }

    updateUser(user, password, fullName){
        var User = 
        {
            "id": 19,
            "username": "1234",
            "password": "$2a$10$p0p.l6B3wio8XxZtD5xTRuK01uX6xc1W/1GX3jju9Oh0KO.vxrxte",
            "fullName": "kasa"
        };
        return axios.put(USER_API_BASE_URL + '/',User);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new ProductService()