import { Modal } from "react-bootstrap"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/actions/allActions";
export default function AuForm({ setshowAuForm, showAuForm, handleCloseAuForm }) {
    const [openLogin, setOpenLogin] = useState(true);
    const auth = useSelector(state => state.auth ); 
    const dispatch = useDispatch();
    // const [username, setUserName] = useState("");
    const INITIAL_STATELOGIN = {
        emailLogin: "",
        passwordLogin: "",
        validEmail: false,
        validPassword: false
    }
    const INITIAL_STATEREGISTER = {
        emailRe: "",
        passwordRe: "",
        fullnameRe: "",
        confirmRe: "",
    }
  
    const [stateLogin, setStateLogin] = useState(INITIAL_STATELOGIN);
    const [stateRegister, setStateRegister] = useState(INITIAL_STATEREGISTER);

    const handleOnClickOpenForm = () => {
        setOpenLogin(!openLogin);
    }
    const handleOnChangeLogin = (event) => {
        let val = event.target.value;
        let name = event.target.name;
        if (name == "emailLogin") {
            let valid = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)));
            setStateLogin({ ...stateLogin, [name]: val, validEmail: valid });
        } else {
            let valid = val.length >= 8
            setStateLogin({ ...stateLogin, [name]: val, validPassword: valid });
        }

    }
    const handleOnChangeRegister = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        setStateRegister({ ...stateRegister, [name]: val });
    }
    const checkOutside = () => {
        handleCloseAuForm();
    }

    const handleSubmitLogin = (event) =>{
        event.preventDefault();
        dispatch(allActions.authActions.handleLogin({stateLogin}))
        console.log(auth);
    } 

    const logInForm = (
        <div className="login-form">
            <form action="">
                <input type="text" placeholder="Email" name="emailLogin" value={stateLogin.email} onChange={() => handleOnChangeLogin( event)} />
                <input type="text" placeholder="Mật khẩu" name="passwordLogin" value={stateLogin.password} onChange={() => handleOnChangeLogin( event)} />
                <button className="btn-login" disabled = {stateLogin.validEmail === false || stateLogin.validPassword === false } onClick={() => handleSubmitLogin(event) }> Đăng nhập</button>
                <div class="forgot-password">Quên mật khẩu?</div>
            </form>
        </div>
    )
    const RegisterForm = (
        <div className="register-form">
            <form action="">
                <input type="text" placeholder="Họ và tên" name="fullnameRe" value={stateRegister.fullnameRe} onChange={() => handleOnChangeRegister(event)} />
                <input type="text" placeholder="Email" name="emailRe" value={stateRegister.emailRe} onChange={() => handleOnChangeRegister(event)} />
                <input type="text" placeholder="Mật khẩu" name="passwordRe" value={stateRegister.passwordRe} onChange={() => handleOnChangeRegister(event)} />
                <input type="text" placeholder="Nhập lại mật khẩu" name="confirmRe" value={stateRegister.confirmRe} onChange={() => handleOnChangeRegister(event)} />
                <button className="btn-register"> Đăng ký</button>
            </form>
        </div>
    )
    return (
        <Modal show={showAuForm} onHide={checkOutside} centered >
            <Modal.Header>
                <Modal.Title>
                    <div className="modal-title-au">
                        <div className={openLogin ? "modal-active" : undefined} onClick={() => handleOnClickOpenForm()}>Đăng nhập</div>
                        <div className={openLogin ? undefined : "modal-active"} onClick={() => handleOnClickOpenForm()}>Đăng ký</div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {openLogin ? logInForm : RegisterForm}
            </Modal.Body>
        </Modal>
    )
}