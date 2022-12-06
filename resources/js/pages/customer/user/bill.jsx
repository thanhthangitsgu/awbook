import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import globalFunctions from "../../../globalFunctions";
import allAPI from "../../../store/api/allAPI";
const BillPageCustomer = () => {
    const billReducer = useSelector(state => state.bill).listBill;
    const current = useSelector(state => state.user).current;
    const [listBill, setlistBill] = useState([]);
    const dispatch = useDispatch();
    //Lấy dữ liệu
    useEffect(() => {
        dispatch(allAPI.billAPI.getAll());
        dispatch(allAPI.userAPI.getProfile());
    }, [])
    //Khởi tạo listBill
    useEffect(() => {
        let data = [];
        current.data && current.data.status && billReducer.data && billReducer.data.status && (
            data = billReducer.data.data.filter(item => item.customer_id == current.data.response.id)
        )
        setlistBill(data);
    }, [billReducer, current])

    return (
        <div className="page-bill-content">
            <div className="header">
                <div className="title">Mã hóa đơn</div>
                <div className="number">Số lượng</div>
                <div className="total">Tổng tiền</div>
                <div className="time">Thời gian</div>
                <div className="state">Tình trạng</div>
            </div>
            <div className="bill-list">
                {listBill.length > 0 && listBill.map((element, index) => {
                    return (
                        <Link to={"" + element.id}>
                            <div className="bill-item" key={index}>
                                <div className="title">#{element.id}</div>
                                <div className="number">1</div>
                                <div className="total">{globalFunctions.formatCash(element.total_cost)}</div>
                                <div className="time">{element.created_at}</div>
                                <div className="state">Đã hoàn thành</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default React.memo(BillPageCustomer)