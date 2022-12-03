import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allAPI from "../../../store/api/allAPI";
import { useState } from "react";
import { useEffect } from "react";
import CardBook from "../../CardBook"
const ListBook = ({ action }) => {
    const param = useParams();
    const bookReducer = useSelector(state => state.book).listBook;
    const [listBook, setlistBook] = useState("");
    const [dataBook, setdataBook] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allAPI.bookAPI.getAll());
    }, []);

    useEffect(() => {
        bookReducer.data && setlistBook(bookReducer.data.data);
    }, [bookReducer]);

    useEffect(() => {
        setdataBook(listBook);
    }, [listBook])

    return (
        <div className="page-book-list">
            {dataBook.length && dataBook.map((element, index) => {
                return (<CardBook key={index} book={element} ></CardBook>)
            })}
        </div>
    )
}
export default React.memo(ListBook);