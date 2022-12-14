const initState = {
    listPublisher: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const publisherReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'publisher/getall':
            return {
                ...state, listPublisher: data
            }
        case 'publisher/addone':
            return {
                ...state, addOne: data
            }
        case 'publisher/updateone':
            return {
                ...state, updateone: data
            }
        case 'publisher/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default publisherReducer