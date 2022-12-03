import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import BookTitleForm from "../../../components/form/BookTitleForm";
const BookDetail = ({ action }) => {
    const param = useParams();
    const navigate = useNavigate();
    const [showmodal, setshowmodal] = useState(true);
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
                    <BookTitleForm action={action} id={param.id}></BookTitleForm>
                </Modal.Body>
            </Modal>
        </div>

    )
}
export default React.memo(BookDetail);