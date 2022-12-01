const initState = {
    listPosition: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const publisherReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'position/getall':
            return {
                ...state, listPosition: data
            }
        case 'position/addone':
            return {
                ...state, addOne: data
            }
        case 'position/updateone':
            return {
                ...state, updateone: data
            }
        case 'position/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default publisherReducer