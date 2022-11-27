import React from "react";
import { useState } from "react";
import svg from "./svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import allAPI from "../store/api/allAPI";
const BookForm = ({ listCategory, listAuthor }) => {
    const [showEdit, setshowEdit] = useState(false);
    const [showAdd, setshowAdd] = useState(true);
    const [name, setname] = useState('');
    const [author, setauthor] = useState('');
    const INITAL_CATEGORY = { id: [], name: [] }
    const [category, setcategory] = useState(INITAL_CATEGORY);
    const dispatch = useDispatch();
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
                setcategory({ ...category, temp });
        }
    }

    const handleChangeType = () => {

    }
    const handleOnAdd = () => {
        const data = {
            name: name,
            author_id: author
        }
        dispatch(allAPI.bookAPI.addBookTitle(data));
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
                <div className="table-category">
                    <table>
                        <thead>
                            <tr>
                                <th className="table-checkbox">#</th>
                                <th>Thể loại</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listCategory.data && listCategory.data.map((element, index) => {
                                return (
                                    <tr className={index % 2 ? "row-odd" : "row-even"}>
                                        <td className="table-checkbox"><input type="checkbox" name={element.name} value={element.id} onChange={() => handleOnChangeForm(event)} /></td>
                                        <td>{element.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
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