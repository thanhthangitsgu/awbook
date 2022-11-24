import React from "react"
import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import globalFunctions from "../../../globalFunctions";
import svg from "../../../components/svg";
import useEffectOnce from "../../../useEffectOne";
import SelectAddress from "../../../components/SelectAddress";
import { useEffect } from "react";
import axios from "axios";
const UserDetail = () => {
    const param = useParams();
    const dataUser = useSelector(state => state.user);
    const [user, setuser] = useState({ surname: false });
    const [showEdit, setshowedit] = useState(false);

    const INITIAL_FORM = {
        fullname: '', gender: '', birthday: '', phone: '', email: '', address: '',
        validFullName: true, validGender: true, validBirthday: true, validPhone: true, validEmail: true, validAddress: true,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [showmodal, setshowmodal] = useState(true);
    //Show modal
    const handleOnHide = () => {
        setshowmodal(false);
    }
    //Lấy user
    let listUser = dataUser.res ? dataUser.res.data : [];
    const updateUser = () => {
        let temp = listUser.data && listUser.data.filter(item => item.id == param.id)[0];
        if (!temp) temp = [];
        setuser(temp);
    }
    //Cập nhật dataForm
    const updateDataForm = () => {
        let temp = user.surname ? {
            fullname: user.surname + " " + user.name, gender: user.gender, birthday: user.date_of_birth, phone: user.phone, email: user.email, address: user.address, validFullName: true, validGender: true, validBirthday: true, validPhone: true, validEmail: true, validAddress: true,
        } : { INITIAL_FORM }
        setdataForm({ ...dataForm, ...temp });
    }

    useEffectOnce(updateUser, dataUser);
    useEffectOnce(updateDataForm, user);

    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        let check = true;
        switch (name) {
            case 'fullname':
                check = globalFunctions.validFullName(val);
                setdataForm({ ...dataForm, [name]: val, validFullName: check });
                break
            case 'phone':
                check = globalFunctions.validPhone(val);
                setdataForm({ ...dataForm, [name]: val, validPhone: check });
                break
            case 'email':
                check = globalFunctions.validEmail(val);
                setdataForm({ ...dataForm, [name]: val, validEmail: check });
                break
            default: setdataForm({ ...dataForm, [name]: val });
        }
    }
    const handleOnChageGender = (event) => {
        setdataForm({ ...dataForm, gender: event.target.innerText })
    }
    const handleChangeType = () => {
        setshowedit(!showEdit);
    }


    return (
        <Modal show={showmodal} onHide={handleOnHide} size="lg" centered>
            <Modal.Header>
                <div className="title">THÔNG TIN NGƯỜI DÙNG</div>
            </Modal.Header>
            <Modal.Body>
                <form action="" className="edit-form">
                    <div className="edit-row-item">
                        <div className="edit-label-form">Họ và tên: </div>
                        <div className="edit-input-form">
                            <input type="text" name="fullname" value={dataForm.fullname} onChange={() => handleOnChangeForm(event)} disabled={!showEdit}/>
                        </div>
                        {showEdit && (dataForm.validFullName ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}

                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Số điện thoại: </div>
                        <div className="edit-input-form">
                            <input type="text" name="phone" value={dataForm.phone} onChange={() => handleOnChangeForm(event)} disabled={!showEdit}/>
                        </div>
                        {showEdit && (dataForm.validPhone ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Địa chỉ email: </div>
                        <div className="edit-input-form">
                            <input type="text" name="email" value={dataForm.email} onChange={() => handleOnChangeForm(event)} disabled={!showEdit}/>
                        </div>
                        {showEdit && (dataForm.validEmail ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Ngày sinh: </div>
                        <div className="edit-input-form">
                            <input type="date" name="birthday" value={dataForm.birthday} onChange={() => handleOnChangeForm(event)} disabled={!showEdit}/>
                        </div>
                        {showEdit && (dataForm.validBirthday ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Giới tính: </div>
                        <div className="edit-input-form">
                            <div className="edit-gender-form"><span className={dataForm.gender == "Nam" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nam</span>/<span className={dataForm.gender == "Nữ" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nữ</span></div>
                        </div>
                        {showEdit && (dataForm.validBirthday ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-row-item">
                        <div className="edit-label-form">Địa chỉ: </div>
                        <div className="edit-input-form">
                            <input type="text" name="addess" value={dataForm.address} onChange={() => handleOnChangeForm(event)} disabled={!showEdit}/>
                        </div>
                        {showEdit && (dataForm.validBirthday ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                    </div>
                    <div className="edit-select-form">
                        <SelectAddress setshowedit={setshowedit} showEdit = {showEdit}></SelectAddress>
                    </div>
                </form>
                <div className="footer-btn">
                    <div className="button-delete">
                        <button> {svg.btnDelete} Hủy </button>
                    </div>
                    <div className="button-edit">
                        <button> {svg.btnEdit} Khôi phục</button>
                    </div>
                    <div className="button-done" onClick={() => handleChangeType()}>
                        <button>  {svg.btnDone} Xác nhận </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default React.memo(UserDetail)