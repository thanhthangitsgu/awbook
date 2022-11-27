import roleActions from "../actions/roleActions";
import axiosClient from "./axiousClient";
const roleInit = () => async (dispatch) => {
    const detail = await axiosClient.get('api/permission-detail/1');
    const permission = await axiosClient.get('api/permission');
    const role = await axiosClient.get('api/position');
    dispatch(roleActions.handleInit(detail.data, permission.data, role.data))
}
export default {
    roleInit
}