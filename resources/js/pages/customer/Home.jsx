import React from "react";
import Slider from '../../layouts/Slider/Slider'
import SliderBook from '../../layouts/Slider/SliderBook'
import SliderImage from '../../layouts/Slider/SliderImage';
import '../../../css/home.scss'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import allActions from "../../store/actions/allActions";
import allAPI from "../../store/api/allAPI";
import { useEffect } from "react";
import { useState } from "react";
import ListBook from "../../components/customer/book/ListBook";
function Home() {
    const dispatch = useDispatch();
    const bookReducer = useSelector(state => state.book).listBook;
    const [listBook, setlistBook] = useState([]);
    useEffect(() => {
        dispatch(allAPI.bookAPI.getAll());
    }, []);
    useEffect(() => {
        bookReducer.data && bookReducer.data.data && setlistBook(bookReducer.data.data);
    }, [bookReducer])


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
                        <div className="slider-book-background"></div>
                        <div className="slider-book-title">
                            SÁCH NGẪU NHIÊN
                        </div>
                    </div>
                </div>
                <SliderBook item={4} width={270} titleSlide="SÁCH KHUYẾN MÃI" listBook={listBook}></SliderBook>
                <SliderImage></SliderImage>
                <SliderBook item={4} width={270} titleSlide="GỢI Ý CHO BẠN" listBook={listBook}></SliderBook>
                <ListBook action={"none"} price={"0"} publisher={[]} sort={"inc"}></ListBook>
            </div>
        </div>

    );
}
export default React.memo(Home);
