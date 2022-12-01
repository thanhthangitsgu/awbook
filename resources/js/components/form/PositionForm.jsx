import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import svg from "../svg";
import allAPI from "../../store/api/allAPI";
import globalFunctions from "../../globalFunctions";
const PositionForm = ({ id, action }) => {
    //Khai báo các biến
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const positionReducer = useSelector(state => state.position).listPosition;
    const [position, setposition] = useState("");
    const INITIAL_FORM = {
        name: ""
    }
    const INITIAL_VALID = {
        name: false
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    const [validated, setvalidated] = useState(false);

    //Load dữ liệu biến nhớ
    useEffect(() => {
        let data = (positionReducer.data && positionReducer.data.data) ? positionReducer.data.data : [];
        data = data == [] ? INITIAL_FORM : data.filter(item => item.id == id)[0];
        data && setposition(data);
    }, [positionReducer])

    //Load dữ liệu vào form
    useEffect(() => {
        setdataForm({
            name: position.name,
        });
    }, [position])

    //validate
    useEffect(() => {
        let data = {
            name: globalFunctions.validNotEmpty(dataForm.name),
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
        dispatch(allAPI.positionAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/chuc-vu');
        }, 300)
    }
    const handleAdd = () => {
        dispatch(allAPI.positionAPI.addOne(dataForm));
        setTimeout(() => {
            navigate('/admin/chuc-vu');
        }, 300)
    }
    const handleUpdate = () => {
        dispatch(allAPI.positionAPI.updateOne(id, dataForm));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(position);
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Tên chức vụ: </div>
                    <div className="edit-input-form">
                        <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
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
export default React.memo(PositionForm)