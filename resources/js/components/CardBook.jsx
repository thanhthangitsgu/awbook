import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import globalFunctions from "../globalFunctions";
import image from "../../../public/images/books/2.jpg"
const CardBook = ({ book }) => {
    return (
        <div className="card-book" >
            {book.promotion.discount > 0 && (
                <div className="book-discount">{book.promotion.discount}%</div>
            )}

            <div className="book-image">
                <Link to={"/detail/" + book.id} >
                    <div >
                        <img src={"http://127.0.0.1:5173/public/" + book.image} alt="" />
                    </div>
                </Link>
                <div className="book-option">
                    <AddToCart book={book}></AddToCart>
                </div>
            </div>
            <div className="book-title">
                <span>
                    {book.bookTitle && book.bookTitle.name}
                </span>
            </div>
            <div className="book-price">
                <span className="price-buy">{globalFunctions.formatCash(globalFunctions.getPrice(book.price, book.promotion.discount))}</span>
                <span className={book.promotion.discount > 0 ? "price-discount" : "price-buy"}>{book.promotion.discount > 0 && globalFunctions.formatCash(book.price)}</span>
            </div>
        </div>

    )
}
export default React.memo(CardBook)