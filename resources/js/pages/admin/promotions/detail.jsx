import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import PromotionForm from "../../../components/form/PromotionForm";
const PromotionDetail = ({ action }) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/khuyen-mai')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN KHUYẾN MÃI</div>
                </Modal.Header>
                <Modal.Body>
                    <PromotionForm id={param.id} action={action}></PromotionForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(PromotionDetail)