import ControlSlide from './ControlSlide'
import React from 'react'
class Slider extends React.Component {
  state = {
    indexSlide: 1,
    lenght : 4
  }
  
  componentDidMount() {
    setInterval(() => {
      if (this.state.indexSlide !== this.state.lenght) {
        this.setState({ indexSlide: this.state.indexSlide + 1 })
      } else if (this.state.indexSlide === this.state.lenght) {
        this.setState({ indexSlide: 1 })
      }
    }, 5000)
  }
  render() {
    const listSlide = [
        {
          link: 'https://thietkekhainguyen.com/wp-content/uploads/2018/10/sach-anh-dep3.jpg',
        },
        {
          link: 'http://static.ybox.vn/2017/3/21/5cade000-0ddd-11e7-a84a-2e995a9a3302.jpg',
        },
        {
          link: 'https://product.hstatic.net/200000201143/product/sach_trang_tri_chup_anh_san_pham__2__883a94ac1f094a3d830a87f9627b2f17_master.jpg',
        },
        {
          link: 'https://tienganhfree.com/wp-content/uploads/2018/11/3126981015bb11e7ae28b9f83783eb34-1441.jpg',
        },
      ]
    const nextSlide = () => {
      if (this.state.indexSlide !== listSlide.length) {
        this.setState({ indexSlide: this.state.indexSlide + 1 })
      } else if (this.state.indexSlide === listSlide.length) {
        this.setState({ indexSlide: 1 })
      }
    }
    const prevSlide = () => {
      if (this.state.indexSlide !== 1) {
        this.setState({ indexSlide: this.state.indexSlide - 1 })
      } else if (this.state.indexSlide === 1) {
        this.setState({ indexSlide: listSlide.length })
      }
    }

    const setSlide = (index) => {
      this.setState({
        indexSlide: index,
      })
    }

    return (
      <div className="slide-container">
        {listSlide.map((element, index) => {
          return (
            <div
              key={index}
              className={
                this.state.indexSlide === index + 1
                  ? 'slide slide-active'
                  : 'slide'
              }
            >
              <img src={element.link} alt="" className="slide-image" />
            </div>
          )
        })}

        <ControlSlide  dir={'next'} moveSlide={nextSlide}></ControlSlide>
        <ControlSlide dir={'prev'} moveSlide={prevSlide}></ControlSlide>
        <div className="slider-dot">
          {Array.from({ length: listSlide.length }).map((item, index) => (
            <div
              key={index}
              onClick={() => setSlide(index + 1)}
              className={
                this.state.indexSlide === index + 1 ? 'dot active' : 'dot'
              }
            ></div>
          ))}
        </div>
      </div>
    )
  }
}
export default Slider
