import React from "react";
import Header from "../layouts/Header";
import Slider from "../components/Slider/Slider";
import SliderBook from "../components/Slider/SliderBook";
import '../../css/home.scss'
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="body">
                    <div className="content">
                        <div className="slider">
                            <div className="slider-main">
                                <Slider></Slider>
                            </div>
                            <div className="slider-book-random">
                                <img
                                    src="http://127.0.0.1:5173/public/images/slideshow/3.jpg"
                                    alt=""
                                />
                                <div className="slider-book-background">
                                   
                                </div>
                                <div className="slider-book-title">
                                    SÁCH NGẪU NHIÊN
                                </div>
                            </div>
                        </div>
                       <SliderBook item={4} width = {295}></SliderBook>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
