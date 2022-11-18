import React from "react";
import { Link } from "react-router-dom";
import BookActions from "../store/actions/bookActions";
import { connect } from "react-redux";
import CardBook from "../components/CardBook";
import ListCheckBox from "../components/ListCheckBox";
class Book extends React.Component {
    render() {
        this.props.initBook(this.props.listPromo, this.props.listBookTitle);
        console.log(this.props.listBook)
        return (
            <div className="page-book">
                <div className="page-book-directory">Home &gt; Book</div>
                <div className="page-book-body">
                    <div className="page-book-option">
                        <div className="option-box">
                            <div className="option-box-title">Danh Mục Sản Phẩm</div>
                            <div className="option-box-list">
                                <Link to="/"><div className="option-item" style={{ fontWeight: 'bold' }}>Tất cả</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                                <Link to="/book/van-hoc"><div className="option-item">Sách văn học</div></Link>
                            </div>
                            <div className="btn-view-all">Xem thêm</div>
                        </div>
                        <div className="option-box">
                            <div className="option-box-title">Nhà xuất bản</div>
                            <div className="option-box-list">
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="1" />
                                    <label htmlFor="1" >Dưới 50.000đ</label>
                                </div>
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="2" />
                                    <label htmlFor="2" >50.000đ - 100.000đ </label>
                                </div>
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="3" />
                                    <label htmlFor="3" >100.000đ - 200.000đ</label>
                                </div>
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="4" />
                                    <label htmlFor="4" >Trên 200.000đ</label>
                                </div>

                            </div>
                        </div>
                        <div className="option-box">
                            <div className="option-box-title">Giá</div>
                            <div className="option-box-list">
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="1" />
                                    <label htmlFor="1" >Dưới 50.000đ</label>
                                </div>
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="2" />
                                    <label htmlFor="2" >50.000đ - 100.000đ </label>
                                </div>
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="3" />
                                    <label htmlFor="3" >100.000đ - 200.000đ</label>
                                </div>
                                <div className="option-item">
                                    <input type="checkbox" name="50000" id="4" />
                                    <label htmlFor="4" >Trên 200.000đ</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="page-book-content">
                        <div className="page-book-header">
                            <div className="page-book-title">SÁCH TẠI AWBOOK</div>
                            <div className="page-book-filter">
                                <div className="book-filter-item">
                                    <button>Nổi bật</button>
                                </div>
                                <div className="book-filter-item">
                                    <button>Bán chạy</button>
                                </div>
                                <div className="book-filter-item">
                                    <button>Sách mới</button>
                                </div>
                                <div className="book-filter-item">
                                    <input type="radio" name="sort" id="inc" />
                                    <label htmlFor="inc">Giá từ thấp đến cao</label>
                                </div>
                                <div className="book-filter-item">
                                    <input type="radio" name="sort" id="des" />
                                    <label htmlFor="des">Giá từ cao xuống thấp </label>
                                </div>

                            </div>

                            <div className="page-book-cover">
                                <div className="item-img">
                                    <img src="https://salt.tikicdn.com/cache/w750/ts/banner/88/00/e0/6413c04cdf47318292234f2fbf01d7d5.png.webp" alt="" />
                                </div>
                                <div className="item-img">
                                    <img src="https://salt.tikicdn.com/cache/w400/ts/banner/ce/99/70/be3143d16b1853edaa8ad4eda5f36c09.png.webp" alt="" />
                                </div>
                                <div className="item-img">
                                    <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2022/bigsale_t11_flashsale_392x156.jpg" alt="" />
                                </div>
                                <div className="item-img">
                                    <img src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/HOA-CU/HoaCuQuy4_banner_392x156PNG_T11.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="page-book-list">
                            {this.props.listBook.map((element, index) => {
                                return (<CardBook key={index} book={element}></CardBook>)
                            })}
                        </div>
                    </div>
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

export default connect(mapStateToProps, BookActions)(Book)