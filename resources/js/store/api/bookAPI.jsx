import adminBookActions from "../actions/adminBookActions";
import axiosClient from "./axiousClient";
import axios from "axios";
const getListBookTitle = () => async (dispatch) => {
    const bookTitle = axiosClient.get('/api/book-title');
    const categoryBook = axiosClient.get('api/category-book');
    const category = axiosClient.get('api/category');
    await axios.all([bookTitle, category, categoryBook]).then(axios.spread((resBookTitle, resCategory, resCategoryBook) => {
        const fetchBookTitle = resBookTitle.data.data;
        const fetchCategoryBook = resCategoryBook.data.data;
        const fetchCategory = resCategory.data.data;
        fetchBookTitle.map((element, index) => {
            let listCategory = [];
            let listName = [];
            let temp = fetchCategoryBook.filter(item => item.book_id == element.id);
            temp.map((element, id) => {
                listCategory.push(element.cate_id);
                let temp_ = fetchCategory.filter(item => item.id == element.cate_id)[0];
                listName.push(temp_.name);
            });
            element.listCategory = listCategory;
            element.nameCategory = listName;
        })
        dispatch(adminBookActions.getListBookTitle(fetchBookTitle));
    })).catch({

    });
}
const addBookTitle = (data) => async (dispatch) => {
    const res = await axiosClient.post('/api/book-title', data);
    dispatch(adminBookActions.addBookTitle(res));
}
const deleteBookTitle = (id) => async (dispatch) => {
    const res = await axiosClient.delete('/api/book-title/' + id);
    dispatch(adminBookActions.deleteBookTitle(res));
}
export default {
    getListBookTitle,
    addBookTitle,
    deleteBookTitle
}