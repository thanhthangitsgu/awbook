const initState = {
    listBookTitle: [
        { id: 1, name: "Muốn nhanh thì phải từ từ", author_id: "1", status: "", create_at: "", update_at: "" },
        { id: 2, name: "Chiến hay chạy", author_id: "2", status: "", create_at: "", update_at: "" },
        { id: 3, name: "Nhật ký thức ăn", author_id: "3", status: "", create_at: "", update_at: "" },
        { id: 4, name: "Nhật ký cầu nguyện của tôi", author_id: "4", status: "", create_at: "", update_at: "" },
        { id: 5, name: "Bảy người tùy nữ", author_id: "5", status: "", create_at: "", update_at: "" },
        { id: 6, name: "Sương mù nơi rừng rậm", author_id: "6", status: "", create_at: "", update_at: "" },
        { id: 7, name: "Một đứa trẻ vừa chạy trốn khỏi tôi", author_id: "7", status: "", create_at: "", update_at: "" },
        { id: 8, name: "Giáo trình Đại cương về Nhà nước và Pháp luật", author_id: "8", status: "", create_at: "", update_at: "" },
        { id: 9, name: "Giáo trình Lý luận Đại cương về Nhà nước và Pháp luật", author_id: "12", status: "", create_at: "", update_at: "" },
        { id: 10, name: "Giáo trình đàm phán Quốc tế", author_id: "9", status: "", create_at: "", update_at: "" },
    ],
    listCategory: [
        { book_id: 1, cate_id: 1, status: "", created_at: "", updated_at: "" },
        { book_id: 2, cate_id: 1, status: "", created_at: "", updated_at: "" },
        { book_id: 4, cate_id: 1, status: "", created_at: "", updated_at: "" },
        { book_id: 5, cate_id: 2, status: "", created_at: "", updated_at: "" },
        { book_id: 6, cate_id: 3, status: "", created_at: "", updated_at: "" },
        { book_id: 7, cate_id: 4, status: "", created_at: "", updated_at: "" },
        { book_id: 8, cate_id: 5, status: "", created_at: "", updated_at: "" },
        { book_id: 9, cate_id: 6, status: "", created_at: "", updated_at: "" },
        { book_id: 10, cate_id: 7, status: "", created_at: "", updated_at: "" },
        { book_id: 11, cate_id: 8, status: "", created_at: "", updated_at: "" },
        { book_id: 12, cate_id: 9, status: "", created_at: "", updated_at: "" },

    ]
}
const bookTitleReducer = (state = initState, action) => {
    return state
}
export default bookTitleReducer