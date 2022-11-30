import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import AuthorForm from "../../../components/AuthorForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AuthorDetail = ({action}) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/tac-gia')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN ĐẦU SÁCH</div>
                </Modal.Header>
                <Modal.Body>
                    <AuthorForm idAuthor = {param.id} action={action}></AuthorForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(AuthorDetail)