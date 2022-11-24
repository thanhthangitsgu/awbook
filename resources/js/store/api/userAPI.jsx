import userActions from "../actions/userActions";
import axiosClient from "./axiousClient";
const getProfile = () => async (dispatch) => {
    const res = await axiosClient.get('api/profile');
    dispatch(userActions.getProfle(res))
}
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/user');
    dispatch(userActions.getAll(res));
}
const deleteOne = (id) => async (dispatch) => {
    const res = await axiosClient.delete('api/user/'+id);
    dispatch(userActions.deleteOne(res));
}
export default {
    getProfile, getAll, deleteOne
}