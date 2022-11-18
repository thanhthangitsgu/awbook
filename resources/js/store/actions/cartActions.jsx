const cartActions = (dispatch) => {
    return {
        incrementNumber: (id) => dispatch({ type: 'cart/incrementNumber', payload: { id: id } }),
        decreaseNumber: (id) => dispatch({ type: 'cart/decreaseNumber', payload: { id: id } })
    }
}
export default cartActions