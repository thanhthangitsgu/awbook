import positionActions from "../actions/positionActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    await axiosClient.get('api/position').then((response) => {
        dispatch(positionActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("api", data);
    await axiosClient.post('api/position', data).then((response) => {
        dispatch(positionActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/position/' + id, data).then((response) => {
        dispatch(positionActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/position/' + id).then((response) => {
        dispatch(positionActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}