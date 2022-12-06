import authActions from "../actions/authActions";
import axiosClient from "./axiousClient";
const login = (data) => async (dispatch) => {
    await axiosClient.post('api/login', data).then((response) => {
        dispatch(authActions.login(response));
    })

}
export default {
    login
}