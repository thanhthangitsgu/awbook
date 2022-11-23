import NavBar from "../layouts/NavBar"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import allAPI from "../store/api/allAPI";
export default function Admin() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allAPI.userAPI.getAll());
    }, []);

    useEffect(() => {
        dispatch(allAPI.roleAPI.roleInit())
    }, [])

    useEffect(() =>{
        dispatch(allAPI.userAPI.getProfile())
    },[])
    
    return (
        <div className="admin-page">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>

    )
}