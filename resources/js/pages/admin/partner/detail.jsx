import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import PartnerForm from "../../../components/form/PartnerForm";
const PartnerDetail = ({ action }) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/doi-tac')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN ĐỐI TÁC</div>
                </Modal.Header>
                <Modal.Body>
                    <PartnerForm id={param.id} action={action}></PartnerForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(PartnerDetail)