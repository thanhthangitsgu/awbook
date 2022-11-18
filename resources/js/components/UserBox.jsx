import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
class UserBox extends React.Component {
    state = {
        show: false
    }
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (
            this.wrapperRef &&
            !this.wrapperRef.current.contains(event.target)
        ) {
            this.setState({
                show: false
            })
        }
    }
    render() {
        const noti = this.props.noti;
        const show = () => {
            this.setState({
                show: !this.state.show
            })
        }

        return (
            <div className="popup-box" ref={this.wrapperRef}>
                <div className={this.state.show === true ? "box-account-active box-account" : "box-account"} onClick={() => show()}>
                    <button className={this.state.show === true ? "btn-click btn-popup" : "btn-popup"} >
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
                    <div className="box-name-accout">Phan Thanh Thắng</div>
                </div>
                <div className={this.state.show === true ? "box-body" : "box-body box-hiden"}>
                    <div className="box-content">
                        <div className="box-header">
                            <div className="box-title">TÀI KHOẢN</div>
                            <button className="box-btn-close" onClick={() => show()}>
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
                        <div className="box-footer">Đăng xuất</div>
                    </div>
                    <div className="box-triangle"></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { noti: state.noti.list }
}

export default connect(mapStateToProps)(UserBox)
