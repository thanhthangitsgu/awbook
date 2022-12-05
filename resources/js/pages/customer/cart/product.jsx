import React from "react";
import svg from "../../../components/svg";
import allAPI from "../../../store/api/allAPI";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../../store/api/axiousClient";
import globalFunctions from "../../../globalFunctions";
import ButtonNumber from "../../../components/ButtonNumber"
import allActions from "../../../store/actions/cartActions";
const ProductCart = ({ book, check, remove, add, update }) => {
    const [author, setauthor] = useState("");
    const [number, setnumber] = useState(parseInt(book.numberCart));
    const dispatch = useDispatch();
    //Lấy tác giả
    useEffect(() => {
        const getAuthor = async (id) => {
            await axiosClient.get('api/author/' + book.bookTitle.author_id).then((response) => {
                response.data && response.data.status && setauthor(response.data.data);
            })
        }
        getAuthor();
    }, [])
    //Set số lượng
    useEffect(() => {
        book.numberCart = number;
        dispatch(allActions.updateCart(book));
        update(book, number);
    }, [number])
    //Tăng số lượng
    const inc = () => {
        number <= book.amount && setnumber(number + 1);
    }
    //Giảm số lượng
    const des = () => {
        number > 1 && setnumber(number - 1);
    }
    //Xóa khỏi giỏ hàng
    const deleteBook = () => {
        dispatch(allActions.deleteCart(book));
        remove(book);
    }
    //Chọn sản phẩm
    const handleOnChangeSelect = (event) => {
        if (!event.target.checked) {
            remove(book);
        } else {
            add(book);
        }
    }

    return (
        <div className="item">
            <div className="check">
                <input type="checkbox" name="" id="" checked={check} onChange={() => handleOnChangeSelect(event)} />
            </div>
            <div className="title">
                <div className="image">
                    <img src={'http://127.0.0.1:5173/public/' + book.image} alt="" />
                </div>
                <div className="about">
                    <span class="name">{book.bookTitle && book.bookTitle.name}</span>
                    <span class="author">{author && author.name}</span>
                    {book.promotion.discount > 0 && (
                        <span class="discount">{globalFunctions.formatCash(book.price)}</span>
                    )}
                </div>
            </div>
            <div className="price">{globalFunctions.formatCash(globalFunctions.getPrice(book.price, book.promotion.discount))}</div>
            <div className="number"><ButtonNumber inc={inc} des={des} number={number}></ButtonNumber></div>
            <div className="total">{globalFunctions.formatCash(number * globalFunctions.getPrice(book.price, book.promotion.discount))}</div>
            <div className="delete"><button onClick={() => deleteBook(book)}>{svg.btnDelete}</button></div>
        </div>
    )
}
export default React.memo(ProductCart);