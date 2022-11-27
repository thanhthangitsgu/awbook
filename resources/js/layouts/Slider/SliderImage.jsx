import React from 'react'
class SliderImage extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    translate: 0,
    listSlide: [
      {
        link:
          'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2022/bigsale_t11_voucher_310x210.jpg',
      },
      {
        link:
          'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2022/McBooks11_310x210.jpg',
      },
      {
        link:
          'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/VPP_Main_banner_T10_310x210.jpg',
      },
      {
        link:
          'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2022/Megasale_Banner_giaidoan01_Smallbanner_310x210.jpg',
      },
    ],
  }

  render() {
    return (
      <div className="slider-image">
        {this.state.listSlide.map((element, index) => {
          return (
            <div className="item" key={index}> 
              <img src={element.link} alt="" />
            </div>
          )
        })}
      </div>
    )
  }
}
export default SliderImage
