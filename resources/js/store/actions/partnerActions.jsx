const getAll = (res) => {
    return {
        type: 'partner/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'partner/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'partner/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'partner/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}