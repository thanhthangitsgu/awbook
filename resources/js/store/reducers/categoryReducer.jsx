const initState = {
    listCategory: [
        { id: 1, name: "Sách thiếu nhi", describe: "", status: "", create_at: "", update_at: "" },
        { id: 2, name: "Sách văn học", describe: "", status: "", create_at: "", update_at: "" },
        { id: 3, name: "Sách khoa học", describe: "", status: "", create_at: "", update_at: "" },
        { id: 4, name: "Sách giáo khoa", describe: "", status: "", create_at: "", update_at: "" },
        { id: 5, name: "Sách Lịch sử", describe: "", status: "", create_at: "", update_at: "" }
    ],
    listDetail: [],
    message: ''
}
const categoryReducer = (state = initState, action) => {
    let data;
    switch (action.type) {
        case 'category/getAll':
            data = action.payload
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
        default:
            return state
    }
}
export default categoryReducer