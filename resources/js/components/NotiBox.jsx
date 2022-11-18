import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
class NotiBox extends React.Component {
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
                <button className={this.state.show === true ? "btn-click btn-popup" : "btn-popup"} onClick={() => show()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-bell"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                </button>
                <div className={this.state.show === true ? "box-body" : "box-body box-hiden"}>
                    <div className="box-content">
                        <div className="box-header">
                            <div className="box-title">THÔNG BÁO</div>
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
                        <div className="box-list-item" style={{ width: "25rem" }}>
                            {noti.map((element, index) => {
                                return (
                                    <div className="box-item" key={index}>
                                        <div className="box-icon">
                                            <img src="https://img.icons8.com/fluency/48/null/alarm.png" />
                                        </div>
                                        <div className="box-item-content">{element.name}</div>
                                        <div className="box-item-content-2" style={{ fontSize: '0.8rem', fontStyle: 'italic', marginLeft: '1rem', textAlign: 'right' }}>{element.time}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="box-footer">Xem tất cả</div>
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

export default connect(mapStateToProps)(NotiBox)
