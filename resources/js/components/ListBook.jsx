import { useParams } from "react-router-dom"
import CardBook from "./CardBook"
import removeVietnameseTones from "../globalFunction";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function ListBook({ listBook, category, bookcategory, publisher, price, sort, showToast }) {
    let param = useParams();
    let filterCategory = param.category ? category.filter(item => removeVietnameseTones(item.name) === param.category)[0] : category;
    let bookFilter = [];
    let listIdPublisher = [];
    let tempCategory = bookcategory.filter(item => item.cate_id === filterCategory.id);
    //Lọc theo thể loại
    if (category.id === 0) {
        bookFilter = listBook;
    } else {
        tempCategory.map((element, index) => {
            let filterList = listBook.filter(item => item.title_id === element.book_id);
            bookFilter = [...bookFilter, ...filterList]
        })
    }
    //Lọc theo nhà xuất bản

    publisher.map((element, index) => {
        listIdPublisher.push(element.id_pub);
    })
    bookFilter = bookFilter.filter(item => listIdPublisher.includes(item.pub_id));

    //Lọc theo giá
    switch (price) {
        case '50000':
            bookFilter = bookFilter.filter(item => (item.price - item.price * item.discount / 100) < 50000);
            break;
        case '100000':
            bookFilter = bookFilter.filter(item => (item.price - item.price * item.discount / 100) >= 50000 && (item.price - item.price * item.discount / 100) <= 100000);
            break;
        case '200000':
            bookFilter = bookFilter.filter(item => (item.price - item.price * item.discount / 100) >= 100000 && (item.price - item.price * item.discount / 100) <= 200000);
            break;
        case '300000':
            bookFilter = bookFilter.filter(item => (item.price - item.price * item.discount / 100) > 200000);
            break;
        default:
    }

    //Sắp xếp
    if (sort === "des") bookFilter.sort((a, b) => (b.price - b.price * b.discount / 100 - (a.price - a.price * a.discount / 100)));
    else bookFilter.sort((a, b) => (a.price - a.price * a.discount / 100 - (b.price - b.price * b.discount / 100)));

    const showToastMessage = (message) =>{
        showToast(message);
    }
    return (
        <div className="page-book-list">
            {bookFilter.map((element, index) => {
                return (<CardBook key={index} book={element} showToastMessage = {showToastMessage} ></CardBook>)
            })}
        </div>

    )
}