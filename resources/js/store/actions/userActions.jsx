const getProfle = (res) => {
    return {
        type: 'user/getprofile',
        payload: { res: res }
    }
}
const getAll = (res) => {
    return {
        type: 'user/getall',
        payload: { res: res }
    }
}
const deleteOne = (res) => {
    return {
        type: 'user/delete',
        payload: { res: res }
    }
}

export default {
    getProfle,
    getAll,
    deleteOne,
}