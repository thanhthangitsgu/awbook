import axiosClient from "../api/axiousClient";
const fetchAu = (person) => async (dispatch) => {
    const data = {
        email: person.stateLogin.emailLogin,
        password: person.stateLogin.passwordLogin
    }
    const res = await axiosClient.post('api/login', data);
    dispatch(handleLogin(res.data));
}
const handleLogin = (res) => {
    return {
        type: 'auth/handleLogin',
        payload: res
    }
}
const login = (res) => {
    return {
        type: 'auth/login',
        payload: res
    }
}
const logout = () => {
    return {
        type: 'auth/logout',
    }
}
const getProfile = (res) => {
    return {
        type: 'auth/profile',
        payload: res
    }
}
export default {
    handleLogin,
    fetchAu,
    login, 
    getProfile, 
    logout
}