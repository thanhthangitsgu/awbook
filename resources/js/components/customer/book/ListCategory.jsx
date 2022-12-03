import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import allAPI from "../../../store/api/allAPI"
import globalFunctions from "../../../globalFunctions";
import { Link, NavLink } from "react-router-dom";
const ListCategory = () => {
    const [showAll, setshowAll] = useState(false);
    const categoryReducer = useSelector(state => state.category).listCategory;
    const [listCategory, setlistCategory] = useState([]);
    const dispatch = useDispatch();
    const handleChangeShow = () => {
        setshowAll(!showAll)
    }
    useEffect(() => {
        dispatch(allAPI.categoryAPI.getAll());
    }, [])

    useEffect(() => {
        categoryReducer.res && categoryReducer.res.data && setlistCategory(categoryReducer.res.data);
    }, [categoryReducer])

    const styleShow = {
        height: listCategory.length * 1.8 + 'rem'
    }

    let Active = 'book-active-link option-item cate-item';

    return (
        <div className="option-box">
            <div className="option-box-title">Danh Mục Sản Phẩm</div>
            <div className="option-box-list" style={showAll && listCategory.length * 1.8 > 10 ? styleShow : {}}>
                <Link to="/book"><div className="book-active-link option-item cate-item" id="cate_0">Tất cả</div></Link>
                {listCategory.map((element, index) => {
                    return (
                        <NavLink to={globalFunctions.formatLink(element.name)}><div className={({ isActive }) => isActive ? Active : undefined} key={index} id={"cate_" + element.id}>{element.name}</div></NavLink>
                    )
                })}
            </div>
            <div className="btn-view-all" onClick={() => handleChangeShow()}>Xem thêm</div>
        </div>
    )
}
export default React.memo(ListCategory)