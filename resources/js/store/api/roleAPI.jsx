import axios from "axios";
import roleActions from "../actions/roleActions";
import axiosClient from "./axiousClient";
const roleInit = () => async (dispatch) => {
    const detail = axiosClient.get('api/permission-detail/1');
    const permission = axiosClient.get('api/permission');
    const role = axiosClient.get('api/position');
    dispatch(roleActions.handleInit(detail.data, permission.data, role.data))
    await axios.all([detail, permission, role]).then(axios.spread((res1, res2, res3) => {
        dispatch(roleActions.handleInit(res1.data, res2.data, res3.data));
    }));
}

export default {
    roleInit
}