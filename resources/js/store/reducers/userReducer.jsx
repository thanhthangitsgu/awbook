const initState = {
    current: [],
    listUser: [],
    deleteOne: [],
    updateOne: [],
    addOne: [],
}
const userReducer = (state = initState, action) => {
    let temp = "";
    switch (action.type) {
        case 'user/getprofile':
            temp = action.payload.res;
            return {
                ...state, current: [temp.data]
            }
        case 'user/getall':
            state = action.payload;
            return state
        case 'user/delete':
            temp = action.payload.res;
            return {
                ...state, deleteOne: [temp]
            }
        case 'user/update':
            temp = action.payload.res;
            return {
                ...state, updateOne: [temp]
            }
        case 'user/add':
            temp = action.payload;
            return {
                ...state, addOne: [temp]
            }
        default:
            return state;
    }
}
export default userReducer