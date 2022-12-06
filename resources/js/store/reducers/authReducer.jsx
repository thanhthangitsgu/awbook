const initState = {
    login: [],
    user: [],
    register: [],
    token: localStorage.getItem('token')
        ? localStorage.getItem('token')
        : [],
}
const authReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'auth/handleLogin':
            return state;
        case 'auth/login':
            return {
                ...state, login: data.data
            }
        default:
            return state;
    }
}
export default authReducer