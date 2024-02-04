import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <>
      <Card
        style={{
          color: "white",
          backgroundColor: "black",
          width: "20rem",
          padding: "2px",
          boxShadow: "5px 4px 8px rgba(99, 74, 74, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          style={{ width: "19.3rem", height: "25rem" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>Rate : {movie.rate}</Card.Text>
          <Button variant="danger" onClick={handleModalShow}>
            Trailer
          </Button>
        </Card.Body>
      </Card>

      <Modal
        className="modal-dialog modal-lg"
        show={showModal}
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{movie.description}</p>
          <iframe
            width="750"
            height="500"
            src={movie.trailer}
            title="My App video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieCard;
