const getAll = (res) => {
    return {
        type: 'author/getAll',
        payload: { res: res }
    }
}
const updateOne = (res) =>{
    return {
        type: 'author/updateone',
        payload: {res: res}
    }
}
const addOne = (res) =>{
    return {
        type: 'author/add',
        payload: {res: res}
    }
}
const deleteOne = (res) =>{
    return{
        type: 'author/delete',
        payload: {res: res}
    }
}
export default {
    getAll, updateOne, addOne, deleteOne
}