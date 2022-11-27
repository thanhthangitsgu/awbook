import { useState } from "react";
import CardBook from "../../components/CardBook";
import BtnSlider from "./ControlSlide";
export default function SliderBook({ listBook, titleSlide, item, width }) {
    const [translate, settransle] = useState(0);
    const itemPerSlide = item
    const widthItem = width
    const lengSlide = listBook.length * widthItem
    const nextSlide = () => {
        if (translate + itemPerSlide * widthItem < lengSlide) {
            settransle(translate + itemPerSlide * widthItem)
        }
    }
    const prevSlide = () => {
        if (translate - itemPerSlide * widthItem >= 0) {
            settransle(translate - itemPerSlide * widthItem)
        }
    }
    return (
        <div className="slider-book">
            <div className="title-slide">{titleSlide}</div>
            <div className="slider-content">
                <div className="container-slider-book">
                    <div
                        className="slide"
                        style={{
                            transform: 'translateX(-' + translate + 'px)',
                        }}
                    > {listBook.map((element, index) => {
                        return (<CardBook key={index} book={element}></CardBook>)
                    })}
                    </div>
                    <BtnSlider dir={'next'} moveSlide={nextSlide}></BtnSlider>
                    <BtnSlider dir={'prev'} moveSlide={prevSlide}></BtnSlider>
                </div>
            </div>
            <div className="btn-view">
                <button>Xem Thêm</button>
            </div>
        </div>
    )
}