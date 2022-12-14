const getAll = (res) => {
    return {
        type: 'import/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'import/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'import/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'import/deleteone',
        payload: res
    }
}
export default {
    getAll,
    addOne,
    updateOne,
    deleteOne
}