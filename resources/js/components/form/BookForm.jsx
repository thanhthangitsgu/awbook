import React from "react";
import { useState } from "react";
import svg from "../../components/svg"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAPI from "../../store/api/allAPI";
import { useNavigate } from "react-router-dom";
const BookForm = ({ listCategory, listAuthor }) => {
    const [showEdit, setshowEdit] = useState(false);
    const [showAdd, setshowAdd] = useState(true);
    const [name, setname] = useState('');
    const [author, setauthor] = useState('');
    const INITAL_CATEGORY = { id: [], name: [] }
    const [category, setcategory] = useState(INITAL_CATEGORY);
    const [newBookTitle, setnewBookTitle] = useState('');
    const listBookTitle = useSelector(state => state.book).listBookTitle;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        switch (name) {
            case 'name':
                setname(value);
                break;
            case 'author':
                setauthor(value)
                break;
            default:
                let temp = category;
                if (event.target.checked) {
                    temp.id.push(value);
                    temp.name.push(name);
                } else {
                    temp.id = temp.id.filter(item => item != value);
                    temp.name = temp.name.filter(item => item != name);
                }
                setcategory({ ...category, ...temp });
        }
    }
    useEffect(() => {
        listBookTitle.res && setnewBookTitle(listBookTitle.res.pop());
    }, [listBookTitle])

    const handleChangeType = () => {

    }
    const handleOnAdd = () => {
        const data = {
            name: name,
            author_id: author,
            category: category
        }
        dispatch(allAPI.bookAPI.addBookTitle(data));
        setTimeout(() => {
            navigate('/admin/dau-sach');
        }, 500)
    }

    const handleOnSubmit = () => {

    }

    return (
        <div className="book-form">
            <div className="book-form-content">
                <form action="" className="edit-form">
                    <div className="edit-row-item">
                        <div className="edit-label-form">Tên đầu sách: </div>
                        <div className="edit-input-form">
                            <input type="text" name="name" value={name} onChange={() => handleOnChangeForm(event)} disabled={!showEdit && !showAdd} />
                        </div>

                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Tác giả: </div>
                        <div className="edit-select-form">
                            <select name="author" onChange={() => handleOnChangeForm(event)}>
                                <option value="0">Chọn</option>
                                {listAuthor.res && listAuthor.res.data && listAuthor.res.data.map((element, index) => {
                                    return (
                                        <option value={element.id} key={index}>{element.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Thể loại: </div>
                        <div className="edit-input-form">
                            <div className="edit-long">{category.name && category.name.join('; ')}</div>
                        </div>

                    </div>
                </form>
            </div>

            <div className="footer-btn">
                <div className="button-delete">
                    {!showAdd && (showEdit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (<button> {svg.btnDelete} Xóa </button>))}
                </div>
                <div className="button-done">
                    {showAdd ? (<button onClick={() => handleOnAdd()}>{svg.btnDone} Xác nhận </button>) : showEdit ? (<button onClick={() => handleOnSubmit()}>{svg.btnDone} Xác nhận </button>) : (<button onClick={() => handleChangeType()}>{svg.btnEdit} Chỉnh sửa </button>)}
                </div>
            </div>

        </div>
    )
}
export default React.memo(BookForm);