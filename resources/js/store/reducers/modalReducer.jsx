const initState = {
    modalLogin: false
}
const modalReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'modal/login':
            return {
                ...state, modalLogin: data
            }
        default: return state;

    }
}
export default modalReducer;