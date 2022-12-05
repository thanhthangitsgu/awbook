import React from "react";
import { useSelector } from "react-redux";
import AddressBill from "../cart/address"
import PaymentBill from "../cart/bill"
import { useState } from "react";
import svg from "../../../components/svg";
import { useDispatch } from "react-redux";
import allAPI from "../../../store/api/allAPI";
import { useEffect } from "react";
import uuid from "react-uuid";
const PayMent = () => {
    const [listBook, setlistBook] = useState(useSelector(state => state.cart).listPay);
    const methodReducer = useSelector(state => state.method).listMethod;
    const [listMethod, setlistMethod] = useState([]);
    const partnerReducer = useSelector(state => state.partner).listPartner;
    const [listPartner, setlistPartner] = useState([]);
    const dispatch = useDispatch();
    const [shipFee, setshipFee] = useState(0);
    const [payment, setpayment] = useState(1);
    const [partner, setpartner] = useState(1);
    //Khởi tạo dữ liệu
    useEffect(() => {
        dispatch(allAPI.methodAPI.getAll());
        dispatch(allAPI.partnerAPI.getAll());
    }, []);

    //Lấy danh sách phương thức
    useEffect(() => {
        methodReducer.data && methodReducer.data.data && setlistMethod(methodReducer.data.data);
    }, [methodReducer])
    //lấy danh sách đơn vị vận chuyển
    useEffect(() => {
        let data = (partnerReducer.data && partnerReducer.data.data) ? partnerReducer.data.data : [];
        data != [] && (data = data.filter(item => item.type == "Đơn vị vận chuyển"));
        data != [] && setlistPartner(data);
    }, [partnerReducer])
    //Cập nhật Form
    const handleOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name == "method") {
            setpayment(value)
        } else {
            setpartner(value);
        }
    }

    const handleOnPay = () => {
        let data = {
            payment_id: payment,
            partner_id: partner,
            ship_charges: shipFee,
            listBook: listBook
        }
        dispatch(allAPI.billAPI.addOne(data));
    }

    return (
        <div className="page-book">
            <div className="cart-title">
                {svg.titleCart}
                <div className="title">Thanh toán</div>
            </div>
            <div className="page-cart-body">
                <div className="page-cart-content">
                    <div className="method">
                        <div className="header">
                            <div>Phương thức thanh toán</div>
                        </div>
                        <div className="input-list">
                            {listMethod.length > 0 && listMethod.map((element, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <input type="radio" value={element.id} name="method" id={'method_' + element.id} defaultChecked={index == 0} onChange={() => handleOnChange(event)} />
                                        <label htmlFor={'method_' + element.id}>{"Thanh toán bằng " + element.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="method">
                        <div className="header">
                            <div>Đơn vị vận chuyển</div>
                        </div>
                        <div className="input-list">
                            {listPartner.length > 0 && listPartner.map((element, index) => {
                                return (
                                    <div className="item">
                                        <input type="radio" value={element.id} name="partner" id={'partner_' + element.id} defaultChecked={index == 0} onChange={() => handleOnChange(event)} />
                                        <label htmlFor={'partner_' + element.id}>{element.name}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="page-cart-payment">
                    <AddressBill></AddressBill>
                    <PaymentBill listBook={listBook} fee={1} func={handleOnPay}></PaymentBill>
                </div>
            </div>
        </div >
    )
}
export default React.memo(PayMent);