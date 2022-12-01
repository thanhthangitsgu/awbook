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
const addOne = (res) => {
    return {
        type: 'category/addone',
        payload: { res: res }
    }
}
const updateOne = (res) => {
    return {
        type: 'category/updateone',
        payload: { res: res }
    }
}
const deleteOne = (res) => {
    return {
        type: 'category/deleteone',
        payload: { res: res }
    }
}
export default {
    getAll,
    getListBookTitle,
    addBookTitle,
    addOne,
    updateOne,
    deleteOne,
}