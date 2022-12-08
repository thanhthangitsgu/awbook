import React from "react";
import logo from "../../../../public/images/logo/logo-orange.png"
import { useState } from "react";
import { useEffect } from "react";
import globalFunctions from "../../globalFunctions";
import { useDispatch, useSelector } from "react-redux";
import allAPI from "../../store/api/allAPI"
import authorAPI from "../../store/api/authorAPI";
import { useNavigate } from "react-router-dom";
const LoginAdmin = () => {
    const [dataForm, setdataForm] = useState({ email: "", password: "" });
    const [validData, setvalidData] = useState({ email: false, password: false });
    const auth = useSelector(state => state.auth).login;
    const dispatch = useDispatch();
    const navi = useNavigate();

    const handleChangeForm = (event) => {
        setdataForm({ ...dataForm, [event.target.name]: event.target.value });
    }
    useEffect(() => {
        setvalidData({
            email: globalFunctions.validEmail(dataForm.email),
            password: dataForm.password.length && dataForm.password.length >= 8
        })
    }, [dataForm]);

    const submitLogin = (event) => {
        event.preventDefault();
        dispatch(allAPI.authAPI.login(dataForm));
    }
    useEffect(() => {
        if (auth.response && auth.response == "success") {
            localStorage.setItem('token', auth.result.token);
            dispatch(allAPI.authAPI.getProfile())
            setTimeout(() => {
                navi('/admin')
            }, 1000);
        }
    }, [auth])
    return (
        <div className="login-page">
            <div className="login-background">
            </div>
            <div className="login-background-form">
            </div>
            <div className="login-form-admin">
                <div className="login-logo">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="logo-name">
                        BOOK
                    </div>
                </div>
                <form action="">
                    <input type="text" placeholder="Email" name="email" value={dataForm.email} onChange={() => handleChangeForm(event)} />
                    <input type="password" placeholder="Mật khẩu" name="password" value={dataForm.password} onChange={() => handleChangeForm(event)} />
                    <button disabled={false} onClick={() => submitLogin(event)}>Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}
export default React.memo(LoginAdmin);