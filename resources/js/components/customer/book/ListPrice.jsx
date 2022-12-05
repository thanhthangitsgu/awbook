import React from "react";
const ListPrice = ({ price, setprice }) => {
    const handleChangePrice = (event) => {
        setprice(event.target.value);
    }
    return (
        <div className="option-box">
            <div className="option-box-title">Giá</div>
            <div className="option-box-list" style={{ height: "10rem" }}>
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
    )
}
export default React.memo(ListPrice)