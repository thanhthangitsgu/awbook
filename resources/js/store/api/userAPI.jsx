import userActions from "../actions/userActions";
import axiosClient from "./axiousClient";
const getProfile = () => async (dispatch) => {
    const res = await axiosClient.get('api/profile');
    dispatch(userActions.getProfle(res))
}
const getAll = () => async (dispatch) => {
    const res = await axiosClient.get('api/user');
    dispatch(userActions.getAll(res));
}
const deleteOne = (id) => async (dispatch) => {
    const res = await axiosClient.delete('api/user/' + id);
    dispatch(userActions.deleteOne(res));
}
const updateOne = (id, dataForm) => async (dispatch) => {
    let surname = dataForm.fullname.split(' ').slice(0, -1).join(' ');
    let name = dataForm.fullname.split(' ').slice(-1).join(' ');
    let phone = dataForm.phone
    const data = {
        name: name,
        surname: surname,
        phone: phone,
        date_of_birth: dataForm.birthday,
        gender: dataForm.gender,
        email: dataForm.email,
        address: dataForm.address.village + "," + dataForm.address.ward + "," + dataForm.address.district + "," + dataForm.address.provide
    }
    const res = await axiosClient.put('api/user/' + id, data);
    dispatch(userActions.updateOne(res));
}
const addOne = (dataForm) => async (dispatch) => {
    console.log(dataForm);
    let surname = dataForm.fullname.split(' ').slice(0, -1).join(' ');
    let name = dataForm.fullname.split(' ').slice(-1).join(' ');
    const data = {
        surname: surname, 
        name: name,
        date_of_birth: dataForm.birthday,
        position_id: 1,
        phone: dataForm.phone, 
        address: dataForm.address.village + "," + dataForm.address.ward + "," + dataForm.address.district + "," + dataForm.address.provide,
        email: dataForm.email,
        password: dataForm.phone
    }
    const res = await axiosClient.post('api/user/', data);
    dispatch(userActions.addOne(res))
}
export default {
    getProfile, getAll, deleteOne, updateOne, addOne
}