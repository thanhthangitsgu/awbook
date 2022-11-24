import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import Home from "./pages/customer/Home";
import { useNavigate } from "react-router-dom";
import useEffectOnce from "./useEffectOne";
export default function Authentization({ role }) {
    const userLogin = useSelector(state => state.auth);
    const roleuser = userLogin.response ? userLogin.result.user.position_id : "";
    const navigate = useNavigate();
    const nav = () => {
        navigate('/')
    }
    useEffectOnce(nav);
    return userLogin.result ? <Outlet /> : <Home></Home>
}
