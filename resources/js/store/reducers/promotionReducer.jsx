const initState = {
    listPromotion: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const promotionReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'promotion/getall':
            return {
                ...state, listPromotion: data
            }
        case 'promotion/addone':
            return {
                ...state, addOne: data
            }
        case 'promotion/updateone':
            return {
                ...state, updateone: data
            }
        case 'promotion/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default promotionReducer