import { Modal } from "react-bootstrap"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../store/actions/allActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import allAPI from "../../store/api/allAPI";
export default function AuForm({ setshowAuForm, showAuForm, handleCloseAuForm }) {
    const [openLogin, setOpenLogin] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const auth = useSelector(state => state.auth);
    const profile = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        validEmailRe: false,
        validPasswordRe: true,
        validFullnameRe: false,
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
    const handleOnChangeRegister = (event) => { }
    //     let name = event.target.name;
    //     let val = event.target.value;
    //     let valid = true;
    //     let reFullName = /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/g
    //     switch (name) {
    //         case "fullnameRe":
    //             valid = (reFullName.test(val.toLowerCase()));
    //             setStateRegister({ ...stateRegister, [name]: val, validFullnameRe: true });
    //             setStateRegister({ ...stateRegister, validFullnameRe: true })
    //             //setStateRegister({validFullnameRe: true})
    //             console.log("check fullname", stateRegister.validFullnameRe);
    //             break;
    //         case "emailRe":
    //             valid = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)));
    //             setStateRegister({ ...stateRegister, [name]: val, validEmailRe: valid });
    //             break;
    //         case "passwordRe":
    //             valid = val.length && val.length >= 8
    //             setStateRegister({ ...stateRegister, [name]: val, validPasswordRe: valid });
    //             break;
    //         default:
    //             valid = (val === stateRegister.passwordRe)
    //             setStateRegister({ ...stateRegister, [name]: val, validPasswordRe: valid });
    //     }
    //     //setStateRegister({...stateRegister, validFullnameRe: true});
    //     console.log(stateRegister);
    // }
    const checkOutside = () => {
        handleCloseAuForm();
    }


    const handleSubmitLogin = (event) => {
        event.preventDefault();
        dispatch(allActions.authActions.fetchAu({ stateLogin }));
    }
    const handleSubmitRegister = (event) => {
        event.preventDefault();

    }
    useEffect(() => {
        if (auth.response && auth.response === "success") {
            setIsLogged(true);
            localStorage.setItem('token', auth.result.token);
            dispatch(allAPI.userAPI.getProfile());
       
        }
    }, [auth]);

    useEffect(() => {
        if (profile.response) {
            if (profile.result.user.poisition_id == 1) navigate('/admin');
        }
    }, [profile])

    
    const logInForm = (
        <div className="login-form">
            <form action="">
                <input type="text" placeholder="Email" name="emailLogin" value={stateLogin.email} onChange={() => handleOnChangeLogin(event)} />
                <input type="text" placeholder="Mật khẩu" name="passwordLogin" value={stateLogin.password} onChange={() => handleOnChangeLogin(event)} />
                <button className="btn-login" disabled={stateLogin.validEmail === false || stateLogin.validPassword === false} onClick={() => handleSubmitLogin(event)}> Đăng nhập</button>
                <div className="forgot-password">Quên mật khẩu?</div>
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
                <button className="btn-register" disabled={stateRegister.validEmailRe === false || stateRegister.validFullnameRe === false || stateRegister.validPasswordRe === false}> Đăng ký</button>
            </form>
        </div>
    )
    return (
        <Modal show={showAuForm && !isLogged} onHide={checkOutside} centered id="auth-form">
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