// const cartActions = (dispatch) => {
//     return {
//         incrementNumber: (id) => {
//             dispatch({ type: 'cart/incrementNumber', payload: { id: id } })
//         },
//         decreaseNumber: (id) => {
//             dispatch({ type: 'cart/decreaseNumber', payload: { id: id } })
//         },
//         addCart: (book) => {
//             dispatch({ type: 'cart/add', payload: { book: book } })
//         }
//     }
// }
const addCart = (book) => {
    return {
        type: 'cart/add', payload: { book }
    }
}
const updateCart = (book) => {
    return {
        type: 'cart/update', payload: { book }
    }
}
const deleteCart = (book) => {
    return {
        type: 'cart/delete', payload: { book }
    }
}
const addPay = (book) => {
    return {
        type: 'cart/addpay', payload: { book }
    }
}
const deletePay = (book) => {
    return {
        type: 'cart/deletepay', payload: { book }
    }
}
const updatePay = (listBook) =>{
    return {
        type: 'cart/updatepay', payload: {listBook}
    }
}
export default {
    addCart, updateCart, deleteCart, addPay, deletePay, updatePay
}