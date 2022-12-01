const getAll = (res) => {
    return {
        type: 'promotion/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'promotion/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'promotion/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'promotion/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}