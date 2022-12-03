import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
const CardBook = ({ book }) => {
    return (
        <>
            <div className="card-book" >
                <div className="book-discount">{book.discount}%</div>
                <div className="book-image">
                    <Link to={"/detail/" + book.id} >
                        <div >
                            <img src={book.image} alt="" />
                        </div>
                    </Link>
                    <div className="book-option">
                        <AddToCart book={book}></AddToCart>
                    </div>
                </div>
                <div className="book-title">
                    <span>
                        {book.name}
                    </span>
                </div>
                <div className="book-price">
                    <span className="price-buy">{book.price - (book.price * book.discount / 100)}đ</span>
                    <span className="price-discount">{book.price} đ</span>
                </div>
            </div></>
    )
}
export default React.memo(CardBook)