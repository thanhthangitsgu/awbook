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
                        <div className="detail-author"><span style={{ fontWeight: 'bold', color: "black" }}>Tác giả: </span><span className="author-name">{book.author && book.author.name}</span></div>
                    </div>
                    {<div className="detail-price">
                        {book.promotion && book.promotion.discount > 0 && <div className="discount">{globalFunctions.formatCash(book.price, book.promotion.discount)}</div>}
                        <div className="price">{book.promotion && globalFunctions.formatCash(globalFunctions.getPrice(book.price, book.promotion.discount))}  </div>
                        {book.promotion && book.promotion.discount > 0 && (
                            <div className="note">{"Khuyến mãi " + book.promotion.discount + "%"}</div>
                        )}
                    </div>}
                    <div className="detail-number">
                        <div className="title">Số lượng: </div>
                        <ButtonNumber inc={incNumber} des={desNumber} number={numberBook}></ButtonNumber>
                        <div className="number">{book.amount} sản phẩm có sẵn</div>
                    </div>
                    <div className="detail-button">
                        <AddToCart style="detail-add" book={book}></AddToCart>
                        <button className="detall-buy" >MUA NGAY</button>
                    </div>
                    <div className="detail-table">
                        <div className="detail-row">
                            <div className="table-header">Nhà xuất bản:</div>
                            <div className="table-body">{book.publisher && book.publisher.name}</div>
                        </div>
                        <div className="detail-row">
                            <div className="table-header">Năm xuất bản:</div>
                            <div className="table-body">{book.year}</div>
                        </div>
                        <div className="detail-row">
                            <div className="table-header">Thể loại:</div>
                            <div className="table-body">{book.bookTitle && book.bookTitle.nameCategory.join(', ')}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-book-describe">
                <div className="content">
                    <div className="title">Mô tả sách</div>
                    <div className="descibe">{book.describe}
                        Nếu bạn đang trải qua
                        giai đoạn lạc lõng và cô đơn như vậy,
                        hãy để “Chưa kịp lớn đã phải trưởng thành” làm một
                        người bạn ở bên, xoa dịu tổn thương và gửi tặng bạn
                        đôi điều khích lệ. Mỗi trang sách đều là một lá thư
                        nhắn nhủ bạn về sự đặc biệt của bản thân, về những
                        nỗ lực hoàn thiện không ngừng nghỉ trong thế giới
                        của người trưởng thành.
                    </div>
                </div>
                <div className="discount">
                    <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2022/McBooks11_310x210.jpg" alt="" />
                </div>
            </div>
            <div className="slide">
                <SliderBook item={4} width={270} titleSlide="SÁCH CÙNG THỂ LOẠI" listBook={listBook}></SliderBook>
                <SliderBook item={4} width={270} titleSlide="ĐỀ XUẤT CHO BẠN" listBook={listBook}></SliderBook>
            </div>
        </div>
    )
}
export default React.memo(BookDetail);