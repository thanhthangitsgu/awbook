import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom";
import Home from "./pages/customer/Home";
export default function Authentization({ role }) {
    const token = useSelector(state => state.auth).token;
    return (token.length && token.length > 0) ? <Outlet /> : <Home></Home>
}
