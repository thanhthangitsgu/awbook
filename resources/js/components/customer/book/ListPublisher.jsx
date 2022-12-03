import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allAPI from "../../../store/api/allAPI";
import { useState } from "react";
import { useEffect } from "react";
const listPublisher = () => {
    const [listPublisher, setlistPublisher] = useState([]);
    const publisherReducer = useSelector(state => state.publisher).listPublisher;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allAPI.publisherAPI.getAll());
    }, []);
    useEffect(() => {
        publisherReducer.data && setlistPublisher(publisherReducer.data.data);
    }, [publisherReducer]);
    const styleShow = {
        height: listPublisher.length * 1.8 + 'rem'
    }

    return (
        <div className="option-box">
            <div className="option-box-title">Nhà xuất bản</div>
            <div className="option-box-list" style={styleShow}>
                {listPublisher.length && listPublisher.map((element, index) => {
                    return (
                        <div className="option-item" key={index}>
                            <input type="checkbox" name={element.id} id={element.id_pub} />
                            <label htmlFor={element.id_pub} className="option-label"> {element.name}</label>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default React.memo(listPublisher)