import axiosClient from "../api/axiousClient";
const initState = {
    current: [],
    listUser: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const userReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'user/getprofile':
            return {
                ...state, current: data
            }
        case 'user/getall':
            return {
                ...state, listUser: data
            }
        case 'user/addone':
            return {
                ...state, addOne: data
            }
        case 'user/updateone':
            return {
                ...state, updateone: data
            }
        case 'user/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default userReducer