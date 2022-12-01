import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import globalFunctions from "../../globalFunctions"
import allAPI from "../../store/api/allAPI";
import svg from "../svg"
import { useNavigate } from "react-router-dom";
const AuthorForm = ({ idAuthor, action }) => {
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const authorReducer = useSelector(state => state.author);
    const dispatch = useDispatch();
    const [author, setauthor] = useState("");
    const navigate = useNavigate();
    const INITIAL_FORM = {
        name: '',
        pseudonym: '',
        gender: '',
        year_of_birth: '',
        year_of_death: '',
        native_place: '',
        introduce: '',
    }
    const INITIAL_VALID = {
        name: false,
        pseudonym: false,
        gender: false,
        year_of_birth: false,
        year_of_death: false,
        native_place: false,
        introduce: false,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    useEffect(() => {
        setdataForm(author);
    }, [author])
    useEffect(() => {
        const data = {
            name: globalFunctions.validFullName(dataForm.name),
            pseudonym: true,
            gender: true,
            year_of_birth: true,
            year_of_death: true,
            native_place: true,
            introduce: true,
        }
        setvalidata(data);
    }, [dataForm])

    useEffect(() => {
        let data = authorReducer.listAuthor.res ? authorReducer.listAuthor.res.data : [];
        data = data != [] ? data.filter(item => item.id == idAuthor)[0] : INITIAL_FORM;
        data && setauthor(data);
    }, [authorReducer])

    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        setdataForm({ ...dataForm, [name]: val });
    }
    const handleChangeType = () => {
        setedit(!edit);
    }
    const handleOnAdd = () => {
        dispatch(allAPI.authorAPI.addOne(dataForm));
        navigate('/admin/tac-gia');
    }
    const handleOnSubmit = () => {
        dispatch(allAPI.authorAPI.updateOne(idAuthor, dataForm));
        setedit(false);
    }
    const handleOnChageGender = (event) => {
        (edit || add) && (setdataForm({ ...dataForm, gender: event.target.innerText }))
    }
    const refreshForm = () => {
        setdataForm(author);
    }
    const handleOnDelete = (id) => {
        dispatch(allAPI.authorAPI.deleteOne(id));
        dispatch(allAPI.authorAPI.getAll());
        setTimeout(() => {
            navigate('/admin/tac-gia');
        }, 300)
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Họ và tên: </div>
                    <div className="edit-input-form">
                        <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Bút danh: </div>
                    <div className="edit-input-form">
                        <input type="text" name="pseudonym" value={dataForm.pseudonym} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.pseudonym ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Giới tính: </div>
                    <div className="edit-input-form">
                        <div className={edit || add ? "edit-gender-form" : "show-gender-form"}><span className={dataForm.gender == "Nam" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nam</span>/<span className={dataForm.gender == "Nữ" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nữ</span></div>
                    </div>
                    {(edit || add) && (validData.gender ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Quê quán: </div>
                    <div className="edit-input-form">
                        <input type="text" name="native_place" value={dataForm.native_place} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.native_place ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Năm sinh - mất: </div>
                    <div className="edit-input-form" style={{ width: "24rem", marginLeft: "0" }}>
                        <input type="text" name="year_of_birth" value={dataForm.year_of_birth} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} style={{ width: '11.5rem' }} />
                        <span>-</span>
                        <input type="text" name="year_of_death" value={dataForm.year_of_death} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} style={{ width: '12rem' }} />
                    </div>
                    {(edit || add) && (validData.year_of_birth ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Giới thiệu: </div>
                    <div className="edit-input-form">
                        <textarea name="introduce" id="" cols="30" rows="10" value={dataForm.introduce} disabled={!edit && !add} onChange={() => handleOnChangeForm(event)} ></textarea>
                    </div>
                    {(edit || add) && (validData.introduce ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
            </form>
            <div className="footer-btn">
                <div className="button-delete">
                    {!add && (edit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (<button onClick={() => handleOnDelete(idAuthor)}> {svg.btnDelete} Xóa </button>))}
                </div>
                <div className="button-done">
                    {add ? (<button onClick={() => handleOnAdd()}>{svg.btnDone} Xác nhận </button>) : edit ? (<button onClick={() => handleOnSubmit()}>{svg.btnDone} Xác nhận </button>) : (<button onClick={() => handleChangeType()}>{svg.btnEdit} Chỉnh sửa </button>)}
                </div>
                {(edit || add) && (
                    <div className="button-edit" onClick={() => refreshForm()}>
                        <button> {svg.btnRefresh} Khôi phục</button>
                    </div>)}
            </div>
        </>
    )
}
export default React.memo(AuthorForm)