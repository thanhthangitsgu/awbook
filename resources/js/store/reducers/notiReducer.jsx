const initState = {
    list: [
        { id: "1", name: "Bạn vừa đặt hàng thành công", link: "", time: "1 giờ trước" },
        { id: "2", name: "Sách của bạn đã được giao", link: "", time: "2 giờ trước" },
        { id: "3", name: "Thêm thành công sản phẩm", link: "", time: "1 giờ trước"},
        { id: "4", name: "Bạn vừa đặt hàng thành công", link: "", time: "2 ngày trước" },
        { id: "5", name: "Thêm thành công sản phẩm", link: "", time: "1 tuần trước", }
    ]
}
const notiReducer = (state = initState, action) => {
    return state
}
export default notiReducer