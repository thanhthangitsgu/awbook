import React from "react";
import Slider from '../../layouts/Slider/Slider'
import SliderBook from '../../layouts/Slider/SliderBook'
import SliderImage from '../../layouts/Slider/SliderImage';
import '../../../css/home.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import allActions from "../../store/actions/allActions";
function Home() {
    const dispatch = useDispatch();
    const listPromo = useSelector(state => state.promotion).listPromo;
    const listBookTitle = useSelector(state => state.bookTitle).listBookTitle;
    const listBook = useSelector(state => state.book);
  //  dispatch(allActions.detailBookActions.getListBook(listPromo, listBookTitle));
    return (
        <div className="body">
            <div className="content">
                <div className="slider">
                    <div className="slider-main">
                        <Slider></Slider>
                    </div>
                    <div className="slider-book-random">
                        <img
                            src="https://decopro.vn/wp-content/uploads/2019/05/Sach-trang-tri-hien-dai-1.jpg"
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
