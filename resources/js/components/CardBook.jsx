import React from 'react'
import { connect } from 'react-redux'
class CardBook extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card-book">
        <div className="book-discount">{this.props.book.discount}%</div>
        <div className="book-image">
          <a href="https://www.w3schools.com/tags/tag_img.asp">
            <div>
              <img src={this.props.book.img} alt="" />
            </div>
          </a>
          <div className="book-option">
            <button>THÊM VÀO GIỎ</button>
          </div>
        </div>
        <div className="book-title">
          <span>
           {this.props.book.name}
          </span>
        </div>
        <div className="book-price">
          <span className="price-buy">{this.props.book.price-(this.props.book.price*this.props.book.discount/100)}đ</span>
          <span className="price-discount">{this.props.book.price}đ</span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { dataReduct: state.cart }
}
export default connect(mapStateToProps)(CardBook)
