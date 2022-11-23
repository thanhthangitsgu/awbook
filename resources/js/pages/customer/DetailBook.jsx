import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import allActions from "../../store/actions/allActions";
import formatCash from "../../GlobalFunction/formatCash"
import { useState } from "react";
import SliderBook from "../../components/Slider/SliderBook";
import ButtonNumber from "../../components/ButtonNumber";
import { ToastContainer, toast } from "react-toastify";
import AddToCart from "../../components/AddToCart";
import { useLocation } from "react-router-dom";
export default function DetailBook() {
    const bookID = useParams();
    const dispatch = useDispatch();
    const listPromo = useSelector(state => state.promotion).listPromo;
    const listBookTitle = useSelector(state => state.bookTitle).listBookTitle;
    dispatch(allActions.detailBookActions.getListBook(listPromo, listBookTitle));
    const listBook = useSelector(state => state.book);
    let book = listBook.listBook.filter(item => item.id == bookID.id)[0];
    const [number, setNumber] = useState(1);
    const incNumber = () => {
        if (number < 100) setNumber(number + 1);
        console.log(number);
    }
    const desNumber = () => {
        if (number > 1) setNumber(number - 1);
    }
    const showToast = (message) => {
        dispatch(allActions.detailBookActions.addCart(book))
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
return (
    <div className="page-book">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

        />
        <div className="page-book-directory"><Link to="/">Home</Link>  &gt; <Link to="/book">Book</Link>  &gt; {book.name}</div>
        <div className="page-detail-body">
            <div className="page-detail-image">
                <div className="container-slide-image">
                    <div className="slide-image">
                        <img src={book.img} alt="" />
                    </div>
                </div>
                <div className="detail-image">
                    <div className="image-book">
                        <img src={book.img} alt="" />
                    </div>
                </div>
            </div>
            <div className="page-detail-content">
                <div className="detail-header">
                    <div className="detail-title">{book.name}</div>
                    <div className="detail-author"><span style={{ fontWeight: 'bold', color: "black" }}>Tác giả:</span><span className="author-name"> Nguyễn Văn Động</span></div>
                </div>
                <div className="detail-price">
                    {book.discount > 0 && <div className="discount">{formatCash(book.price)} ₫</div>}
                    <div className="price">{book.discount > 0 ? formatCash(book.price - book.price * book.discount / 100) : book.price} ₫ </div>
                    <div className="note">{book.discount > 0 ? "Khuyến mãi " + book.discount + "%" : ""}</div>
                </div>
                <div className="detail-number">
                    <div className="title">Số lượng: </div>
                    <ButtonNumber inc={incNumber} des={desNumber} number={number}></ButtonNumber>
                    <div className="number">{book.amount} sản phẩm có sẵn</div>
                </div>
                <div className="detail-button">
                    <AddToCart style="detail-add" book={book}></AddToCart>
                    <button className="detall-buy" >MUA NGAY</button>
                </div>
                <div className="detail-table">
                    <div className="detail-row">
                        <div className="table-header">Nhà xuất bản:</div>
                        <div className="table-body">Nhà xuất bản Phụ nữ</div>
                    </div>
                    <div className="detail-row">
                        <div className="table-header">Năm xuất bản:</div>
                        <div className="table-body">{book.year}</div>
                    </div>
                    <div className="detail-row">
                        <div className="table-header">Thể loại:</div>
                        <div className="table-body">Sách giáo trình</div>
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
            <SliderBook item={4} width={270} titleSlide="SÁCH CÙNG THỂ LOẠI" listBook={listBook.listBook}></SliderBook>
            <SliderBook item={4} width={270} titleSlide="SÁCH CÙNG TÁC GIẢ" listBook={listBook.listBook}></SliderBook>
        </div>
    </div>
)
}

