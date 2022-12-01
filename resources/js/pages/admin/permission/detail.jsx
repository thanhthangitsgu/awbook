import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import PermissionForm from "../../../components/form/PermissionForm";
const PermissionDetail = ({ action }) => {
    const [showmodal, setshowmodal] = useState(true);
    const param = useParams();
    console.log(param);
    const navigate = useNavigate();
    const handleOnHide = () => {
        setshowmodal(!showmodal);
        setTimeout(() => {
            navigate('/admin/quyen')
        }, 500)
    }
    return (
        <div className="modal-container">
            <Modal show={showmodal} onHide={handleOnHide} centered size="lg" >
                <Modal.Header closeButton>
                    <div className="title">THÔNG TIN QUYỀN</div>
                </Modal.Header>
                <Modal.Body>
                    <PermissionForm id={param.id} action={action}></PermissionForm>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default React.memo(PermissionDetail)