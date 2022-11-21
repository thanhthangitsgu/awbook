import React from "react";
import { Link, Outlet, Route, Routes, } from "react-router-dom";
import BookActions from "../store/actions/bookActions";
import { connect } from "react-redux";
import ListCategory from "../components/ListCategory";
import ListBook from "../components/ListBook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Book extends React.Component {
    state = {
        listBook: this.props.listBook,
        category: { id: 0, name: "Tất cả" },
        publisher: this.props.listPublisher,
        price: 0,
        sort: "inc"
    }

    render() {
        const showToast = (message) => {
            toast.success(message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        const handleChangeCategory = (id, name) => {
            this.setState({
                category: { id: id, name: name }
            })
            let current = document.getElementsByClassName("book-active-link");
            let active = document.getElementById("cate_" + id);
            if (current.length > 0) current[0].className = current[0].className.replace("book-active-link", "");
            active.className += " book-active-link";
        }

        const handleChangePublisher = (id, event) => {
            let listPublisher = this.state.publisher;
            if (event.target.checked === true) {
                listPublisher = this.state.publisher.length === this.props.listPublisher.length ? [] : this.state.publisher;
                listPublisher = [...listPublisher, this.props.listPublisher.filter(item => item.id_pub === id)[0]]
            } else {
                listPublisher = listPublisher.filter(item => item.id_pub !== id);
                listPublisher = listPublisher.length === 0 ? this.props.listPublisher : listPublisher;
            }
            this.setState({
                publisher: listPublisher
            })
        }

        const handleChangePrice = (event) => {
            this.setState({
                price: event.target.value
            })
        }
        const handleChangeSort = (event) => {
            this.setState({
                sort: event.target.value
            })
        }
        this.props.initBook(this.props.listPromo, this.props.listBookTitle);
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
                <div className="page-book">
                    <div className="page-book-directory">Home &gt; Book &gt; {this.state.category.name}</div>
                    <div className="page-book-body">
                        <div className="page-book-option">
                            <ListCategory handleChangeCategory={handleChangeCategory}></ListCategory>
                            <div className="option-box">
                                <div className="option-box-title">Nhà xuất bản</div>
                                <div className="option-box-list">
                                    {this.props.listPublisher.map((element, index) => {
                                        return (
                                            <div className="option-item" key={index}>
                                                <input type="checkbox" name={element.id} id={element.id_pub} onChange={() => handleChangePublisher(element.id_pub, event)} />
                                                <label htmlFor={element.id_pub} className="option-label"> {element.name}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="option-box">
                                <div className="option-box-title">Giá</div>
                                <div className="option-box-list">
                                    <div className="option-item">
                                        <div className="book-filter-item">
                                            <input type="radio" name="price" id="price_0" value="0" defaultChecked onChange={() => handleChangePrice(event)} />
                                            <label htmlFor="price_0">Tất cả</label>
                                        </div>
                                    </div>
                                    <div className="option-item">
                                        <div className="book-filter-item">
                                            <input type="radio" name="price" id="price_1" value="50000" onChange={() => handleChangePrice(event)} />
                                            <label htmlFor="price_1">Dưới 50.000đ</label>
                                        </div>
                                    </div>
                                    <div className="option-item">
                                        <div className="book-filter-item">
                                            <input type="radio" name="price" id="price_2" value="100000" onChange={() => handleChangePrice(event)} />
                                            <label htmlFor="price_2">50.000đ - 100.000đ</label>
                                        </div>
                                    </div>
                                    <div className="option-item">
                                        <div className="book-filter-item">
                                            <input type="radio" name="price" id="price_3" value="200000" onChange={() => handleChangePrice(event)} />
                                            <label htmlFor="price_3">100.000đ - 200.000đ</label>
                                        </div>
                                    </div>
                                    <div className="option-item">
                                        <div className="book-filter-item">
                                            <input type="radio" name="price" id="price_4" value="300000" onChange={() => handleChangePrice(event)} />
                                            <label htmlFor="price_4">Trên 200.000đ</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-book-content">
                            <div className="page-book-header">
                                <div className="page-book-title">SÁCH TẠI AWBOOK</div>
                                <div className="page-book-filter">
                                    <div className="book-filter-item">
                                        <button onClick={() => showToast()}>Nổi bật</button>
                                    </div>
                                    <div className="book-filter-item">
                                        <button>Bán chạy</button>
                                    </div>
                                    <div className="book-filter-item">
                                        <button>Sách mới</button>
                                    </div>
                                    <div className="book-filter-item">
                                        <input type="radio" name="sort" value="inc" defaultChecked onChange={() => handleChangeSort(event)} />
                                        <label htmlFor="inc">Giá từ thấp đến cao</label>
                                    </div>
                                    <div className="book-filter-item">
                                        <input type="radio" name="sort" value="des" onChange={() => handleChangeSort(event)} />
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
                            <Routes>
                                <Route path=":category" element={<ListBook listBook={this.state.listBook} category={this.props.listCategory} bookcategory={this.props.listBookCategory} publisher={this.state.publisher} price={this.state.price} sort={this.state.sort} showToast={showToast}></ListBook>}></Route>
                                <Route path="" element={<ListBook listBook={this.state.listBook} category={this.state.category} bookcategory={this.props.listBookCategory} publisher={this.state.publisher} price={this.state.price} sort={this.state.sort} showToast={showToast}></ListBook>}></Route>
                            </Routes>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listBook: state.book.listBook,
        listBookTitle: state.bookTitle.listBookTitle,
        listBookCategory: state.bookTitle.listCategory,
        listPromo: state.promotion.listPromo,
        listPublisher: state.publisher.listPublisher,
        listCategory: state.category.listCategory,
    }
}

export default connect(mapStateToProps, BookActions)(Book)