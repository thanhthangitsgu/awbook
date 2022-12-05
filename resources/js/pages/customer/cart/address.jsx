import React from "react";
import svg from "../../../components/svg";
const AddressBill = () => {
    return (
        <div className="payment-content">
            <div className="title">
                <div className="about">Địa chỉ giao hàng</div>
                <button>{svg.btnEdit}</button>
            </div>
            <div className="person">
                <div className="person-item">
                    <span className="person-title">Phan Thanh Thắng (0355082545) </span>
                </div>
                <div className="person-item">
                    <span className="person-title">Địa chỉ: </span>
                    <span className="person-info">73 An Dương Vương, Phường 08, Quận 5, Thành phố Hồ Chí Minh</span>
                </div>
            </div>
        </div>
    )
}
export default React.memo(AddressBill)