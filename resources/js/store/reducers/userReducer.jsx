const initState = {
    current: [],
    listUser: [],
    deleteOne: [],
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
        default:
            return state;
    }
}
export default userReducer