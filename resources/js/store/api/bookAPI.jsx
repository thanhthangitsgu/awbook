import adminBookActions from "../actions/adminBookActions";
import categoryActions from "../actions/categoryActions";
import axiosClient from "./axiousClient";
import bookActions from "../actions/bookActions";
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
    await axiosClient.post('/api/book-title', data).then((res) => {
        const id = res.data.data.id;
        data.category.id.map((element, index) => {
            const data_2 = { book_id: id, cate_id: element };
            axiosClient.post('api/category-book/', data_2).then((res2) => {
                dispatch(adminBookActions.addBookTitle(res));
                dispatch(categoryActions.addBookTitle(res2));
                dispatch(getListBookTitle());
            }).catch({

            })
        })
    }).catch({})
}
const deleteBookTitle = (id) => async (dispatch) => {
    const res = await axiosClient.delete('/api/book-title/' + id);
    dispatch(adminBookActions.deleteBookTitle(res));
}

const getAll = () => async (dispatch) => {
    await axiosClient.get('api/book').then((response) => {
        dispatch(bookActions.getAll(response));
    })
}
const addOne = (data) => async (dispatch) => {
    console.log("data", data)
    await axiosClient.post('api/book', data).then((response) => {
        dispatch(bookActions.addOne(response));
        dispatch(getAll());
    })
}
const updateOne = (id, data) => async (dispatch) => {
    await axiosClient.put('api/book/' + id, data).then((response) => {
        dispatch(bookActions.updateOne(response));
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/book/' + id).then((response) => {
        dispatch(bookActions.deleteOne(response));
        dispatch(getAll());
    })
}


export default {
    getListBookTitle,
    addBookTitle,
    deleteBookTitle,
    getAll,
    addOne,
    updateOne,
    deleteOne
}