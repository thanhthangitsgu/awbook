import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import globalFunctions from "../../globalFunctions";
import allAPI from "../../store/api/allAPI";
const LoginForm = ({ handleHidenBox }) => {
    const INITIAL_DATA = { email: "", password: "", }
    const VALID_DATA = { email: false, password: false }
    const [dataForm, setdataForm] = useState(INITIAL_DATA);
    const [validData, setvalidData] = useState(VALID_DATA);
    const authReducer = useSelector(state => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        let data = {
            email: globalFunctions.validEmail(dataForm.email),
            password: dataForm.password.length && dataForm.password.length >= 8
        }
        setvalidData(data);
    }, [dataForm])
    const onChangeForm = (event) => {
        setdataForm({ ...dataForm, [event.target.name]: event.target.value });
    }
    const submitLogin = (event) => {
        event.preventDefault();
        dispatch(allAPI.authAPI.login(dataForm));
    }
    useEffect(() => {
        if (authReducer.login.response == "success") {
            localStorage.setItem('token', authReducer.login.result.token);
            setTimeout(() => {
                handleHidenBox();
                window.location.href = "/"
               // navigate('/');
            }, 300)

        }
    }, [authReducer])
    return (
        <div className="login-form">
            <form action="">
                <input type="text" placeholder="Email" name="email" onChange={() => onChangeForm(event)} />
                <input type="text" placeholder="Mật khẩu" name="password" onChange={() => onChangeForm(event)} />
                <button className="btn-login" disabled={!validData.email || !validData.password} onClick={() => submitLogin(event)}> Đăng nhập</button>
                <div className="forgot-password">Quên mật khẩu?</div>
            </form>
        </div>
    )
}
export default React.memo(LoginForm)