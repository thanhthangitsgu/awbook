import roleActions from "../actions/roleActions";
import axiosClient from "./axiousClient";
const roleInit = () => async (dispatch) => {
    const detail = await axiosClient.get('api/permission-detail/1');
    const permission = await axiosClient.get('api/permission');
    dispatch(roleActions.handleInit(detail.data, permission.data))
}
export default {    
    roleInit
}