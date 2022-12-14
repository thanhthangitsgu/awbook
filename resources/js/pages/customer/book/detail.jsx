import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import allAPI from "../../../store/api/allAPI";
import globalFunctions from "../../../globalFunctions";
import ButtonNumber from "../../../components/ButtonNumber";
import AddToCart from "../../../components/AddToCart";
import { useLocation } from "react-router-dom";
import SliderBook from "../../../layouts/Slider/SliderBook";
const BookDetail = () => {
    const [bookID, setbookID] = useState("");
    const param = useParams();
    const dispatch = useDispatch();
    const bookReducer = useSelector(state => state.book).listBook;
    const bookTitleReducer = useSelector(state => state.bookTitle).listBookTitle;
    const authorReducer = useSelector(state => state.author).listAuthor;
    const publisherReducer = useSelector(state => state.publisher).listPublisher;
    const [book, setbook] = useState("");
    const [numberBook, setnumberBook] = useState(1);

    const [listBook, setlistBook] = useState([]);

    const incNumber = () => {
        if (numberBook < book.amount) setnumberBook(numberBook + 1);
    }
    const desNumber = () => {
        if (numberBook > 1) setnumberBook(numberBook - 1);
    }


    useEffect(() => {
        dispatch(allAPI.titleAPI.getAll());
        dispatch(allAPI.bookAPI.getAll());
        dispatch(allAPI.authorAPI.getAll());
        dispatch(allAPI.publisherAPI.getAll());
    }, [])

    useEffect(() => {
        let data = [];
        bookReducer.data && bookReducer.data.data && (data = bookReducer.data.data);
        data.length && (data = data.filter(item => item.id == param.id)[0]);
        bookTitleReducer.length && (data.bookTitle = bookTitleReducer.filter(item => item.id == data.title_id)[0]);
        data.bookTitle && authorReducer.res && authorReducer.res.data && (data.author = authorReducer.res.data.filter(item => item.id == data.bookTitle.author_id)[0]);
        publisherReducer.data && publisherReducer.data.data && (data.publisher = publisherReducer.data.data.filter(item => item.id_pub == data.pub_id)[0]);
        setbook(data);
    }, [bookReducer, bookTitleReducer, authorReducer, publisherReducer, param])

    useEffect(() => {
        bookTitleReducer.length && listBook.length && listBook.map((element, index) => {
            element.bookTitle = bookTitleReducer.filter(item => item.id == element.title_id)[0];
        });
    }, [bookTitleReducer])

    useEffect(() => {
        bookReducer.data && setlistBook(bookReducer.data.data);
    }, [bookReducer]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="page-book">

            <div className="page-book-directory"><Link to="/">Home</Link>  &gt; <Link to="/book">Book</Link>  &gt; {book.bookTitle && book.bookTitle.name} </div>
            <div className="page-detail-body">
                <div className="page-detail-image">
                    <div className="container-slide-image">
                        <div className="slide-image">
                            {<img src={"http://127.0.0.1:5173/public/" + book.image} alt="" />}
                        </div>
                    </div>
                    <div className="detail-image">
                        <div className="image-book">
                            {<img src={"http://127.0.0.1:5173/public/" + book.image} alt="" />}
                        </div>
                    </div>
                </div>
                <div className="page-detail-content">
                    <div className="detail-header">
                        <div className="detail-title">{book.bookTitle && book.bookTitle.name}</div>
                        <div className="detail-author"><span style={{ fontWeight: 'bold', color: "black" }}>T??c gi???: </span><span className="author-name">{book.author && book.author.name}</span></div>
                    </div>
                    {<div className="detail-price">
                        {book.promotion && book.promotion.discount > 0 && <div className="discount">{globalFunctions.formatCash(book.price, book.promotion.discount)}</div>}
                        <div className="price">{book.promotion && globalFunctions.formatCash(globalFunctions.getPrice(book.price, book.promotion.discount))}  </div>
                        {book.promotion && book.promotion.discount > 0 && (
                            <div className="note">{"Khuy???n m??i " + book.promotion.discount + "%"}</div>
                        )}
                    </div>}
                    <div className="detail-number">
                        <div className="title">S??? l?????ng: </div>
                        <ButtonNumber inc={incNumber} des={desNumber} number={numberBook}></ButtonNumber>
                        <div className="number">{book.amount} s???n ph???m c?? s???n</div>
                    </div>
                    <div className="detail-button">
                        <AddToCart style="detail-add" book={book}></AddToCart>
                        <button className="detall-buy" >MUA NGAY</button>
                    </div>
                    <div className="detail-table">
                        <div className="detail-row">
                            <div className="table-header">Nh?? xu???t b???n:</div>
                            <div className="table-body">{book.publisher && book.publisher.name}</div>
                        </div>
                        <div className="detail-row">
                            <div className="table-header">N??m xu???t b???n:</div>
                            <div className="table-body">{book.year}</div>
                        </div>
                        <div className="detail-row">
                            <div className="table-header">Th??? lo???i:</div>
                            <div className="table-body">{book.bookTitle && book.bookTitle.nameCategory.join(', ')}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-book-describe">
                <div className="content">
                    <div className="title">M?? t??? s??ch</div>
                    <div className="descibe">{book.describe}
                        N???u b???n ??ang tr???i qua
                        giai ??o???n l???c l??ng v?? c?? ????n nh?? v???y,
                        h??y ????? ???Ch??a k???p l???n ???? ph???i tr?????ng th??nh??? l??m m???t
                        ng?????i b???n ??? b??n, xoa d???u t???n th????ng v?? g???i t???ng b???n
                        ????i ??i???u kh??ch l???. M???i trang s??ch ?????u l?? m???t l?? th??
                        nh???n nh??? b???n v??? s??? ?????c bi???t c???a b???n th??n, v??? nh???ng
                        n??? l???c ho??n thi???n kh??ng ng???ng ngh??? trong th??? gi???i
                        c???a ng?????i tr?????ng th??nh.
                    </div>
                </div>
                <div className="discount">
                    <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2022/McBooks11_310x210.jpg" alt="" />
                </div>
            </div>
            <div className="slide">
                <SliderBook item={4} width={270} titleSlide="S??CH C??NG TH??? LO???I" listBook={listBook}></SliderBook>
                <SliderBook item={4} width={270} titleSlide="????? XU???T CHO B???N" listBook={listBook}></SliderBook>
            </div>
        </div>
    )
}
export default React.memo(BookDetail);