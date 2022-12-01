import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import svg from "../svg";
import allAPI from "../../store/api/allAPI";
const CategoryForm = ({ idCategory, action }) => {
    //Khai báo các biến
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const categoryReducer = useSelector(state => state.category).listCategory;
    const dispatch = useDispatch();
    const [category, setcategory] = useState("");
    const navigate = useNavigate();
    const INITIAL_FORM = {
        name: '',
        descibe: '',
    }
    const INITIAL_VALID = {
        name: true,
        describe: true,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);

    //Load dữ liệu biến nhớ
    useEffect(() => {
        let data = (categoryReducer.res && categoryReducer.res.data) ? categoryReducer.res.data : [];
        data = data == [] ? INITIAL_FORM : data.filter(item => item.id == idCategory)[0];
        data && setcategory(data);
    }, [categoryReducer]);

    //Load dữ liệu vào form
    useEffect(() => { 
        setdataForm(category);
        let data = {
            name: true,
            describe: true,
        }
        setvalidata(data);
    }, [category]);

    //Khai báo các hàm
    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdataForm({ ...dataForm, [name]: value });
    }
    const handleChangeType = () => {
        setedit(!edit);
    }
    const handleDelete = (id) => {
        dispatch(allAPI.categoryAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/the-loai');
        }, 300)
    }
    const handleAdd = () => {
        dispatch(allAPI.categoryAPI.addOne(dataForm));
        setTimeout(() => {
            navigate('/admin/the-loai');
        }, 300)
    }
    const handleUpdate = () => {
        dispatch(allAPI.categoryAPI.updateOne(idCategory, dataForm));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(category);
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Tên thể loại: </div>
                    <div className="edit-input-form">
                        <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Mô  tả: </div>
                    <div className="edit-input-form">
                        <textarea name="describe" id="" cols="30" rows="10" value={dataForm.describe} disabled={!edit && !add} onChange={() => handleOnChangeForm(event)} ></textarea>
                    </div>
                    {(edit || add) && (validData.discribe ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
            </form>
            <div className="footer-btn">
                <div className="button-delete">
                    {!add && (edit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (<button onClick={() => handleDelete(idCategory)}> {svg.btnDelete} Xóa </button>))}
                </div>
                <div className="button-done">
                    {add ? (<button onClick={() => handleAdd()}>{svg.btnDone} Xác nhận </button>) : edit ? (<button onClick={() => handleUpdate()}>{svg.btnDone} Xác nhận </button>) : (<button onClick={() => handleChangeType()}>{svg.btnEdit} Chỉnh sửa </button>)}
                </div>
                {(edit || add) && (
                    <div className="button-edit" onClick={() => handleRefresh()}>
                        <button> {svg.btnRefresh} Khôi phục</button>
                    </div>)}
            </div>
        </>
    )
}
export default React.memo(CategoryForm)