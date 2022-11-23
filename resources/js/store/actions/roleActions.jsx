const handleInit = (detail, permission) => {
    return {
        type: 'role/init',
        payload: { detail: detail, permission: permission }
    }
}

export default {
    handleInit
}