import React, { startTransition } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import svg from "../svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import allAPI from "../../store/api/allAPI";
import globalFuntions from "../../globalFunctions";
const BookTitleForm = ({ id, action }) => {
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const bookTitleReducer = useSelector(state => state.bookTitle).listBookTitle;
    const listAuthor = useSelector(state => state.author).listAuthor;
    const listCategory = useSelector(state => state.category).listCategory;
    const [bookTitle, setBookTitle] = useState("");
    const INITIAL_FORM = {
        name: "",
        author_id: "",
        category: [],
        cate_id: [],
    }
    const INITIAL_VALID = {
        name: false,
        author_id: false,
        category: false,
        cate_id: false,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    const [validated, setvalidated] = useState(false);
    //Load dữ liệu vào reducer
    useEffect(() => {
        console.log(bookTitleReducer);
        let data = bookTitleReducer.length ? bookTitleReducer.filter(item => item.id == id)[0] : INITIAL_FORM;
        data && setBookTitle(data);
    }, [bookTitleReducer]);
    //Load dữ liệu vào form
    useEffect(() => {
        let data = {
            name: bookTitle.name,
            author_id: bookTitle.author_id,
            category: bookTitle.nameCategory,
            cate_id: bookTitle.listCategory,
        }
        !add && setdataForm(data);
    }, [bookTitle])
    //validate
    useEffect(() => {
        let data = {
            name: globalFuntions.validFullName(dataForm.name),
            author_id: dataForm.author_id != 0,
            cate_id: dataForm.cate_id && dataForm.cate_id.length > 0
        }
        setvalidata(data);
    }, [dataForm])

    useEffect(() => {
        setvalidated(validData.name && validData.author_id && validData.cate_id);
    }, [validData])

    //Khai báo các hàm
    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdataForm({ ...dataForm, [name]: value })
    }
    const handleChangeType = () => {
        setedit(!edit);
    }
    const handleDelete = (id) => {
        dispatch(allAPI.titleAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/dau-sach');
        }, 300)
    }
    const handleAdd = () => {
        dispatch(allAPI.titleAPI.addOne(dataForm));
        setTimeout(() => {
            navigate('/admin/dau-sach');
        }, 300)
    }
    const handleUpdate = () => {
        dispatch(allAPI.titleAPI.updateOne(id, dataForm));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(bookTitle);
    }
    const handleOnChangeCategory = (event) => {
        let temp = dataForm.category;
        let id = dataForm.cate_id;
        if (event.target.checked) {
            temp.push(event.target.name);
            id.push(event.target.value + "");

        }
        else {
            temp = temp.filter(item => item != event.target.name)
            id = id.filter(item => item != event.target.value);
        }
        setdataForm({ ...dataForm, category: temp, cate_id: id });
    }

    return (
        <div className="book-form">
            <div className="book-form-content">
                <form action="" className="edit-form">
                    <div className="edit-row-item">
                        <div className="edit-label-form">Tên đầu sách: </div>
                        <div className="edit-input-form">
                            <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                        </div>
                        {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Tác giả: </div>
                        <div className="edit-select-form">
                            <select name="author_id" onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} >
                                <option value="0">Chọn</option>
                                {listAuthor.res && listAuthor.res.data && listAuthor.res.data.map((element, index) => {
                                    return (
                                        <option value={element.id} key={index} selected={element.id == dataForm.author_id}>{element.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {(edit || add) && (validData.author_id ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Thể loại: </div>
                        <div className="edit-input-form">
                            <div className="edit-long">{dataForm.category && dataForm.category.join('; ')}</div>
                        </div>
                        {(edit || add) && (validData.cate_id ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
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
                            {listCategory.res && listCategory.res.data && listCategory.res.data.map((element, index) => {
                                return (
                                    <tr className={index % 2 ? "row-odd" : "row-even"}>
                                        <td className="table-checkbox">
                                            <input type="checkbox" value={element.id} name={element.name} checked={dataForm.category && dataForm.category.includes(element.name)} onClick={() => handleOnChangeCategory(event)} disabled={!edit} />
                                        </td>
                                        <td>
                                            {element.name}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="footer-btn">
                <div className="button-delete">
                    {!add && (edit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (<button onClick={() => handleDelete(id)}> {svg.btnDelete} Xóa </button>))}
                </div>
                <div className="button-done">
                    {add ? (<button onClick={() => handleAdd()} disabled={!validated}>{svg.btnDone} Xác nhận </button>) : edit ? (<button onClick={() => handleUpdate()} disabled={!validated}>{svg.btnDone} Xác nhận </button>) : (<button onClick={() => handleChangeType()}>{svg.btnEdit} Chỉnh sửa </button>)}
                </div>
            </div>

        </div>
    )
}
export default React.memo(BookTitleForm);