const initState = {
    list: [
        { id: "1", name: "Sách thiếu nhi", describe: "", status: "", create_at: "", update_at: "" },
        { id: "2", name: "Sách văn học", describe: "", status: "", create_at: "", update_at: "" },
        { id: "3", name: "Sách khoa học", describe: "", status: "", create_at: "", update_at: "" },
        { id: "4", name: "Sách giáo khoa", describe: "", status: "", create_at: "", update_at: "" },
        { id: "5", name: "Sách Lịch sử", describe: "", status: "", create_at: "", update_at: "" }
    ]
}
const publisherReducer = (state = initState, action) => {
    return state
}
export default publisherReducer