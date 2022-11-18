import React from "react";
class ListCheckBox extends React.Component {
    render() {
        return (
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
        )
    }
}
export default ListCheckBox;