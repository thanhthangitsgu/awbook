const initState = {
    current: [],
    listUser: [],
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'user/getprofile':
            state = action.payload;
            return state;
        case 'user/getall':
            state = action.payload;
            return state
        default:
            return state;
    }
}
export default userReducer