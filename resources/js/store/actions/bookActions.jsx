const getAll = (res) => {
    return {
        type: 'book/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'book/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'book/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'book/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}