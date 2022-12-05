const initState = {
    listMethod: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const methodReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'method/getall':
            return {
                ...state, listMethod: data
            }
        case 'method/addone':
            return {
                ...state, addOne: data
            }
        case 'method/updateone':
            return {
                ...state, updateone: data
            }
        case 'method/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default methodReducer