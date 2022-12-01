const initState = {
    listImport: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const importReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'import/getall':
            return {
                ...state, listImport: data
            }
        case 'import/addone':
            return {
                ...state, addOne: data
            }
        case 'import/updateone':
            return {
                ...state, updateone: data
            }
        case 'import/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default importReducer