const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
    }
})
export default axiosClient;