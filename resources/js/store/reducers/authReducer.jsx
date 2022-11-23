const initState = {}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'auth/handleLogin':
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default authReducer