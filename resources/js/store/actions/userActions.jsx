const getProfle = (res) => {
    return {
        type: 'user/getprofile',
        payload: {res: res}
    }
}
const getAll = (res) => {
    return {
        type: 'user/getall',
        payload: {res: res}
    }
}

export default {
    getProfle,
    getAll
}