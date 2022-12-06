import React from "react";
import { useEffect, useState } from "react";
import globalFunctions from "../../../globalFunctions";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const PaymentBill = ({ listBook, fee, func }) => {
    const [numberList, setnumberList] = useState(0);
    const [totalList, settotalList] = useState(0);
    const [discountList, setDiscountList] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let total = 0;
        let discount = 0;
        listBook.length && listBook.map((element) => {
            total += element.price * element.numberCart;
            discount += ((element.price * element.promotion.discount) / 100) * element.numberCart;
        })
        setnumberList(listBook.length);
        settotalList(total);
        setDiscountList(discount);
    }, [listBook]);
    const handleOnPay = () => {
        func();
        setTimeout(() => {
            navigate("/")
        }, 500)
    }
    return (
        <>
            <div className="payment-bill">
                <div className="person-item">
                    <span className="person-info">Số lượng</span>
                    <span className="person-title">{numberList}</span>
                </div>
                <div className="person-item">
                    <span className="person-info">Tổng giá gốc</span>
                    <span className="person-title">{globalFunctions.formatCash(totalList)} </span>
                </div>
                <div className="person-item">
                    <span className="person-info">Giảm giá</span>
                    <span className="person-title">- {globalFunctions.formatCash(discountList)}</span>
                </div>
                {fee > 0 && (
                    <div className="person-item">
                        <span className="person-info">Phí giao hàng</span>
                        <span className="person-title">{globalFunctions.formatCash(fee)}</span>
                    </div>
                )}
                <div className="person-item-total">
                    <span className="person-info">Tổng cộng</span>
                    <span className="person-title">{globalFunctions.formatCash(totalList - discountList + fee)}</span>
                </div>
            </div>
            {fee == 0 && (
                <Link to="/payment"><button className="pay" disabled={numberList <= 0}>Mua hàng</button></Link>
            )}
            {fee > 0 && (
                <button className="pay" onClick={() => handleOnPay()}>Thanh toán</button>
            )}
        </>
    )
}
export default React.memo(PaymentBill)