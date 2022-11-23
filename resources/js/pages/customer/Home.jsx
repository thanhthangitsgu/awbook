import React from "react";
import Slider from "../../components/Slider/Slider";
import SliderBook from "../../components/Slider/SliderBook";
import SliderImage from "../../components/Slider/SliderImage";
import '../../../css/home.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import allActions from "../../store/actions/allActions";
function Home() {
    const dispatch = useDispatch();
    const listPromo = useSelector(state => state.promotion).listPromo;
    const listBookTitle = useSelector(state => state.bookTitle).listBookTitle;
    const listBook = useSelector(state => state.book);
    dispatch(allActions.detailBookActions.getListBook(listPromo, listBookTitle));
    return (
        <div className="body">
            <div className="content">
                <div className="slider">
                    <div className="slider-main">
                        <Slider></Slider>
                    </div>
                    <div className="slider-book-random">
                        <img
                            src="http://127.0.0.1:5173/public/images/slideshow/3.jpg"
                            alt="Xem chi tiết"
                        />
                        <div className="slider-book-background">

                        </div>
                        <div className="slider-book-title">
                            SÁCH NGẪU NHIÊN
                        </div>
                    </div>
                </div>
                <SliderBook item={4} width={270} titleSlide="SÁCH KHUYẾN MÃI" listBook={listBook.listBook}></SliderBook>
                <SliderImage></SliderImage>
                <SliderBook item={4} width={270} titleSlide="GỢI Ý CHO BẠN" listBook={listBook.listBook}></SliderBook>
            </div>
        </div>

    );
}
export default React.memo(Home);
