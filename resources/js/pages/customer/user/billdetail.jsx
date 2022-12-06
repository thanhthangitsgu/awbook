import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import allAPI from "../../../store/api/allAPI";
import globalFunctions from "../../../globalFunctions";
const BillDetail = () => {
    const billReducer = useSelector(state => state.bill).listDetail;
    const bookReducer = useSelector(state => state.book).listBook;
    const [listDetail, setlistDetail] = useState("");
    const param = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allAPI.billAPI.getDetail(param.id));
        dispatch(allAPI.bookAPI.getAll());
    }, []);

    useEffect(() => {
        let data = [];
        billReducer.data && billReducer.data.status && (data = billReducer.data.data);
        bookReducer.data && bookReducer.data.data && data.length && (
            data.map((element) => {
                let temp = bookReducer.data.data.filter(item => item.id == element.book_id)[0];
                element.book = temp;
            })
        )
        setlistDetail(data);
    }, [bookReducer, billReducer]);
    return (
        <div className="page-cart-content" style={{ width: "100%" }}>
            {/* <div className="card-info">
                <div className="card">
                    <div className="card-title">Phương thức thanh toán</div>
                    <div className="card-content">Tiền mặt</div>
                </div>
                <div className="card">
                    <div className="card-title">Đơn vị vận chuyển</div>
                    <div className="card-content">Tiền mặt</div>
                </div>
                <div className="card">
                    <div className="card-title">Tổng giá tiền</div>
                    <div className="card-content">100.000đ</div>
                </div>
            </div> */}
            <div className="header">
                <div className="check">#</div>
                <div className="title">Sản phẩm</div>
                <div className="price">Đơn giá</div>
                <div className="number">Số lượng</div>
                <div className="price">Khuyến mãi</div>
                <div className="total">Thành tiền</div>
            </div>
            <div className="cart-list">
                {listDetail.length > 0 && listDetail.map((element, index) => {
                    return (
                        <div className="item" key={index} style={{borderTop: "1px solid rgb(240, 240, 240)"}}>
                            <div className="check">{index + 1}</div>
                            {element.book && (
                                <>
                                    <div className="title">
                                        <div className="image">
                                            <img src={'http://127.0.0.1:5173/public/' + element.book.image} alt="" />
                                        </div>
                                        <div className="about" style={{ width: "1rem" }}>
                                            <span className="name" >{element.book.bookTitle && element.book.bookTitle.name}</span>
                                            {element.book.promotion.discount > 0 && (
                                                <span className="discount">{globalFunctions.formatCash(element.book.price)}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="price">{globalFunctions.formatCash(element.book.price)}</div>
                                    <div className="number">{element.amount}</div>
                                    <div className="price">{globalFunctions.formatCash((element.book.price * element.book.promotion.discount) / 100)}</div>
                                    <div className="total">{globalFunctions.formatCash(element.price * element.amount)}</div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>


        </div>
    )
}
export default React.memo(BillDetail);