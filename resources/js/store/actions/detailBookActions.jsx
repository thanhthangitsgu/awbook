const getListBook = (listPromo, listBookTitle) => {
    return {
        type: 'book/getList',
        payload: { listPromo: listPromo, listBookTitle: listBookTitle }
    }
}
const addCart = (book) => {
    return {
        type: 'cart/add', payload: { book: book }
    }
}
export default {
    getListBook,
    addCart
}