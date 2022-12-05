const getAll = (res) => {
    return {
        type: 'method/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'method/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'method/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'method/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}