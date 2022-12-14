const getAll = (res) => {
    return {
        type: 'publisher/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'publisher/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'publisher/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'publisher/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}