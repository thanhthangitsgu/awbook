const initState = {
    position: [],
    role: [],
    detail: [],
}
const roleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'role/init':
            return action.payload;
        default:
            return state;
    }
}
export default roleReducer