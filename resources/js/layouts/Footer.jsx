import React from 'react'
import logo from '../../../public/images/logo/logo.png'
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-title">
          <div className="header-logo">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
            <div className="logo-name">
              BOOK
            </div>
          </div>
          <div className="footer-icon">
            <img src="https://img.icons8.com/fluency/240/null/facebook-new.png" />
            <img src="https://img.icons8.com/3d-fluency/750/null/gmail.png" />
            <img src="https://img.icons8.com/fluency/144/null/instagram-new.png" />
          </div>
          <div className="footer-des">
            Awbook nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ
            đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả cửa
            hàng trên toàn quốc.
          </div>
        </div>
        <div className="footer-option">
          <div>
            <p className="footer-option-title">LIÊN HỆ</p>
            <p>
              <b>Địa chỉ</b>: 273 An Dương Vương, Phường 8, Quận 5.
            </p>
            <p>
              <b>Điện thoại</b>: 035 222 467
            </p>
            <p>
              <b>Email</b>: thanhthang.itsgu@gmail.com
            </p>
          </div>
          <div>
            <p className="footer-option-title">HỖ TRỢ</p>
            <p>Chính sách đổi trả</p>
            <p>Hỗ trợ khách hàng</p>
          </div>
        </div>
        <div className="footer-background"></div>
      </div>
    )
  }
}
export default Footer
