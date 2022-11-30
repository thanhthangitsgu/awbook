const getListBookTitle = (res) => {
    console.log("check add",res)
    return {
        type: 'book/getListBookTitle',
        payload: { res }
    }
}

const addBookTitle = (res) => {
    return {
        type: 'book/addBookTitle',
        payload: { res }
    }
}

const deleteBookTitle = (res) => {
    return {
        type: 'book/deleteBookTitle',
        payload: { res: res }
    }
}

export default {
    getListBookTitle,
    addBookTitle,
    deleteBookTitle
}