import userActions from "../actions/userActions";
import axiosClient from "./axiousClient";
const getProfile = () => async (dispatch) => {
    const res = await axiosClient.get('api/profile');
    dispatch(userActions.getProfle(res))
}
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/user');
    dispatch(userActions.getAll(res))
}
export default {
    getProfile, getAll
}