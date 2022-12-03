const initState = {
    listBookTitle: [],
    addOne: [],
    updateOne: [],
    deleteOne: []
}
const bookTitleReducer = (state = initState, action) => {
    let data;
    switch (action.type) {
        case 'booktitle/getall':
            data = action.payload;
            return { ...state, listBookTitle: data }
        case 'booktitle/updateone':
            data = action.payload;
            return { ...state, updateOne: data }
        case 'booktitle/add':
            data = action.payload;
            return { ...state, addOne: data };
        case 'booktitle/deleteone':
            data = action.payload;
            return { ...state, deleteOne: data };
        default:
            return state
    }
}
export default bookTitleReducer