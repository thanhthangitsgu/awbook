import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import { Modal } from "react-bootstrap";
import UserForm from "../../../components/form/UserForm";
const UserDetail = (action) => {
    const param = useParams();
    const navigate = useNavigate();
    const [showmodal, setshowmodal] = useState(true);

    const handleOnHide = () => {
        setshowmodal(false);
        setTimeout(() => {
            navigate('/admin/nguoi-dung');
        }, 500)
    }

    return (
        <Modal show={showmodal} onHide={handleOnHide} centered>
            <Modal.Header closeButton>
                <div className="title">THÔNG TIN NGƯỜI DÙNG</div>
            </Modal.Header>
            <Modal.Body>
                <UserForm idUser={param.id} action={action} handleOnHide = {handleOnHide}></UserForm>
            </Modal.Body>
        </Modal>
    )
}
export default React.memo(UserDetail)