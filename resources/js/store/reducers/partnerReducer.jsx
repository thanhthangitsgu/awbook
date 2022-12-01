const initState = {
    listPartner: [],
    addOne: [],
    updateOne: [],
    deleteOne: [],
}
const partnerReducer = (state = initState, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'partner/getall':
            return {
                ...state, listPartner: data
            }
        case 'partner/addone':
            return {
                ...state, addOne: data
            }
        case 'partner/updateone':
            return {
                ...state, updateone: data
            }
        case 'partner/deleteone':
            return {
                ...state, deleteone: data
            }
        default: return state;

    }
}
export default partnerReducer