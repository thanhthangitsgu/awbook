import BtnSlider from './BtnSlider'
import React from 'react'
class Slider extends React.Component {
  state = {
    indexSlide: 1,
    lenght : 3
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
          link: 'http://127.0.0.1:5173/public/images/slideshow/3.jpg',
        },
        {
          link: 'http://127.0.0.1:5173/public/images/slideshow/1.jpg',
        },
        {
          link: 'http://127.0.0.1:5173/public/images/slideshow/2.jpg',
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

        <BtnSlider dir={'next'} moveSlide={nextSlide}></BtnSlider>
        <BtnSlider dir={'prev'} moveSlide={prevSlide}></BtnSlider>
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
