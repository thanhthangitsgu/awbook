import { useState } from "react"
import OutsideAlerter from "./OutsideAlerter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import allAPI from "../store/api/allAPI";
export default function UserBox({ handleShowAuForm }) {
    const current = useSelector(state => state.user).current;
    const [user, setuser] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allAPI.userAPI.getProfile())
    }, [])
    useEffect(() => {
        current.data && current.data.response && setuser(current.data.response);
    }, [current])
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const handleCloseBox = () => {
        setOpen(false);
    }
    const handleOpenBox = () => {
        setOpen(true);
    }
    const hanldeOnClick = () => {
        setOpen(!open);
    }

    const logout = () => {
        localStorage.removeItem('token');
        nav('/');
    }

    const isLogged = (
        <>
            <div className={open === true ? "box-account-active box-account" : "box-account"} onClick={() => hanldeOnClick()}>
                <button className={open === true ? "btn-click btn-popup" : "btn-popup"} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </button>
                <div className="box-name-accout">{user.surname + " " + user.name}</div>
            </div>
            <div className={open === true ? "box-body" : "box-body box-hiden"}>
                <div className="box-content">
                    <div className="box-header">
                        <div className="box-title">TÀI KHOẢN</div>
                        <button className="box-btn-close" onClick={() => handleCloseBox()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className="box-list-item">
                        <div className="box-item">
                            <div className="box-icon">
                                <img src="https://img.icons8.com/color/240/null/about.png" />
                            </div>
                            <div className="box-item-content">Thông tin cá nhân</div>
                        </div>
                        <div className="box-item">
                            <div className="box-icon">
                                <img src="https://img.icons8.com/fluency/96/null/paid-bill.png" />
                            </div>
                            <div className="box-item-content">Đơn hàng của tôi</div>
                        </div>
                        <div className="box-item">
                            <div className="box-icon">
                                <img src="https://img.icons8.com/color/96/null/forgot-password.png" />
                            </div>
                            <div className="box-item-content">Đổi mật khẩu</div>
                        </div>
                    </div>
                    <div className="box-footer" onClick={logout}>Đăng xuất</div>
                </div>
                <div className="box-triangle"></div>
            </div>
        </>
    )
    const notLogged = (
        <div className="box-account" onClick={() => handleShowAuForm()}>
            <button className={open === true ? "btn-click btn-popup" : "btn-popup"} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </button>
        </div>
    )
    return (
        user.name ? OutsideAlerter(isLogged, handleCloseBox) : OutsideAlerter(notLogged, handleCloseBox)
    )
}