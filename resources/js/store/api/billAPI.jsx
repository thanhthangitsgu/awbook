import billActions from "../actions/billActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/bill').then((response) => {
        dispatch(billActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("data", data)
    await axiosClient.post('api/bill', data).then((response) => {
        dispatch(billActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/bill/' + id, data).then((response) => {
        dispatch(billActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/bill/' + id).then((response) => {
        dispatch(billActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}