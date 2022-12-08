import React from "react";
import { Link, Outlet, Routes, NavLink } from "react-router-dom";
import Bill from "./bill";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
const UserCustomerPage = () => {
    const user = useSelector(state => state.auth).user;
    return (
        <div className="user-page">
            <div className="page-menu">
                <div className="user-title user-item">
                    <div className="user-img">
                        <img src="http://127.0.0.1:5173/public/images/icon/man-user-pngrepo-com.png" alt="" />
                    </div>
                    <div className="user-name">
                        <div className="name">{user.surname + " " + user.name}</div>
                        <div className="email">{user.email}</div>
                    </div>
                </div>
                <NavLink to="info" className={({ isActive }) => isActive ? "active" : undefined}>
                    <div className="user-item">
                        <div className="item">
                            <div className="item-icon">
                                <img src="https://img.icons8.com/color/240/null/about.png" alt="" />
                            </div>
                            <div className="item-content">
                                Thông tin cá nhân
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="bill">
                    <div className="user-item">
                        <div className="item">
                            <div className="item-icon">
                                <img src="https://img.icons8.com/fluency/96/null/paid-bill.pnghttps://img.icons8.com/fluency/96/null/paid-bill.png" alt="" />
                            </div>
                            <div className="item-content">
                                Đơn hàng của tôi
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="changepass">
                    <div className="user-item">
                        <div className="item">
                            <div className="item-icon">
                                <img src="https://img.icons8.com/color/96/null/forgot-password.png" alt="" />
                            </div>
                            <div className="item-content">
                                Đổi mật khẩu
                            </div>
                        </div>
                    </div>
                </NavLink>
                <div className="user-item">
                    <div className="item">
                        <div className="item-icon">
                            <img src="https://img.icons8.com/cute-clipart/64/null/logout-rounded-down.png" />
                        </div>
                        <div className="item-content">
                            Đăng xuất
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <Outlet></Outlet>
            </div>
        </div>

    )
}
export default React.memo(UserCustomerPage)