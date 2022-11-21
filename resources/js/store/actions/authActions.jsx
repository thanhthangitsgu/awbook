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
    const data = {
       email: 'thang@gmail.com',
       password: '12345678'
    }
    axios.post('/api/login/', data).then(response =>{
        console.log("check res", response);
    }); 

    return {
        type: 'auth/handleLogin',
        payload: data,
    }
}

export default {
    handleLogin
}