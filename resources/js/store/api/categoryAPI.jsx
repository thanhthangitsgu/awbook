import categoryActions from "../actions/categoryActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/category')
    dispatch(categoryActions.getAll(res.data));
}
const getListBookTitle = () => async (dispatch) =>{
    const res = await axiosClient.get('api/category-book')
    dispatch(categoryActions.getListBookTitle(res.data));
}
const addBookTitle = (data) => async (dispatch) =>{
    const res = await axiosClient.post('api/category-book',data);
    dispatch(categoryActions.addBookTitle(res))
}
export default {
    getAll, getListBookTitle,
    addBookTitle
}