const initState = {
    listBill: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
    listDetail: [],
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
        case 'bill/getdetail':
            return {
                ...state, listDetail: data
            }
        default: return state;

    }
}
export default billReducer