import React from "react";
const RegisterForm = () => {
    return (
        <div className="register-form">
            <form action="">
                <input type="text" placeholder="Họ và tên" />
                <input type="text" placeholder="Email" name="emailRe" />
                <input type="text" placeholder="Mật khẩu" name="passwordRe" />
                <input type="text" placeholder="Nhập lại mật khẩu" name="confirmRe" />
                <button className="btn-register"> Đăng ký</button>
            </form>
        </div>
    )
}
export default React.memo(RegisterForm);