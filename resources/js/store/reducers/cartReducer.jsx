const initState = {
    list: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    listPay: localStorage.getItem('pay') ?
        JSON.parse(localStorage.getItem('pay')) : [],
    message: "Thêm thành công",
    error: 0
}
const cartReducer = (state = initState, action) => {
    let temp = [...state.list];
    let book = action.payload;
    let product;
    let pay = [...state.listPay];
    switch (action.type) {
        case 'cart/add':
            book = book.book;
            product = temp.filter(item => item.id === book.id);
            if (product.length) {
                product[0].numberCart = product[0].numberCart + 1;
            } else {
                book.numberCart = 1;
                temp.push(book);
            }
            localStorage.setItem('cart', JSON.stringify(temp));
            return { ...state, list: temp }
        case 'cart/update':
            book = book.book;
            product = temp.filter(item => item.id === book.id);
            product[0].numberCart = book.numberCart;
            localStorage.setItem('cart', JSON.stringify(temp));
            return { ...state, list: temp }
        case 'cart/delete':
            book = book.book;
            temp = temp.filter(item => item.id != book.id);
            localStorage.setItem('cart', JSON.stringify(temp));
            return { ...state, list: temp }
        case 'cart/updatepay':
            book = book.listBook;
            localStorage.setItem('pay', JSON.stringify(book));
            return { ...state, listPay: book }
        case 'cart/deletepay':
            book = book.book;
            product = pay.filter(item => item.id != book.id);
            localStorage.setItem('pay', JSON.stringify(product));
            return { ...state, listPay: product }
        default:
            return state;
    }
}
export default cartReducer