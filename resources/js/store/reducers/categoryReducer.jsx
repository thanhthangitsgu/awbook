const initState = {
    listCategory: [],
    listDetail: [],
    updateOne: [],
    deleteOne: [],
    addOne: [],
    message: ''
}
const categoryReducer = (state = initState, action) => {
    let data = action.payload
    switch (action.type) {
        case 'category/getAll':
            return {
                ...state, listCategory: data
            }
        case 'category/booktitle':
            data = action.payload
            return {
                ...state, listDetail: data
            }
        case 'category/addBookTitle':
            data = action.payload
            return {
                ...state, message: data
            }
        case 'category/updateone':
            return {
                ...state, updateOne: data
            }
        case 'category/deleteOne':
            return{
                ...state, deleteOne: data
            }
        case 'category/addOne':
            return{
                ...state, addOne: data
            }
        default:
            return state
    }
}
export default categoryReducer