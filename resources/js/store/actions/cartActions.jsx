const cartActions = (dispatch) => {
    return {
        incrementNumber: (id) => {
            dispatch({ type: 'cart/incrementNumber', payload: { id: id } })
        },
        decreaseNumber: (id) => {
            dispatch({ type: 'cart/decreaseNumber', payload: { id: id } })
        },
        addCart: (book) => {
            dispatch({ type: 'cart/add', payload: { book: book } })
        }
    }
}
export default cartActions