const initState = {
    listAuthor: []
}
const authorReducer = (state = initState, action) => {
    let data;
    switch (action.type) {
        case 'author/getAll':
            data = action.payload;
            return { ...state, listAuthor: data }
        default:
            return state
    }
}
export default authorReducer