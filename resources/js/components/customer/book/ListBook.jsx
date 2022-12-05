import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allAPI from "../../../store/api/allAPI";
import { useState } from "react";
import { useEffect } from "react";
import CardBook from "../../CardBook"
import globalFunctions from "../../../globalFunctions";
const ListBook = ({ action, price, publisher, sort }) => {
    const param = useParams();
    const bookReducer = useSelector(state => state.book).listBook;
    const bookTitleReducer = useSelector(state => state.bookTitle).listBookTitle;
    const [listBook, setlistBook] = useState("");
    const [dataBook, setdataBook] = useState("");
    const [rootBook, setrootBook] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allAPI.bookAPI.getAll());
        dispatch(allAPI.titleAPI.getAll());
    }, []);

    useEffect(() => {
        bookReducer.data && setlistBook(bookReducer.data.data);
    }, [bookReducer]);

    useEffect(() => {
        bookTitleReducer.length && listBook.length && listBook.map((element, index) => {
            element.bookTitle = bookTitleReducer.filter(item => item.id == element.title_id)[0];
        });
        if (!param.category) {
            setrootBook(listBook);
        } else {
            let data = listBook;
            listBook.length && (data = data.filter(function (item) {
                if (item.bookTitle && item.bookTitle.nameCategory && item.bookTitle.nameCategory.length) {
                    let temp = [];
                    item.bookTitle.nameCategory.map((element) => {
                        temp.push(globalFunctions.formatLink(element))
                    })
                    return temp.includes(param.category);
                }
                return false;
            }));
            setrootBook(data);
        }
    }, [bookTitleReducer, listBook, param])

    useEffect(() => {
        let data = rootBook;
        data.length && (data = data.filter(item => filterByPublisher(item.pub_id) && filterByPrice(item.price)));
        setdataBook(data);
    }, [publisher, price, rootBook])


    const filterByPublisher = (item) => {
        if (!publisher.length) {
            return true;
        }
        return publisher.includes(item);
    }

    const filterByPrice = (item) => {
        let intPrice = parseInt(price);
        let intItem = parseInt(item);
        switch (intPrice) {
            case 50000:
                return intItem < 50000
            case 100000:
                return intItem >= 50000 && intItem < 100000
            case 200000:
                return intItem >= 100000 && intItem < 200000
            case 300000:
                return intItem >= 200000
            default:
                return true;
        }
    }

    // const handleSort = (list, temp) => {
    //     let data = list;
    //     console.log(temp);
    //     if (temp == "inc") {
    //         data = list.length && list.sort(function (a, b) {
    //             return globalFunctions.getPrice(a.price, a.promotion.discount) - globalFunctions.getPrice(b.price, b.promotion.discount);
    //         })

    //     } else {
    //         data = list.length && list.sort(function (a, b) {
    //             return globalFunctions.getPrice(b.price, b.promotion.discount) - globalFunctions.getPrice(a.price, a.promotion.discount);
    //         })
    //     }
    //     return data;
    // }

    return (
        <div className="page-book-list">
            {dataBook.length > 0 && dataBook.map((element, index) => {
                return (<CardBook key={index} book={element} ></CardBook>)
            })}
            {dataBook.length == 0 && (
                <div class="book-none">Chưa có sách thuộc danh mục này</div>
            )}
        </div>
    )
}
export default React.memo(ListBook);