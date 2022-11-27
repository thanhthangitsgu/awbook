import authorActions from "../actions/authorActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/author')
    dispatch(authorActions.getAll(res.data));
}
export default {
    getAll
}