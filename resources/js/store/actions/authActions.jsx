import axios from "axios"

const handleLogin = (person) => {
    /*axios({
        method: 'post',
        url: '/api/login',
        data: {
            email: person.emailLogin,
            password: person.passwordLogin
        }
    }).then(function (response) {
        payload = response;
    });*/


    return {
        type: 'auth/handleLogin',
        payload: person,
    }
}

export default {
    handleLogin
}