const initState = {
    listPublisher: [
        {
            id_pub: 1, name: "Nhà xuất bản Giáo dục", address: "Hà Nội", status: "", create_at: "", update_at: "",
        },
        {
            id_pub: 2, name: "Nhà xuất bản Quốc gia và Sự thật", address: "Hà Nội", status: "", create_at: "", update_at: "",
        },
        {
            id_pub: 3, name: "Nhà xuất bản Skybooks", address: "Hà Nội", status: "", create_at: "", update_at: "",
        },
        {
            id_pub: 4, name: "Nhà xuất bản Thanh niên", address: "Hà Nội", status: "", create_at: "", update_at: "",
        },
        {
            id_pub: 5, name: "Nhà xuất bản Phụ nữ", address: "Hà Nội", status: "", create_at: "", update_at: "",
        }
    ]
}
const publisherReducer = (state = initState, action) => {
    return state
}
export default publisherReducer