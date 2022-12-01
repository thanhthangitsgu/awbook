const getAll = (res) => {
    return {
        type: 'bill/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'bill/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'bill/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'bill/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}