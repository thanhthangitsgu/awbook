import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import PromotionForm from "../../../components/form/PromotionForm";
const PositionDetail = ({ action }) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/chuc-vu')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN CHỨC VỤ</div>
                </Modal.Header>
                <Modal.Body>
                    <PositionForm id={param.id} action={action}></PositionForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(PositionDetail)