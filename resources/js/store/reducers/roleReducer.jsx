const initState = {
    position: [],
    permission: [],
    detail: [],
}
const roleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'role/init':
            state.position = action.payload.role;
            state.permission = action.payload.permission;
            state.detail = action.payload.detail;
            return action.payload
        default:
            return state;
    }
}
export default roleReducer