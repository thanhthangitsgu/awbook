import React from "react"
import SearchBar from "../../../components/SearchBar";
import { Link, Outlet } from "react-router-dom";
import svg from "../../../components/svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import allAPI from "../../../store/api/allAPI";
const BillPage = () => {
    const [filter, setfilter] = useState("");
    const dispatch = useDispatch();
    const billReducer = useSelector(state => state.bill).listBill;
    const [listBill, setlistBill] = useState("");
    const [dataBill, setdataBill] = useState("");
    //Gọi API lấy  danh sách
    useEffect(() => {
        dispatch(allAPI.billAPI.getAll());
    }, []);

    //Lấy danh sách vào list
    useEffect(() => {
        billReducer.data && billReducer.data.data && setlistBill(billReducer.data.data);
    }, [billReducer])

    //Lấy danh sách từ list vào data
    useEffect(() => {
        setdataBill(listBill);
    }, [listBill]);

    //Xử lí lọc
    useEffect(() => {
        let data = listBill;
        data = filter != "" ? data.filter(item => item.name.includes(filter)) : listBill;
        setdataBill(data);
    }, [filter])

    const handleDelete = (id) => {
        dispatch(allAPI.billAPI.deleteOne(id));
    }

    return (
        <div className="page-admin-main">
            <Outlet></Outlet>
            <div className="page-admin-content">
                <div className="header">
                    <div className="title">QUẢN LÝ HÓA ĐƠN</div>
                    <div className="button-add">
                        <Link to="add"><button>{svg.btnAdd} Thêm</button></Link>
                    </div>
                    <div className="button-filter">
                        <select name="" id="">
                            <option value="1">Khách hàng</option>
                            <option value="1">Nhân viên</option>
                        </select>
                    </div>
                    <SearchBar filter={filter} setfilter={setfilter}></SearchBar>
                </div>
                <div className="bodyadmin">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="col-first">#</th>
                                <th>Khách hàng</th>
                                <th>Phương thức thanh toán</th>
                                <th>Đơn vị vận chuyển</th>
                                <th>Mã vận chuyển</th>
                                <th>Tổng tiền</th>
                                <th className="col-last">Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataBill.length > 0 && dataBill.map((element, index) => {
                                return (
                                    <tr className={index % 2 ? "row-ood" : "row-even"} key={index}>
                                        <td className="col-first">{element.id}</td>
                                        <td>{element.cusotomer_id}</td>
                                        <td>{element.payment_id}</td>
                                        <td>{element.partner_id}</td>
                                        <td>{element.ship_code}</td>
                                        <td>{element.total_cost}</td>
                                        <td className="col-last">
                                            <div className="action">
                                                <Link to={'/admin/hoa-dpn/' + element.id}><button className="btn-detail" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </button></Link>
                                                <button className="btn-delete" onClick={() => handleDelete(element.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default React.memo(BillPage)