import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import SelectAddress from "./SelectAddress";
import globalFunctions from "../globalFunctions";
import allAPI from "../store/api/allAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import svg from "./svg";
const UserForm = ({ idUser, action, handleOnHide }) => {
    const dataUser = useSelector(state => state.user);
    const listUser = dataUser.res ? dataUser.res.data : [];
    const dispatch = useDispatch();
    const [user, setuser] = useState('');
    const [showEdit, setshowedit] = useState(false);
    const [showAdd, setshowadd] = useState(action.action == "add");
    const INITIAL_ADDRESS = { village: '', provide: '', district: '', ward: '' }
    const [address, setaddress] = useState(INITIAL_ADDRESS);
    const INITIAL_FORM = {
        fullname: '', gender: '', birthday: '', phone: '', email: '', address: address,
        validFullName: false, validGender: true, validBirthday: true, validPhone: false, validEmail: false, validAddress: false,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const role = useSelector(state => state.role);

    const updateDataForm = () => {
        let temp = user.surname ? {
            fullname: user.surname + " " + user.name, gender: user.gender, birthday: user.date_of_birth, phone: user.phone, email: user.email, address: address,
            validFullName: true, validGender: true, validBirthday: true, validPhone: true, validEmail: true, validAddress: true,
        } : { INITIAL_FORM }
        user.surname && setdataForm({ ...dataForm, ...temp });
    }

    const updateUser = () => {
        let temp = listUser.data && listUser.data.filter(item => item.id == idUser)[0];
        temp = temp ? temp : [];
        let temp_ = temp.surname ? temp.address : "";
        let arr = temp_ == "" ? "" : temp_.split(',');
        arr != "" && setaddress({
            village: arr[0],
            provide: arr[3],
            district: arr[2],
            ward: arr[1]
        })
        setuser(temp);
    }
    useEffect(() => {
        updateUser();
    }, [dataUser]);

    useEffect(() => {
        updateDataForm();
    }, [user])
    
    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        let check = true;
        switch (name) {
            case 'fullname':
                check = globalFunctions.validFullName(val);
                setdataForm({ ...dataForm, fullname: val, validFullName: check });
                break
            case 'phone':
                check = globalFunctions.validPhone(val);
                setdataForm({ ...dataForm, [name]: val, validPhone: check });
                break
            case 'email':
                check = globalFunctions.validEmail(val);
                setdataForm({ ...dataForm, [name]: val, validEmail: check });
                break
            case 'address':
                check = val != '';
                let temp = { ...address, village: val }
                setdataForm({ ...dataForm, address: temp, validAddress: check });
                break
            default: setdataForm({ ...dataForm, [name]: val });
        }
    }
    const handleOnChageGender = (event) => {
        (showEdit || showAdd) && (setdataForm({ ...dataForm, gender: event.target.innerText }))
    }
    const handleChangeType = () => {
        setshowedit(!showEdit);
    }
    const handleOnSubmit = () => {
        setshowedit(!showEdit);
        dispatch(allAPI.userAPI.updateOne(idUser, dataForm));
        dispatch(allAPI.userAPI.getAll());
    }
    const handleOnAdd = () =>{
        dispatch(allAPI.userAPI.addOne(dataForm));
        dispatch(allAPI.userAPI.getAll());
        handleOnHide();
        
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Họ và tên: </div>
                    <div className="edit-input-form">
                        <input type="text" name="fullname" value={dataForm.fullname} onChange={() => handleOnChangeForm(event)} disabled={!showEdit && !showAdd} />
                    </div>
                    {(showEdit || showAdd) && (dataForm.validFullName ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Số điện thoại: </div>
                    <div className="edit-input-form">
                        <input type="text" name="phone" value={dataForm.phone} onChange={() => handleOnChangeForm(event)} disabled={!showEdit && !showAdd} />
                    </div>
                    {(showEdit || showAdd) && (dataForm.validPhone ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Địa chỉ email: </div>
                    <div className="edit-input-form">
                        <input type="text" name="email" value={dataForm.email} onChange={() => handleOnChangeForm(event)} disabled={!showEdit && !showAdd} />
                    </div>
                    {(showEdit || showAdd) && (dataForm.validEmail ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Ngày sinh: </div>
                    <div className="edit-input-form">
                        <input type="date" name="birthday" value={dataForm.birthday} onChange={() => handleOnChangeForm(event)} disabled={!showEdit && !showAdd} />
                    </div>
                    {(showEdit || showAdd) && (dataForm.validBirthday ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Giới tính: </div>
                    <div className="edit-input-form">
                        <div className={showEdit || showAdd ? "edit-gender-form" : "show-gender-form"}><span className={dataForm.gender == "Nam" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nam</span>/<span className={dataForm.gender == "Nữ" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nữ</span></div>
                    </div>
                    {(showEdit || showAdd) && (dataForm.validBirthday ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Địa chỉ: </div>
                    <div className="edit-input-form">
                        <input type="text" name="address" value={dataForm.address.village} onChange={() => handleOnChangeForm(event)} disabled={!showEdit && !showAdd} />
                    </div>
                    {(showEdit || showAdd) && (dataForm.validAddress ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-select-form">
                    <SelectAddress showEdit={showEdit} dataForm={dataForm} setdataForm={setdataForm} showAdd={showAdd}></SelectAddress>
                </div>
            </form>
            <div className="footer-btn">
                <div className="button-delete">
                    {!showAdd && (showEdit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (<button> {svg.btnDelete} Xóa </button>))}
                </div>
                <div className="button-done">
                    {showAdd ? (<button onClick={() => handleOnAdd()}>{svg.btnDone} Xác nhận </button>) : showEdit ? (<button onClick={() => handleOnSubmit()}>{svg.btnDone} Xác nhận </button>) : (<button onClick={() => handleChangeType()}>{svg.btnEdit} Chỉnh sửa </button>)}
                </div>
                {(showEdit || showAdd) && (
                    <div className="button-edit" onClick={() => updateDataForm()}>
                        <button> {svg.btnRefresh} Khôi phục</button>
                    </div>)}
            </div>
        </>
    )
}
export default React.memo(UserForm)