const handleInit = (detail, permission, role) => {
    return {
        type: 'role/init',
        payload: { detail: detail, permission: permission, role: role }
    }
}

export default {
    handleInit
}