import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import svg from "../svg";
import allAPI from "../../store/api/allAPI";
import globalFunctions from "../../globalFunctions";
const PartnerForm = ({ id, action }) => {
    //Khai báo các biến
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const partnerReducer = useSelector(state => state.partner).listPartner;
    const prm = useSelector(state => state.partner);
    const [partner, setpartner] = useState("");
    const INITIAL_FORM = {
        name: "",
        type: "",
        discount: "",
    }
    const INITIAL_VALID = {
        name: true,
        type: true,
        discount: true,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    const [validated, setvalidated] = useState(false);

    //Load dữ liệu biến nhớ
    useEffect(() => {
        let data = partnerReducer.data && partnerReducer.data.data ? partnerReducer.data.data : [];
        data = data == [] ? INITIAL_FORM : data.filter(item => item.id == id)[0];
        data && setpartner(data);
    }, [partnerReducer]);
    //Load dữ liệu vào form
    useEffect(() => {
        setdataForm({
            name: partner.name,
            type: partner.type,
            discount: partner.discount,
        });
    }, [partner])
    //validate
    useEffect(() => {
        let data = {
            name: globalFunctions.validNotEmpty(dataForm.name),
            type: dataForm.type,
            discount: globalFunctions.validNotEmpty(dataForm.discount)
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
        setdataForm({ ...dataForm, [name]: value })
    }
    const handleChangeType = () => {
        setedit(!edit);
    }
    const handleDelete = (id) => {
        dispatch(allAPI.partnerAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/doi-tac');
        }, 300)
    }
    const handleAdd = () => {
        dispatch(allAPI.partnerAPI.addOne(dataForm));
        setTimeout(() => {
            navigate('/admin/doi-tac');
        }, 300)
    }
    const handleUpdate = () => {
        dispatch(allAPI.partnerAPI.updateOne(id, dataForm));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(partner);
    }
    useEffect(() => {
        console.log(dataForm);
    }, [dataForm]);
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Tên đối tác: </div>
                    <div className="edit-input-form">
                        <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Loại: </div>
                    <div className="edit-select-form" style={{ width: "24rem", margin: "0" }} >
                        <select name="type" id="" disabled={!edit && !add} onChange={() => handleOnChangeForm(event)} >
                            <option value="0" >Chọn</option>
                            <option value="Nhà cung cấp" selected={partner.type == "Nhà cung cấp"}>Nhà cung cấp</option>
                            <option value="Đơn vị vận chuyển" selected={partner.type == "Đơn vị vận chuyển"}>Đơn vị vận chuyển</option>
                        </select>
                    </div>
                    {(edit || add) && (validData.type ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Chiết khấu: </div>
                    <div className="edit-input-form">
                        <input type="number" name="discount" value={dataForm.discount} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.discount ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
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
export default React.memo(PartnerForm)