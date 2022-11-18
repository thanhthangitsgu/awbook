const initState = {
    listPromo: [
        {id: 1, name: "Khuyến mãi tháng 10", start_time: "1/10/2022", end_time: "1/11/2022", discount: 10, status: "", created_at:"", update_at:""},
        {id: 2, name: "Khuyến mãi chào mừng 20/11", start_time: "1/10/2022", end_time: "1/11/2022", status: "", discount: 20, created_at:"", update_at:""},
        {id: 3, name: "Khuyến mãi tháng 12", start_time: "1/10/2022", end_time: "1/11/2022", discount: 30,status: "", created_at:"", update_at:""},
    ],
}
const promotionReducer = (state = initState, action) => {
    return state
}
export default promotionReducer