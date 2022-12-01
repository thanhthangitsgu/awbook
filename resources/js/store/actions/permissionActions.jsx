const getAll = (res) => {
    return {
        type: 'permission/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'permission/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'permission/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'permission/deleteone',
        payload: res
    }
}
const getList = (res) =>{
    return {
        type: 'permission/getlist',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne, getList
}