const initState = {
    list: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    message: "Thêm thành công",
    error: 0
}
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'cart/add':
            let cart = [...state.list];
            let book = action.payload.book;
            let product = cart.filter(item => item.id === book.id);
            if (product.length) {
                product[0].numberCart = product[0].numberCart + 1;
            } else {
                book.numberCart = 1;
                cart.push(book);
            }
            localStorage.setItem('cart',JSON.stringify(cart));
            return {
                ...state, list: [...cart]
            }

        default:
            return state;
    }
}
export default cartReducer