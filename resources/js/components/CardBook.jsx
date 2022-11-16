import React from 'react'
class CardBook extends React.Component {
  state = {}
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="card-book">
        <div className="book-image">
          <img
            src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882226_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
            alt=""
          />
        </div>
        <div className="book-title">
          <span>Cây cam ngọt của tôi Cây cam ngọt của tôi Cây cam ngọt của tôi Cây cam ngọt của tôi </span>
        </div>
        <div className="book-price">
            <span className="price-buy">81.000đ</span>
            <span className="price-discount">100.000đ</span>
        </div>
      </div>
    )
  }
}
export default CardBook
