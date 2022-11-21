const initState = {
    listBook: [
        { id: 1, title_id: 1, pub_id: 1, year: "2001", price: "12000", describe: "", promo_id: 1, amount: 10, status: "", create_at: "", update_at: "", img: "https://viettamduc.com/wp-content/uploads/2019/01/bia-sach-hoc-vien-thiet-ke-viettamduc02.jpg" },
        { id: 2, title_id: 2, pub_id: 2, year: "2001", price: "80000", describe: "", promo_id: 1, amount: 11, status: "", create_at: "", update_at: "", img: "https://marketplace.canva.com/EAD4904e1SI/1/0/1003w/canva-xanh-d%C6%B0%C6%A1ng-b%E1%BA%A7u-tr%E1%BB%9Di-khoa-h%E1%BB%8Dc-vi%E1%BB%85n-t%C6%B0%E1%BB%9Fng-s%C3%A1ch-b%C3%ACa-YTM16nT04Z8.jpg" },
        { id: 3, title_id: 3, pub_id: 3, year: "2001", price: "90000", describe: "", promo_id: 2, amount: 11, status: "", create_at: "", update_at: "", img: "https://marketplace.canva.com/EAD5DLrZ1DE/1/0/1024w/canva-xanh-m%C3%B2ng-k%C3%A9t-v%C3%A0-h%E1%BB%93ng-b%C3%A1nh-donut-th%E1%BB%A9c-%C4%83n-nh%E1%BA%ADt-k%C3%BD-s%C3%A1ch-b%C3%ACa-Zlr77mT-27w.jpg" },
        { id: 4, title_id: 4, pub_id: 1, year: "2001", price: "45000", describe: "", promo_id: 3,  amount: 11, status: "", create_at: "", update_at: "", img: "https://marketplace.canva.com/EAD5DANBwv4/1/0/1003w/canva-xanh-l%C3%A1-l%C3%A1-c%C3%A2y-c%E1%BA%A7u-nguy%E1%BB%87n-nh%E1%BA%ADt-k%C3%BD-s%C3%A1ch-b%C3%ACa-lH-O_A1xreI.jpg" },
        { id: 5, title_id: 5, pub_id: 2, year: "2001", price: "100000", describe: "", promo_id: 1,  amount: 11, status: "", create_at: "", update_at: "", img: "https://marketplace.canva.com/EAD5G_O1lOI/1/0/1024w/canva-x%C3%A1m-m%E1%BB%9D-hoa-l%C3%A1-b%C3%ACa-s%C3%A1ch-s%C3%A1ng-t%E1%BA%A1o-c0jKmGWopOs.jpg" },
        { id: 6, title_id: 6, pub_id: 1, year: "2001", price: "120000", describe: "", promo_id: 2,  amount: 11, status: "", create_at: "", update_at: "", img: "https://marketplace.canva.com/EAD47iMryaU/1/0/1024w/canva-%C4%91%C6%A1n-s%E1%BA%AFc-gi%E1%BA%ADt-g%C3%A2n-khu-r%E1%BB%ABng-b%C3%ACa-s%C3%A1ch-b%E1%BA%B1ng-%E1%BA%A3nh-A31uilHaB7k.jpg" },
        { id: 7, title_id: 7, pub_id: 1, year: "2001", price: "89000", describe: "", promo_id: 3,  amount:11, status: "", create_at: "", update_at: "", img: "https://i.pinimg.com/originals/19/f5/f7/19f5f71b440cdbab667206d951043ef9.jpg" },
        { id: 8, title_id: 8, pub_id: 1, year: "2001", price: "41000", describe: "", promo_id: 2,  amount: 11, status: "", create_at: "", update_at: "", img: "https://incatalog.com.vn/wp-content/uploads/2019/04/sach_Tan_Nhat_Minh-669x1024.png" },
        { id: 9, title_id: 9, pub_id: 4, year: "2001", price: "12000", describe: "", promo_id: 3,  amount: 11, status: "", create_at: "", update_at: "", img: "https://salt.tikicdn.com/media/catalog/product/i/m/img619.u4972.d20170413.t145318.709858.jpg" },
        { id: 10, title_id: 10, pub_id: 1, year: "2001", price: "12000", describe: "", promo_id: 2,  amount: 11, status: "", create_at: "", update_at: "", img: "https://moingay1cuonsach.com.vn/wp-content/uploads/2021/07/dai-su-ton-sinh-thanh-ra-mat-sach-giao-trinh-dam-phan-quoc-te.jpg" },
        { id: 11, title_id: 8, pub_id: 2, year: "2001", price: "41000", describe: "", promo_id: 1, amount: 11, status: "", create_at: "", update_at: "", img: "https://incatalog.com.vn/wp-content/uploads/2019/04/sach_Tan_Nhat_Minh-669x1024.png" },
        { id: 12, title_id: 9, pub_id: 2, year: "2001", price: "12000", describe: "", promo_id: 3, amount: 11,  status: "", create_at: "", update_at: "", img: "https://salt.tikicdn.com/media/catalog/product/i/m/img619.u4972.d20170413.t145318.709858.jpg" },
        { id: 13, title_id: 10, pub_id: 1, year: "2001", price: "12000", describe: "", promo_id: 2, amount: 11, status: "", create_at: "", update_at: "", img: "https://moingay1cuonsach.com.vn/wp-content/uploads/2021/07/dai-su-ton-sinh-thanh-ra-mat-sach-giao-trinh-dam-phan-quoc-te.jpg" },
    ],
    message: ">>>"
}
const bookReducer = (state = initState, action) => {

    switch (action.type) {
        case 'book/init':
            let listBook = state.listBook;
            let listPromo = action.payload.listPromo;
            let listBookTitle = action.payload.listBookTitle;
            listBook.map((element, index) => {
                element.discount = listPromo.filter(item => item.id === element.promo_id)[0].discount;
                element.promo_name = listPromo.filter(item => item.id === element.promo_id)[0].name;
                element.name = listBookTitle.filter(item => item.id === element.title_id)[0].name;
            })
            return {
                ...state
            }
        case 'book/getList':
            let listBook_ = state.listBook;
            let listPromo_ = action.payload.listPromo;
            let listBookTitle_ = action.payload.listBookTitle;
            listBook_.map((element, index) => {
                element.discount = listPromo_.filter(item => item.id === element.promo_id)[0].discount;
                element.promo_name = listPromo_.filter(item => item.id === element.promo_id)[0].name;
                element.name = listBookTitle_.filter(item => item.id === element.title_id)[0].name;
            })
            return state
        default:
            return state;
    }
}
export default bookReducer