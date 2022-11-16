import React from "react";
class Detail extends React.Component {
    render() {
        const show = this.props.click;
        return (
            <div
                className={
                    show === true
                        ? "noti box-noti noti-active"
                        : "noti box-noti"
                }
            >
                <div
                    className={
                        show === true
                            ? "noti noti-detail noti-active"
                            : "noti noti-detail"
                    }
                >
                    <div className="noti noti-title">
                        <div className="noti title">Notification</div>
                        <button className="btn-close-noti" onClick={this.props.action}>
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
                    <div className="noti noti-item">Noti1</div>
                    <div className="noti noti-item">Noti2</div>
                    <div className="noti noti-item">Noti3</div>
                    <div className="noti noti-item last-item">Xem tất cả</div>
                </div>
                <div
                    className={
                        show === true
                            ? "noti triangle noti-active"
                            : "noti triangle"
                    }
                ></div>
            </div>
        );
    }
}
export default Detail;
