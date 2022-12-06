import { useState } from "react"
import OutsideAlerter from "./OutsideAlerter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import allAPI from "../store/api/allAPI";
import modalActions from "../store/actions/modalActions";
import svg from "./svg";
export default function UserBox({ handleShowAuForm }) {
    const current = useSelector(state => state.user).current;
    const [user, setuser] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        current.data && current.data.response && setuser(current.data.response);
    }, [current])
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const handleCloseBox = () => {
        setOpen(false);
    }
    const hanldeOnClick = () => {
        setOpen(!open);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setuser([]);
        setTimeout(() => {
            nav('/');
        }, 500);

    }
    const showAuForm = () => {
        dispatch(modalActions.login(true));
    }
    const isLogged = (
        <>
            <div className={open === true ? "box-account-active box-account" : "box-account"} onClick={() => hanldeOnClick()}>
                <button className={open === true ? "btn-click btn-popup" : "btn-popup"} >
                    {svg.userBox}
                </button>
                <div className="box-name-accout">{user.surname + " " + user.name}</div>
            </div>
            <div className={open === true ? "box-body" : "box-body box-hiden"}>
                <div className="box-content">
                    <div className="box-header">
                        <div className="box-title">TÀI KHOẢN</div>
                        <button className="box-btn-close" onClick={() => handleCloseBox()}>
                            {svg.btnCloseBox}
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
                            <div className="box-item-content" onClick=
                                {() => {
                                    setOpen(false);
                                    nav('/customer/bill')
                                }}>Đơn hàng của tôi
                            </div>
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
    return (
        user.name ? isLogged : (
            <div className="box-account" onClick={() => showAuForm()}>
                <button className={open === true ? "btn-click btn-popup" : "btn-popup"} >
                   {svg.btnLogout}
                </button>
            </div>
        )
    )
}