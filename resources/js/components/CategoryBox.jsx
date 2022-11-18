import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
class CategoryBox extends React.Component {
  state = {
    show: false
  }
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.setState({
        show: false
      })
    }
  }
  render() {
    const category = this.props.category;
    const show = () => {
      this.setState({
        show: !this.state.show
      })
    }

    return (
      <div className="popup-box" ref={this.wrapperRef}>
        <button className={this.state.show === true ? "btn-click btn-popup" : "btn-popup"} onClick={() => show()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
        </button>
        <div className={this.state.show === true ? "box-body" : "box-body box-hiden"}>
          <div className="box-content">
            <div className="box-header">
              <div className="box-title">DANH MỤC SẢN PHẨM</div>
              <button className="box-btn-close" onClick={() => show()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div className="box-list-item">
              {category.map((element, index) => {
                return (
                  <Link to ="/book">
                    <div className="box-item" key={index}>
                      <div className="box-icon">
                        <img src="https://img.icons8.com/fluency/96/null/diversity.png" />
                      </div>
                      <div className="box-item-content">{element.name}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
            <Link to = "/book"><div className="box-footer" onClick={()=>show()}>Xem tất cả</div></Link>
          </div>
          <div className="box-triangle"></div>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { category: state.category.list }
}

export default connect(mapStateToProps)(CategoryBox)
