import bookTitleActions from "../actions/bookTitleActions";
import axiosClient from "./axiousClient";
const getAll = () => async (dispatch) => {
    const bookTitle = axiosClient.get('/api/book-title');
    const categoryBook = axiosClient.get('api/category-book');
    const category = axiosClient.get('api/category');
    await axios.all([bookTitle, category, categoryBook]).then(axios.spread((resBookTitle, resCategory, resCategoryBook) => {
        const fetchBookTitle = resBookTitle.data.data;
        const fetchCategoryBook = resCategoryBook.data.data;
        const fetchCategory = resCategory.data.data;
        fetchBookTitle.map((element) => {
            let listCategory = [];
            let listName = [];
            let temp = fetchCategoryBook.filter(item => item.book_id == element.id);
            temp.map((element) => {
                listCategory.push(element.cate_id);
                let temp_ = fetchCategory.filter(item => item.id == element.cate_id)[0];
                listName.push(temp_.name);
            });
            element.listCategory = listCategory;
            element.nameCategory = listName;
        })
        dispatch(bookTitleActions.getAll(fetchBookTitle));
    })).catch({
    });
}
const addOne = (dataForm) => async (dispatch) => {
    let data = {
        name: dataForm.name,
        author_id: dataForm.author_id
    }
    await axiosClient.post('api/book-title', data).then((response) => {
        dispatch(bookTitleActions.addOne(response));
        if (response.data.status) {
            let book_id = response.data.data.id;
            dataForm.cate_id.map((element, index) => {
                axiosClient.post('api/category-book', { book_id: book_id, cate_id: element });
            })
        }
        dispatch(getAll());
    })
}
const updateOne = (id, dataForm) => async (dispatch) => {
    let data = {
        name: dataForm.name,
        author_id: dataForm.author_id
    }
    await axiosClient.put('api/book-title/' + id, data).then((response) => {
        dispatch(bookTitleActions.updateOne(response));
        if (response.data.status) {
            let book_id = response.data.data.id;
            dataForm.cate_id.map((element, index) => {
                //axiosClient.delete('api/category-book/', { book_id: book_id, cate_id: element });
            })
        }
        dispatch(getAll());
    })
}
const deleteOne = (id) => async (dispatch) => {
    await axiosClient.delete('api/book-title/' + id).then((response) => {
        dispatch(bookTitleActions.deleteOne(response));
        dispatch(getAll());
    })
}
export default {
    getAll, addOne, updateOne, deleteOne
}