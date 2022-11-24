import SearchBar from "../../../components/SearchBar"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAPI from "../../../store/api/allAPI";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function UserAdmin() {
    const [filter, setfilter] = useState("");
    const listUser = useSelector(state => state.user);
    const [allUser, setalluser] = useState([]);
    const dispatch = useDispatch();

    
    useEffect(() => {
        listUser.res && setalluser(listUser.res.data);
    }, [listUser])

    const deleteOne = (id) =>{
        dispatch(allAPI.userAPI.deleteOne(id));
        dispatch(allAPI.userAPI.getAll());
    }

    return (
        <div className="page-admin-main">
            <div className="page-admin-content">
                <div className="header">
                    <div className="title">QUẢN LÝ NGƯỜI DÙNG</div>
                    <div className="button-add">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            Thêm
                        </button>
                    </div>
                    <SearchBar></SearchBar>
                </div>
                <div className="bodyadmin">
                    <table className="table">
                        <thead>
                            <tr className="tb-header">
                                <th>#</th>
                                <th>Họ lót</th>
                                <th>Tên</th>
                                <th>Giới tính</th>
                                <th>Email</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUser.status && allUser.data.map((element, index) => {
                                return (
                                    <tr className={index % 2 ? "row-ood" : "row-even"} key = {index}>
                                        <td>{index + 1}</td>
                                        <td>{element.surname}</td>
                                        <td>{element.name}</td>
                                        <td>{element.gender}</td>
                                        <td>{element.email}</td>
                                        <td className="action">
                                            <Link to={'/admin/user/'+  element.id}><button className="btn-detail">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                </svg>
                                            </button>
                                            </Link>
                                            <button className="btn-delete" onClick={() => deleteOne(element.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                </svg>
                                            </button>
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