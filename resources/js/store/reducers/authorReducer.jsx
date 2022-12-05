const initState = {
    listAuthor: [],
    updateOne: [],
    addOne: [],
    deleteOne: [],
    getOne: [],
}
const authorReducer = (state = initState, action) => {
    let data;
    switch (action.type) {
        case 'author/getAll':
            data = action.payload;
            return { ...state, listAuthor: data }
        case 'author/updateone':
            data = action.payload;
            return {...state, updateOne: data}
        case 'author/add':
            data = action.payload;
            return {...state, addOne: data};
        case 'author/deleteone':
            data = action.payload;
            return {...state, deleteOne: data};
        case 'author/getone':
            data = action.payload;
            return {...state, getOne: data};
        default:
            return state
    }
}
export default authorReducer