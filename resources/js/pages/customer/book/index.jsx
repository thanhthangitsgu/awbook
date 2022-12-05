import React from "react";
import ListCategory from "../../../components/customer/book/ListCategory";
import ListPublisher from "../../../components/customer/book/ListPublisher";
import ListPrice from "../../../components/customer/book/ListPrice";
import { Route, Routes } from "react-router-dom";
import ListBook from "../../../components/customer/book/ListBook";
import { useState } from "react";
import { useEffect } from "react";
const BookPageCustomer = () => {
    const [publisher, setpublisher] = useState([]);
    const [price, setprice] = useState("");
    const [sort, setsort] = useState("inc");
    const handleChangeSort = (event) => {
        setsort(event.target.value);
    }
    return (
        <>
            <div className="page-book">
                <div className="page-book-directory">Home &gt; Book &gt; </div>
                <div className="page-book-body">
                    <div className="page-book-option">
                        <ListCategory></ListCategory>
                        <ListPublisher publisher={publisher} setpublisher={setpublisher}></ListPublisher>
                        <ListPrice price={price} setprice={setprice}></ListPrice>
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
                            <Route path=":category" element={<ListBook action={"filter"} price={price} publisher={publisher} sort={sort}></ListBook>}></Route>
                            <Route path="" element={<ListBook action={"none"} price={price} publisher={publisher} sort={sort}></ListBook>}></Route>
                        </Routes>
                    </div>
                </div>
            </div >
        </>

    )
}
export default React.memo(BookPageCustomer)