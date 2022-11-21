import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import removeVietnameseTones from "../globalFunction";
class ListCategory extends React.Component {
    state = {
        showall: false
    }

    render() {

        const showAll = () => {
            this.setState({
                showall: !this.state.showall
            })
        }
        const styleShow = {
            height: this.props.listCategory.length * 1.9 + 'rem'
        }

        let Active = 'book-active-link option-item cate-item' ;

        return (
            <div className="option-box">
                <div className="option-box-title">Danh Mục Sản Phẩm</div>
                <div className="option-box-list" style={this.state.showall === true && this.props.listCategory.length * 1.9 > 10 ? styleShow : {}}>
                    <Link to="/book"><div className="book-active-link option-item cate-item"   id="cate_0" onClick={() => this.props.handleChangeCategory(0, "Tất cả")}>Tất cả</div></Link>
                    {this.props.listCategory.map((element, index) => {
                        return (
                            <NavLink to={ removeVietnameseTones(element.name)}><div className={({ isActive }) =>  isActive ? Active : undefined  }  key={index} onClick={() => this.props.handleChangeCategory(element.id, element.name)} id={"cate_" + element.id}>{element.name}</div></NavLink>
                        )
                    })}
                </div>
                <div className="btn-view-all" onClick={() => showAll()}>Xem thêm</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listCategory: state.category.listCategory
    }
}

export default connect(mapStateToProps)(ListCategory)