import React from "react";
import SearchBar from "../components/SearchBar";
import Notification from "../components/Notification/Notification";
import Cart from "../components/Cart";
import User from "../components/User";
import Menu from "../components/Menu";
import {
    NavLink,
    Link
  } from "react-router-dom";

class Header extends React.Component {
    listItem = ["Sách văn học", "Sách thiếu nhi", "Sách cổ điển"];
    render() {
        return (
            <div className="home">
                <div className="header">
                    <div className="header-main">
                        <div className="header-logo">AWBOOK</div>
                        <div className="header-content">
                            <SearchBar></SearchBar>
                            <div className="header-option">
                                <Notification></Notification>
                                <Cart></Cart>
                                <User></User>
                            </div>
                        </div>
                    </div>
                    {/*<div className="header-menu">
                        *<NavLink to ="/" exact className="menu-dropdown" activeClassName="active-page"><Menu name="Trang chủ" list={[]}></Menu></NavLink>
                        <NavLink to ="/about" className="menu-dropdown" activeClassName="active-page"><Menu name="Giới thiệu" list={[]}></Menu></NavLink>
                        <NavLink to ="/book" className="menu-dropdown" activeClassName="active-page"><Menu name="Sách" list={this.listItem}></Menu></NavLink>
                        <NavLink to ="/contact" className="menu-dropdown" activeClassName="active-page"><Menu name="Liên hệ" list={[]}></Menu></NavLink>
        <NavLink to ="/discount" className="menu-dropdown" activeClassName="active-page"><Menu name="Khuyến mãi" list={[]}></Menu></NavLink> 
                    </div>*/}
                </div>
            </div>
        );
    }
}
export default Header;
