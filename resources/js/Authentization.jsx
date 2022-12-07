import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom";
import Home from "./pages/customer/Home";
export default function Authentization({ role }) {
    const userLogin = useSelector(state => state.auth).user;
    return (userLogin.id && userLogin.position_id == role) ? <Outlet /> : <Home></Home>
}
