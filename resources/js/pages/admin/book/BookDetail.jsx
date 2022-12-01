import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import BookForm from "../../../components/form/BookForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allAPI from "../../../store/api/allAPI";
const BookDetail = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [showmodal, setshowmodal] = useState(true);
    const categoryReducer = useSelector(state => state.category);
    const authorReducer = useSelector(state => state.author);
    const listCategory = categoryReducer.listCategory.res ? categoryReducer.listCategory.res : [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allAPI.categoryAPI.getAll());
        dispatch(allAPI.authorAPI.getAll());
    }, [])
    const handleOnHide = () => {
        setshowmodal(false);
        setTimeout(() => {
            navigate('/admin/dau-sach');
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" id="book-detail">
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN ĐẦU SÁCH</div>
                </Modal.Header>
                <Modal.Body>
                    <BookForm listCategory={listCategory} listAuthor={authorReducer.listAuthor}></BookForm>
                </Modal.Body>
            </Modal>
        </div>

    )
}
export default React.memo(BookDetail);