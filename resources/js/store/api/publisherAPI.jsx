import publisherActions from "../actions/publisherActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/publisher').then((response) => {
        dispatch(publisherActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("api", data);
    await axiosClient.post('api/publisher', data).then((response) => {
        dispatch(publisherActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/publisher/' + id, data).then((response) => {
        dispatch(publisherActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/publisher/' + id).then((response) => {
        dispatch(publisherActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}