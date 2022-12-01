const getAll = (res) => {
    return {
        type: 'position/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'position/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'position/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'position/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}