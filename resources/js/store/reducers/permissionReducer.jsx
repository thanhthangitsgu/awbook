const initState = {
    listPermission: [],
    listDetail: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const permissionReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'permission/getall':
            return {
                ...state, listPermission: data
            }
        case 'permission/addone':
            return {
                ...state, addOne: data
            }
        case 'permission/updateone':
            return {
                ...state, updateone: data
            }
        case 'permission/deleteone':
            return {
                ...state, deleteone: data
            }
        case 'permission/getlist':
            return{
                ...state, listPartner: data
            }
        default: return state;

    }
}
export default permissionReducer