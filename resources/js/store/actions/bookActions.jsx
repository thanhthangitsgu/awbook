const BookActions = (dispatch) => {
    return {
        initBook: (listPromo, listBookTitle) =>
            dispatch({
                type: 'book/init',
                payload: { listPromo: listPromo, listBookTitle: listBookTitle }
            }),
    }
}
export default BookActions