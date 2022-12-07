const initState = {
    login: [],
    user: false,
    register: [],
    token: localStorage.getItem('token')
        ? localStorage.getItem('token')
        : [],
    status: []
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
        case 'auth/profile':
            let temp = [];
            if(data.data.status){
                temp = data.data.response;
            }
            return {
                ...state, user: temp, status: data.data.status
            }
        case 'auth/logout':
            localStorage.removeItem('token');
            return{
                ...state, user: [], login: []
            }
        default:
            return state;
    }
}
export default authReducer