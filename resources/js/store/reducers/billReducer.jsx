const initState = {
    listBill: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const billReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'bill/getall':
            return {
                ...state, listBill: data
            }
        case 'bill/addone':
            return {
                ...state, addOne: data
            }
        case 'bill/updateone':
            return {
                ...state, updateone: data
            }
        case 'bill/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default billReducer