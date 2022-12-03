
import importActions from "../actions/importActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/import').then((response) => {
        dispatch(importActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("data", data)
    await axiosClient.post('api/import', data).then((response) => {
        dispatch(importActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/import/' + id, data).then((response) => {
        dispatch(importActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/import/' + id).then((response) => {
        dispatch(importActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}