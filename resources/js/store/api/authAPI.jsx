import authActions from "../actions/authActions";
import axiosClient from "./axiousClient";
const login = (data) => async (dispatch) => {
    await axiosClient.post('api/login', data).then((response) => {
        dispatch(authActions.login(response));
        axiosClient.get('api/profile').then((res)=>{
            dispatch(authActions.getProfile(res));
        })
    })
    

}
const getProfile = () => async (dispatch) => {
    await axiosClient.get('api/profile').then((response) => {
        dispatch(authActions.getProfile(response));
    })
}
export default {
    login, getProfile
}