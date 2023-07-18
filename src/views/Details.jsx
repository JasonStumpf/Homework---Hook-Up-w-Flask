import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import { ListGroup } from 'react-bootstrap';
import '../index.css'

const Details = (props) => {
  console.log(props)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>View Stats</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.p.name} Stats:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><h2>Attack: {props.p.attack}</h2></ListGroup.Item>
            <ListGroup.Item><h2>Defense: {props.p.defense}</h2></ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Details;