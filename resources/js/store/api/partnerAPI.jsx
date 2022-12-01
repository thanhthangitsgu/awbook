import partnerActions from "../actions/partnerActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/partner').then((response) => {
        dispatch(partnerActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("data", data)
    await axiosClient.post('api/partner', data).then((response) => {
        dispatch(partnerActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/partner/' + id, data).then((response) => {
        dispatch(partnerActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/partner/' + id).then((response) => {
        dispatch(partnerActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}