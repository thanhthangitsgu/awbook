import React from 'react'
import SearchBar from '../components/SearchBar'
import NotiBox from '../components/NotiBox'
import CategoryBox from '../components/CategoryBox'
import UserBox from '../components/UserBox'
import CartBox from '../components/CartBox'
import '../../css/header.scss'
import '../../css/app.scss'
import { Link } from 'react-router-dom'
import logo from '../../../public/images/logo/logo.png'

class Header extends React.Component {
  listItem = ['Sách văn học', 'Sách thiếu nhi', 'Sách cổ điển']

  render() {
    const handleShowAuForm = () => {
      this.props.handleShowAuForm();
    }
    return (
      <div className="header">
        <div className="header-main">
          <Link to="/">
            <div className="header-logo">
              <div className="logo-img">
                <img src={logo} alt="" />
              </div>
              <div className="logo-name">
                BOOK
              </div>
            </div>
          </Link>
          <div className="header-content">
            <SearchBar></SearchBar>
            <div className="header-option">
              <CategoryBox></CategoryBox>
              {/* <NotiBox></NotiBox> */}
              <div className="cart-box"><CartBox></CartBox></div>
              <div className="user-box"><UserBox handleShowAuForm={handleShowAuForm}></UserBox></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
