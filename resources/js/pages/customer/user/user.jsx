import React from "react";
import UserForm from "../../../components/form/UserForm"
import { useDispatch } from "react-redux";
import allAPI from "../../../store/api/allAPI";
import { useEffect } from "react";
import { useState } from "react";
import axiosClient from "../../../store/api/axiousClient";
const UserPageCustomer = () => {
    const dispatch = useDispatch();
    const [user, setuser] = useState({ id: 1 });
    useEffect(() => {
        axiosClient.get('api/profile').then((response) => {
            response.data.status && setuser(response.data.response);
        })
    }, [])
    useEffect(() => {
        dispatch(allAPI.userAPI.getAll());
    }, []);
    return (
        <UserForm id={user.id} action={'manage'}></UserForm>
    )
}
export default React.memo(UserPageCustomer);