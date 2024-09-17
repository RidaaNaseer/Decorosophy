import React from "react";
import { Card, Image } from "react-bootstrap";

const CustomerResponse = ({ imageSrc, Feedback, name, position, company }) => {
  return (
    <Card
      className=" border-light-subtle  position-relative pt-5 "
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        borderTop: "10px solid ",
      }}
    >
      <Card.Body className="d-flex flex-column align-items-center">
        <Image
          src={imageSrc}
          alt={name}
          roundedCircle
          style={{
            width: "100px",
            height: "100px",
            border: "5px solid white",
            position: "absolute",
            top: -50,
            left: "43%",
            zIndex: 10,

            backgroundColor: "white",
          }}
        />
        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.2rem",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          {Feedback}
        </p>
        <div className="text-muted text-center">
          <strong>{name}</strong>
          <br />
          <span>{position}</span>
          <br />
          <span>{company}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerResponse;
