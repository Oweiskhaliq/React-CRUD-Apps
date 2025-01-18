import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const ModelBox = ({ title, body_text, btn_text, userId, action }) => {
  const { show, setShow, deleteUser, findUserById } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleMethod = () => {
    if (action === "delete") {
      deleteUser(userId);
      setShow(false);
    } else {
      findUserById(userId);
      setShow(false);
      navigate("/React-CRUD-Apps/user-form");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body_text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMethod}>
            {btn_text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelBox;
