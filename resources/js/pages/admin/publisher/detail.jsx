import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import PublisherForm from "../../../components/form/PublisherForm";
const PublisherDetail = ({ action }) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/nha-xuat-ban')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN NHÀ XUẤT BẢN</div>
                </Modal.Header>
                <Modal.Body>
                    <PublisherForm id =  {param.id} action={action}></PublisherForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(PublisherDetail)