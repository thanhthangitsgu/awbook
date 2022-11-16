import React from 'react'
import BtnSlider from './BtnSlider'
import CardBook from '../CardBook'
class SliderBook extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    translate: 0,
    listSlide: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      
    ],
  }

  render() {
    const itemPerSlide = this.props.item
    const widthItem = this.props.width
    const lengSlide = this.state.listSlide.length * widthItem
    const nextSlide = () => {
      if (this.state.translate + itemPerSlide * widthItem < lengSlide) {
        this.setState({
          translate: this.state.translate + itemPerSlide * widthItem,
        })
      }
    }
    const prevSlide = () => {
      if (this.state.translate - itemPerSlide * widthItem >= 0) {
        this.setState({
          translate: this.state.translate - itemPerSlide * widthItem,
        })
      }
    }
    return (
      <div className="slider-book">
        <div className="title-slide"> SÁCH NỔI BẬT</div>
        <div className="slider-content">
          <div className="container-slider-book">
            <div
              className="slide"
              style={{
                transform: 'translateX(-' + this.state.translate + 'px)',
              }}
            >
              {this.state.listSlide.map((element, index) => {
                return <CardBook key = {index}></CardBook>
              })}
            </div>
            
            <BtnSlider dir={'next'} moveSlide={nextSlide}></BtnSlider>
            <BtnSlider dir={'prev'} moveSlide={prevSlide}></BtnSlider>
          </div>
        </div>
        <div className="btn-view">
          <button>
            Xem Thêm
          </button>
        </div>
      </div>
    )
  }
}
export default SliderBook
