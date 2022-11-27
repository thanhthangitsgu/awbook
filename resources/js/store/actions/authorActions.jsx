const getAll = (res) => {
    return {
        type: 'author/getAll',
        payload: { res: res }
    }
}

export default {
    getAll
}