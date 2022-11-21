const initState = {
    idUser: null,
    fullName: null,
    token: null,
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'auth/handleLogin':
            let data = action.data;
            return {
                ...state, data
            }
        default:
            return state;
    }
}
export default authReducer