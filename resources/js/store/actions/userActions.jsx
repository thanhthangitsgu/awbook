const getProfile = (res) => {
    return {
        type: 'user/getprofile',
        payload: res
    }
}
const getAll = (res) => {
    return {
        type: 'user/getall',
        payload: res
    }
}
const addOne = (res) => {
    return {
        type: 'user/addone',
        payload: res
    }
}
const updateOne = (res) => {
    return {
        type: 'user/updateone',
        payload: res
    }
}
const deleteOne = (res) => {
    return {
        type: 'user/deleteone',
        payload: res
    }
}
export default {
    getAll, addOne, updateOne, deleteOne, getProfile
}