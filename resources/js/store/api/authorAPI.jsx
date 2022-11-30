import authorActions from "../actions/authorActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/author')
    dispatch(authorActions.getAll(res.data));
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/author/' + id, data).then((res) => {
        dispatch(authorActions.updateOne(res.data));
    }).catch({

    })
}
const addOne = (data) => async (dispatch) => {
    await axiosClient.post('api/author', data).then((res) => {
        dispatch(authorActions.addOne(res))
        dispatch(getAll());
    }).catch({

    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/author/' + id).then((res) => {
        dispatch(authorActions.deleteOne(res));
        //dispatch(getAll());
    }).catch({

    })
}
export default {
    getAll, updateOne, addOne, deleteOne
}