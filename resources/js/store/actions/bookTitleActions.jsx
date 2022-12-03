const getAll = (res) => {
    return {
        type: 'booktitle/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'booktitle/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'booktitle/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'booktitle/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne
}