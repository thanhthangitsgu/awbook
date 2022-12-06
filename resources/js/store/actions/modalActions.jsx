const login = (res) => {
    return {
        type: 'modal/login',
        payload: res
    }
}
export default  {
    login
}