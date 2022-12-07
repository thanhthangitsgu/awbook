import NavBar from "../layouts/NavBar"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allAPI from "../store/api/allAPI";
export default function Admin() {
    const dispatch = useDispatch();
    const nav = useNavigate()
    const user = useSelector(state => state.auth).user;
    useEffect(() => {
        dispatch(allAPI.authAPI.getProfile())
    }, [])

    useEffect(() => {
        if (user.length != undefined && user.length == 0) nav('/login')
    }, [user])
    return (
        <div className="admin-page">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>

    )
}