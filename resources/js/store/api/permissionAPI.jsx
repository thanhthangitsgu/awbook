import permissionActions from "../actions/permissionActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/permission').then((response) => {
        dispatch(permissionActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("api", data);
    await axiosClient.post('api/permission', data).then((response) => {
        dispatch(permissionActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/permission/' + id, data).then((response) => {
        dispatch(permissionActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/permission/' + id).then((response) => {
        dispatch(permissionActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}