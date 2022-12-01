import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import svg from "../svg";
import allAPI from "../../store/api/allAPI";
import SelectAddress from "../SelectAddress";
import globalFunctions from "../../globalFunctions";
const PublisherForm = ({ id, action }) => {
    //Khai báo các biến
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const publisherReducer = useSelector(state => state.publisher).listPublisher;
    const dispatch = useDispatch();
    const [publisher, setpublisher] = useState("");
    const navigate = useNavigate();
    const INITIAL_FORM = {
        id_pub: '',
        name: '',
        address: {
            village: '',
            ward: '',
            district: '',
            provide: '',
        }
    }
    const INITIAL_VALID = {
        id_pub: true,
        name: true,
        address: {
            village: true,
            ward: true,
            district: true,
            provide: true,
        }
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    const [validated, setvalidated] = useState(false);

    //Load dữ liệu biến nhớ
    useEffect(() => {
        let data = (publisherReducer.data && publisherReducer.data.data) ? publisherReducer.data.data : [];
        data = data == [] ? INITIAL_FORM : data.filter(item => item.id_pub == id)[0];
        data && setpublisher(data);
    }, [publisherReducer])

    //Load dữ liệu vào form
    useEffect(() => {
        let address = publisher && publisher.address ? publisher.address.split(',') : {
            village: " ",
            ward: " ",
            district: " ",
            provide: " ",
        }
        let data = {
            id_pub: publisher.id_pub,
            name: publisher.name,
            address: {
                village: address[0],
                ward: address[1],
                district: address[2],
                provide: address[3],
            }
        }
        setdataForm(data);
    }, [publisher])

    //validate
    useEffect(() => {
        let data = {
            id_pub: globalFunctions.validNotEmpty(dataForm.id_pub),
            name: globalFunctions.validNotEmpty(dataForm.name),
            address: globalFunctions.validNotEmpty(dataForm.address.village) && globalFunctions.validNotEmpty(dataForm.address.district) && globalFunctions.validNotEmpty(dataForm.address.ward) && globalFunctions.validNotEmpty(dataForm.address.provide)
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
    const handleDelete = (id) => {
        dispatch(allAPI.publisherAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/nha-xuat-ban');
        }, 300)
    }
    const handleAdd = () => {
        let data = { ...dataForm, address: (dataForm.address.village + ', ' + dataForm.address.ward + ', ' + dataForm.address.district + ", " + dataForm.address.provide) }
        console.log(data);
        dispatch(allAPI.publisherAPI.addOne(data));
        setTimeout(() => {
            navigate('/admin/nha-xuat-ban');
        }, 300)
    }
    const handleUpdate = () => {
        let data = { ...dataForm, address: dataForm.address.village + ', ' + dataForm.address.ward + ', ' + dataForm.address.district + ", " + dataForm.address.provide }
        dispatch(allAPI.publisherAPI.updateOne(id, data));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(publisher);
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Mã NXB: </div>
                    <div className="edit-input-form">
                        <input type="text" name="id_pub" value={dataForm.id_pub} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.id_pub ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Tên NXB: </div>
                    <div className="edit-input-form">
                        <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
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
                    {!add && (edit ? (<button onClick={() => handleChangeType()}> {svg.btnClose} Hủy </button>) : (<button onClick={() => handleDelete(id)}> {svg.btnDelete} Xóa </button>))}
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
export default React.memo(PublisherForm)