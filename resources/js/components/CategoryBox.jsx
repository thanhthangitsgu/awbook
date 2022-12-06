import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import allAPI from "../store/api/allAPI";
import { Link } from "react-router-dom";
import { useRef } from "react";
import globalFunctions from "../globalFunctions";
import svg from "./svg";
const CategoryBox = () => {
  const categoryReducer = useSelector(state => state.category).listCategory;
  const dispatch = useDispatch();
  const [listCategory, setlistCategory] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    dispatch(allAPI.categoryAPI.getAll());
  }, [])

  useEffect(() => {
    categoryReducer.res && categoryReducer.res.data && setlistCategory(categoryReducer.res.data);
  }, [categoryReducer])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setisOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [])
  const showBox = () => {
    setisOpen(!isOpen);
  }
  return (
    <div className="popup-box" ref={wrapperRef}>
      <button className={isOpen === true ? "btn-click btn-popup" : "btn-popup"} onClick={() => showBox()}>
       {svg.btnCategory}
      </button>
      <div className={isOpen === true ? "box-body" : "box-body box-hiden"}>
        <div className="box-content">
          <div className="box-header">
            <div className="box-title">DANH MỤC SẢN PHẨM</div>
            <button className="box-btn-close" onClick={() => showBox()}>
             {svg.btnCloseBox}
            </button>
          </div>
          <div className="box-list-item">
            {listCategory.length && listCategory.map((element, index) => {
              return (
                <Link to={"/book/" + globalFunctions.formatLink(element.name)} key={index} >
                  <div className="box-item" onClick={() => showBox()}>
                    <div className="box-icon">
                      <img src="https://img.icons8.com/fluency/96/null/diversity.png" />
                    </div>
                    <div className="box-item-content">{element.name}</div>
                  </div>
                </Link>
              )
            })}
          </div>
          <Link to="/book"><div className="box-footer" onClick={() => showBox()}>Xem tất cả</div></Link>
        </div>
        <div className="box-triangle"></div>
      </div>
    </div>
  )
}
export default CategoryBox