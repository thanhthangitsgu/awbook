import categoryActions from "../actions/categoryActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/category')
    dispatch(categoryActions.getAll(res.data));
}
const getListBookTitle = () => async (dispatch) => {
    const res = await axiosClient.get('api/category-book')
    dispatch(categoryActions.getListBookTitle(res.data));
}
const addBookTitle = (data) => async (dispatch) => {
    const res = await axiosClient.post('api/category-book', data);
    dispatch(categoryActions.addBookTitle(res))
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/category/' + id, data).then((response) => {
        dispatch(categoryActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/category/' + id).then((response) => {
        dispatch(categoryActions.deleteOne(response));
        dispatch(getAll());
    })
}
const addOne = (data) => async (dispatch) => {
    await axiosClient.post('api/category', data).then((response) => {
        dispatch(categoryActions.addOne(response));
        dispatch(getAll());
    })

}
export default {
    getAll, getListBookTitle,
    addBookTitle,
    updateOne,
    deleteOne,
    addOne
}