const getAll = (res) => {
    return {
        type: 'category/getAll',
        payload: { res: res }
    }
}

const getListBookTitle = (res) => {
    return {
        type: 'category/booktitle',
        payload: { res: res }
    }
}
const addBookTitle = (res) => {
    return {
        type: 'category/addBookTitle',
        payload: { res: res }
    }
}

export default {
    getAll,
    getListBookTitle,
    addBookTitle
}