import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "./product";
import "../../../components/svg"
import svg from "../../../components/svg";
import cartActions from "../../../store/actions/cartActions";
import { useState } from "react";
import globalFunctions from "../../../globalFunctions";
import { Link } from "react-router-dom";
import PaymentBill from "./bill"
import AddressBill from './address'
const CartPage = () => {
    const cart = useSelector(state => state.cart).list;
    const dispatch = useDispatch();
    const [listBook, setlistBook] = useState(useSelector(state => state.cart).listPay);
    const [checkAll, setcheckAll] = useState(false);
    const [numberList, setnumberList] = useState(0);
    //Handle chọn danh sách
    useEffect(() => {
        (listBook.length == cart.length) && setcheckAll(true);
        (listBook.length != cart.length) && setcheckAll(false);
        dispatch(cartActions.updatePay(listBook));
    }, [listBook]);
    //Handle chọn tất cả sách
    const handleOnSelectAll = (event) => {
        let data = event.target.checked ? cart : [];
        setlistBook(data);
    }
    //Xóa khỏi danh sách
    const removePay = (book) => {
        let data = [...listBook];
        data = data.filter(item => item.id != book.id);
        setlistBook(data);
    }
    //Thêm vào danh sách
    const addPay = (book) => {
        let data = [...listBook];
        data.push(book);
        setlistBook(data);
    }
    //Xóa sách đã chọn khỏi giỏ hàng
    const deleteAll = () => {
        listBook.length && listBook.map((element) => {
            dispatch(cartActions.deleteCart(element));
        });
        setlistBook([]);
    }
    //Update danh sách
    const updatePay = (book, number) => {
        let data = [...listBook];
        let product = data.filter(item => item.id == book.id);
        product.length && (product[0].numberCart = number);
        setlistBook(data);
    }
    //Kiểm tra sách có thuộc list
    const isIncludes = (list, book) => {
        let data = list.filter(item => item.id == book.id);
        return data.length > 0;
    }

    return (
        <div className="page-book">
            <div className="cart-title">
                {svg.titleCart}
                <div className="title">Giỏ hàng</div>
            </div>
            <div className="page-cart-body">
                <div className="page-cart-content">
                    <div className="header">
                        <div className="check">
                            <input type="checkbox" name="checkall" id="" checked={checkAll} onChange={() => handleOnSelectAll(event)} />
                        </div>
                        <div className="title">Sản phẩm</div>
                        <div className="price">Đơn giá</div>
                        <div className="number">Số lượng</div>
                        <div className="total">Tổng tiền</div>
                        <div className="delete"><button onClick={() => deleteAll()}>{svg.btnDelete}</button></div>
                    </div>
                    <div className="cart-list">
                        {cart.length > 0 && cart.map((element, index) => {
                            return (
                                <ProductCart book={element} check={isIncludes(listBook, element)} remove={removePay} add={addPay} update={updatePay}></ProductCart>
                            )
                        })
                        }
                        {cart.length == 0 && (
                            <div className="empty-cart">Giỏ hàng của bạn trống</div>
                        )}
                    </div>
                </div>
                <div className="page-cart-payment">
                    <AddressBill></AddressBill>
                    <PaymentBill listBook={listBook} fee={0}></PaymentBill>
                </div>
            </div>
        </div >
    )
}
export default React.memo(CartPage)