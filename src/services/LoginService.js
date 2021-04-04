
import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/login';

class ApiService {

    loginUser(user) {
        const headers = {
            'Content-Type': 'application/json'
        };

        return axios.post(USER_API_BASE_URL + '/' + 'signin',
        {
            email: user.username,
            password: user.password
        },
        {headers});
    }

    signUpUser(form) {
        const headers = {
            'Content-Type': 'application/json'
        };

        return axios.post(USER_API_BASE_URL + '/' + 'signup',
        {
            email: form.email,
            password: form.password,            
            fullname: form.fullname,
            username: form.username,
            birthdate: form.birthdate,
            state: form.state,
            city: form.city,
        },
        {headers});
    }

}

export default new ApiService();