import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import cartActions from '../store/actions/cartActions'
import AddToCart from './AddToCart'
class CardBook extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const addCart = () => {
      this.props.addCart(this.props.book);
      this.props.showToastMessage(this.props.message);
    }
    const func = (e) => {
      alert("OK");
      e.preventDefault();
       // 1. Get the element id to which you want to scroll
       const scrollElemId = e.target.href.split('#')[1];
      
       // 2. find that node from the document
       const scrollEndElem = document.getElementById(scrollElemId);
       
       // 3. and well animate to that node.. 
       const anim = requestAnimationFrame((timestamp) => {
         const stamp = timestamp || new Date().getTime();
         const duration = 1200;
         const start = stamp;
      
         const startScrollOffset = window.pageYOffset;
         const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
      
         scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
       })
    }
    return (
      <>
        <div className="card-book" >
          <div className="book-discount">{this.props.book.discount}%</div>
          <div className="book-image">
            <Link to={"/detail/" + this.props.book.id} >
              <div >
                <img src={this.props.book.img} alt="" />
              </div>
            </Link>
            <div className="book-option">
              <AddToCart book = {this.props.book}></AddToCart>
            </div>
          </div>
          <div className="book-title">
            <span>
              {this.props.book.name}
            </span>
          </div>
          <div className="book-price">
            <span className="price-buy">{this.props.book.price - (this.props.book.price * this.props.book.discount / 100)}đ</span>
            <span className="price-discount">{this.props.book.price}đ</span>
          </div>
        </div></>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.cart.message
  }
}
export default connect(mapStateToProps, cartActions)(CardBook)
