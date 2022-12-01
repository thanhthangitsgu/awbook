import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import svg from "../svg";
import allAPI from "../../store/api/allAPI";
import globalFunctions from "../../globalFunctions";
const PromotionForm = ({ id, action }) => {
    //Khai báo các biến
    const [edit, setedit] = useState(false)
    const [add, setadd] = useState(action == 'add');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const promotionReducer = useSelector(state => state.promotion).listPromotion;
    const prm = useSelector(state => state.promotion);
    const [promotion, setpromotion] = useState("");
    const INITIAL_FORM = {
        name: "",
        start_time: globalFunctions.getCurrentTime('YYYY-MM-DDTHH:mm'),
        end_time: globalFunctions.getCurrentTime('YYYY-MM-DDTHH:mm'),
        discount: "",
    }
    const INITIAL_VALID = {
        name: false,
        start_time: false,
        end_time: false,
        discount: false,
    }
    const [dataForm, setdataForm] = useState(INITIAL_FORM);
    const [validData, setvalidata] = useState(INITIAL_VALID);
    const [validated, setvalidated] = useState(false);
    useEffect(() => {
        console.log(prm);
    }, [prm])
    //Load dữ liệu biến nhớ
    useEffect(() => {
        let data = promotionReducer.data && promotionReducer.data.data ? promotionReducer.data.data : [];
        data = data == [] ? INITIAL_FORM : data.filter(item => item.id == id)[0];
        data && setpromotion(data);
    }, [promotionReducer]);
    //Load dữ liệu vào form
    useEffect(() => {
        setdataForm({
            name: promotion.name,
            start_time: promotion.start_time,
            end_time: promotion.end_time,
            discount: promotion.discount,
        });
    }, [promotion])
    //validate
    useEffect(() => {
        let data = {
            name: globalFunctions.validNotEmpty(dataForm.name),
        }
        setvalidata(data);
    }, [dataForm])

    useEffect(() => {
        //console.log(globalFunctions.getCurrentTime('YYYY-MM-DDTHH:mm'));
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
        dispatch(allAPI.promotionAPI.deleteOne(id));
        setTimeout(() => {
            navigate('/admin/khuyen-mai');
        }, 300)
    }
    const handleAdd = () => {
        dispatch(allAPI.promotionAPI.addOne(dataForm));
        setTimeout(() => {
            navigate('/admin/khuyen-mai');
        }, 300)
    }
    const handleUpdate = () => {
        dispatch(allAPI.promotionAPI.updateOne(id, dataForm));
        setedit(!edit);
    }
    const handleRefresh = () => {
        setdataForm(promotion);
    }
    return (
        <>
            <form action="" className="edit-form">
                <div className="edit-row-item">
                    <div className="edit-label-form">Tên khuyến mãi: </div>
                    <div className="edit-input-form">
                        <input type="text" name="name" value={dataForm.name} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">TG bắt đầu: </div>
                    <div className="edit-input-form">
                        <input
                            type="datetime-local"
                            name="start_time"
                            value={dataForm.start_time}
                            onChange={() => handleOnChangeForm(event)}
                            disabled={!edit && !add}
                            max={globalFunctions.getCurrentTime('YYYY-MM-DDTHH:mm')}
                        />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">TG kết thúc: </div>
                    <div className="edit-input-form">
                        <input
                            type="datetime-local"
                            name="end_time"
                            value={dataForm.end_time}
                            onChange={() => handleOnChangeForm(event)}
                            disabled={!edit && !add}
                            min={globalFunctions.getCurrentTime('YYYY-MM-DDTHH:mm')}

                        />
                    </div>
                    {(edit || add) && (validData.name ? (<div className="edit-icon-valid">{svg.validIcon}</div>) : (<div className="edit-icon-notvalid">{svg.unValidIcon}</div>))}
                </div>
                <div className="edit-row-item">
                    <div className="edit-label-form">Chiết khấu: </div>
                    <div className="edit-input-form">
                        <input type="number" name="discount" value={dataForm.discount} onChange={() => handleOnChangeForm(event)} disabled={!edit && !add} />
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
export default React.memo(PromotionForm)