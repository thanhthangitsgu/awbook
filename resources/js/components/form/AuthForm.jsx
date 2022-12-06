import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const AuthForm = () => {
    const modalReducer = useSelector(state => state.modal);
    const [isShow, setisShow] = useState(false);
    const [formLogin, setformLogin] = useState(true);
    const dispatch = useDispatch();
    const handleHidenBox = () => {
        setisShow(false)
    }
    const handleOnClickOpenForm = () => {
        setformLogin(!formLogin);
    }
    useEffect(() => {
        setisShow(modalReducer.modalLogin)
    }, [modalReducer])

    return (
        <Modal show={isShow} onHide={handleHidenBox} centered id="auth-form">
            <Modal.Header>
                <Modal.Title>
                    <div className="modal-title-au">
                        <div className={formLogin ? "modal-active" : undefined} onClick={() => handleOnClickOpenForm()}>Đăng nhập</div>
                        <div className={formLogin ? undefined : "modal-active"} onClick={() => handleOnClickOpenForm()}>Đăng ký</div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formLogin ? (
                    <LoginForm handleHidenBox = {handleHidenBox}></LoginForm>
                ) : (
                    <RegisterForm></RegisterForm>
                )}
            </Modal.Body>
        </Modal>
    )
}
export default React.memo(AuthForm);