import React from 'react'
import BtnSlider from './BtnSlider'
import CardBook from '../CardBook'
import { connect } from 'react-redux'
import BookActions from '../../store/actions/bookActions'
class SliderBook extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    translate: 0,
  }
  componentDidMount() {
  }
  componentWillUnmount() {

  }
  render() {
    const listBook = this.props.listBook;
    this.props.initBook(this.props.listPromo, this.props.listBookTitle);
    const itemPerSlide = this.props.item
    const widthItem = this.props.width
    const lengSlide = listBook.length * widthItem
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
        <div className="title-slide">{this.props.titleSlide}</div>
        <div className="slider-content">
          <div className="container-slider-book">
            <div
              className="slide"
              style={{
                transform: 'translateX(-' + this.state.translate + 'px)',
              }}
            >
              {listBook.map((element, index) => {
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
}
const mapStateToProps = (state) => {
  return {
    listBook: state.book.listBook,
    listBookTitle: state.bookTitle.listBookTitle,
    listPromo: state.promotion.listPromo,
  }
}

export default connect(mapStateToProps, BookActions)(SliderBook)
