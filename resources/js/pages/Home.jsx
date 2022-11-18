import React from "react";
import Slider from "../components/Slider/Slider";
import SliderBook from "../components/Slider/SliderBook";
import SliderImage from "../components/Slider/SliderImage";
import '../../css/home.scss'
class Home extends React.Component {
    render() {
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
                       <SliderBook item={4} width = {270} titleSlide = "SÁCH NỔI BẬT"></SliderBook>
                       <SliderBook item={4} width = {270} titleSlide = "SÁCH KHUYẾN MÃI"></SliderBook>
                       <SliderImage></SliderImage>
                       <SliderBook item={4} width = {270} titleSlide = "GỢI Ý CHO BẠN"></SliderBook>
                    </div>
                </div>
            
        );
    }
}
export default Home;
