import promotionActions from "../actions/promotionActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/promotion').then((response) => {
        dispatch(promotionActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("data", data)
    await axiosClient.post('api/promotion', data).then((response) => {
        dispatch(promotionActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/promotion/' + id, data).then((response) => {
        dispatch(promotionActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/promotion/' + id).then((response) => {
        dispatch(promotionActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}