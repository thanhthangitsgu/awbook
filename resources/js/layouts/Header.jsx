import React from 'react'
import SearchBar from '../components/SearchBar'
import NotiBox from '../components/NotiBox'
import CartBox from '../components/CartBox'
import CategoryBox from '../components/CategoryBox'
import UserBox from '../components/UserBox'
import '../../css/header.scss'
import '../../css/app.scss'
import Menu from '../components/Menu'
import { NavLink, Link } from 'react-router-dom'

class Header extends React.Component {
  listItem = ['Sách văn học', 'Sách thiếu nhi', 'Sách cổ điển']

  render() {
    const handleShowAuForm = () =>{
      this.props.handleShowAuForm();
    }
    return (
      <div className="header">
        <div className="header-main">
          <div className="header-logo">AWBOOK</div>
          <div className="header-content">
            <SearchBar></SearchBar>
            <div className="header-option">
              <CategoryBox></CategoryBox>
              <NotiBox></NotiBox>
              <div className="cart-box"><CartBox></CartBox></div>
              <div className="user-box"><UserBox handleShowAuForm = {handleShowAuForm}></UserBox></div>
              {/*<div className="user-box"><UserBox showAuForm = {this.props.showAuForm}></UserBox></div>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
