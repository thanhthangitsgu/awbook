import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import CategoryForm from "../../../components/form/CategoryForm";
const CategoryDetail = ({ action }) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/the-loai')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN THỂ LOẠI</div>
                </Modal.Header>
                <Modal.Body>
                    <CategoryForm idCategory = {param.id} action = {action}></CategoryForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(CategoryDetail)