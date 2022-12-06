import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import svg from "../svg";
import allAPI from "../../store/api/allAPI";
import globalFunctions from "../../globalFunctions";
import SelectAddress from "../SelectAddress";
const UserForm = ({ id, action }) => {
    //Khai báo các biến
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState((action + "") == 'add');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.user).listUser;
    const positionReducer = useSelector(state => state.position).listPosition;
    const [listPosotion, setlistPosotion] = useState("");
    const [user, setuser] = useState("");
    const INITIAL_FORM = {
        fullname: "",
        gender: '',
        date_of_birth: '',
        position_id: '',
        address: {
            village: '',
            ward: '',
            district: '',
            provide: '',
        },
        phone: '',
        email: '',
    }
    const INITIAL_VALID = {
        fullname: false,
        gender: false,
        date_of_birth: false,
        position_id: false,
        address: false,
        phone: false,
        email: false,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    const [validated, setvalidated] = useState(false);

    useEffect(() => {
        positionReducer.data && positionReducer.data.status && setlistPosotion(positionReducer.data.data);
    }, [positionReducer]);

    //Load dữ liệu biến nhớ
    useEffect(() => {
        let data = userReducer.data && userReducer.data.data ? userReducer.data.data : [];
        data = data == [] ? INITIAL_FORM : data.filter(item => item.id == id)[0];
        data && setuser(data);
    }, [userReducer]);
    //Load dữ liệu vào form
    useEffect(() => {
        let address = user && user.address ? user.address.split(',') : {
            village: " ",
            ward: " ",
            district: " ",
            provide: " ",
        }
        !add && setdataForm({
            fullname: user.surname + " " + user.name,
            gender: user.gender,
            date_of_birth: user.date_of_birth,
            position_id: user.position_id,
            address: {
                village: address[0],
                ward: address[1],
                district: address[2],
                provide: address[3],
            },
            phone: user.phone,
            email: user.email,
        });
    }, [user])
    //validate
    useEffect(() => {

        let data = {
            fullname: globalFunctions.validFullName(dataForm.fullname),
            gender: globalFunctions.validNotEmpty(dataForm.gender),
            date_of_birth: true,
            position_id: true,
            address: globalFunctions.validNotEmpty(dataForm.address.village) && globalFunctions.validNotEmpty(dataForm.address.district) && globalFunctions.validNotEmpty(dataForm.address.ward) && globalFunctions.validNotEmpty(dataForm.address.provide),
            phone: globalFunctions.validPhone(dataForm.phone),
            email: globalFunctions.validEmail(dataForm.email),
        }
        setvalidata(data);
    }, [dataForm])

    useEffect(() => {
        let temp = true;
        Object.values(validData).forEach(value => {
            if (!value) {
                temp = false;
                return;
            }
        })
        setvalidated(temp);
    }, [validData])

    //Khai báo các hàm
    const handleOnChangeForm = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name != "address") setdataForm({ ...dataForm, [name]: value });
        else setdataForm({ ...dataForm, address: { ...dataForm.address, village: value } })
    }
    const handleChangeType = () => {
        setedit(!edit);
    }
    const handleOnChageGender = (event) => {
        (edit || add) && (setdataForm({ ...dataForm, gender: event.target.innerText }))
    }
    const handleDelete = (id) => {
        dispatch(allAPI.userAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/nguoi-dung');
        }, 300)
    }
    const handleAdd = () => {
        dispatch(allAPI.userAPI.addOne(dataForm));
        setTimeout(() => {
            navigate('/admin/nguoi-dung');
        }, 300)
    }
    const handleUpdate = () => {
        dispatch(allAPI.userAPI.updateOne(id, dataForm));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(user);
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Họ và tên: </div>
                    <div className="edit-input-form">
                        <input type="text" name="fullname" value={dataForm.fullname} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.fullname ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Số điện thoại: </div>
                    <div className="edit-input-form">
                        <input type="text" name="phone" value={dataForm.phone} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.phone ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Địa chỉ email: </div>
                    <div className="edit-input-form">
                        <input type="text" name="email" value={dataForm.email} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.email ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Ngày sinh: </div>
                    <div className="edit-input-form">
                        <input type="date" name="date_of_birth" value={dataForm.date_of_birth} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.date_of_birth ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Giới tính: </div>
                    <div className="edit-input-form">
                        <div className={edit || add ? "edit-gender-form" : "show-gender-form"}><span className={dataForm.gender == "Nam" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nam</span>/<span className={dataForm.gender == "Nữ" ? "" : "not-select"} onClick={() => handleOnChageGender(event)}>Nữ</span></div>
                    </div>
                    {(edit || add) && (validData.gender ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                {
                    action != 'manage' && (
                        <div className="edit-row-item">
                            <div className="edit-label-form">Vai trò: </div>
                            <div className="edit-select-form" style={{ width: "24rem", marginLeft: "0" }}>
                                <select name="position_id" id="" onChange={() => handleOnChangeForm(event)} disabled={!edit && !add}>
                                    {listPosotion && listPosotion.map((element, index) => {
                                        return (
                                            <option value={element.id}>{element.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            {(edit || add) && (validData.position_id ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                        </div>
                    )
                }

                <div className="edit-row-item">
                    <div className="edit-label-form">Địa chỉ: </div>
                    <div className="edit-input-form">
                        <input type="text" name="address" value={dataForm.address.village} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.address ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>

                <div className="edit-select-form">
                    <SelectAddress showEdit={edit} dataForm={dataForm} setdataForm={setdataForm} showAdd={add}></SelectAddress>
                </div>

            </form>
            <div className="footer-btn">
                <div className="button-delete">
                    {!add && (edit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (action != 'manage' ? (<button> {svg.btnDelete} Xóa </button>) : (<div></div>)))}
                </div>
                <div className="button-done">
                    {add ? (<button onClick={() => handleAdd()} disabled={!validated}>{svg.btnDone} Xác nhận </button>) : edit ? (<button onClick={() => handleUpdate()} disabled={!validated}>{svg.btnDone} Xác nhận </button>) : (<button onClick={() => handleChangeType()}>{svg.btnEdit} Chỉnh sửa </button>)}
                </div>
                {(edit || add) && (
                    <div className="button-edit" onClick={() => handleRefresh()}>
                        <button disabled={!validated}> {svg.btnRefresh} Khôi phục</button>
                    </div>)}
            </div>
        </>
    )
}
export default React.memo(UserForm)