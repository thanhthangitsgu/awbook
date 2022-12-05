import React from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../../public/images/icon/man-user-pngrepo-com.png"
import allAPI from "../store/api/allAPI";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import globalFunctions from "../globalFunctions";
const NavBar = () => {
    const role = useSelector(state => state.role);
    const [roleList, setroleList] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allAPI.roleAPI.roleInit());
    }, [])
    useEffect(() => {
        let detail = role.detail ? role.detail.data : undefined;
        let permission = role.permission ? role.permission.data : undefined;
        let list = [];
        detail && detail.map((element, index) => {
            let temp = permission.filter(item => item.id === element.permission_id)[0];
            list.push(temp);
        })
        setroleList(list);
    }, [role])
    return (
        <div className="nav-bar">
            <div className="profile">
                <div className="profile-image">
                    <img src={avatar} />
                </div>
                <div className="profile-option">
                    <div className="profile-name">Hello Admin</div>
                    <div className="profile-edit">Cài đặt tài khoản</div>
                </div>
            </div>
            <div className="nav-list">
                {roleList && roleList.map((element, index) => {
                    return (
                        <NavLink to={globalFunctions.formatLink(element.name.replace('Quản lý', ''))} className={({ isActive }) => isActive ? "nav-active" : undefined} key={index}>
                            <div className="nav-item" key={index}>
                                <div className="item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide" viewBox="0 0 16 16">
                                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                                    </svg>
                                </div>
                                {element.name.replace('Quản lý', 'QL')}
                            </div>
                        </NavLink>
                    )
                })}
            </div>
            <div className="admin-logout">
                <div className="logout-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </div>
                Đăng xuất
            </div>
        </div>
    )
}
export default React.memo(NavBar);