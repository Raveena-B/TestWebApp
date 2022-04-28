import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
      <Card className="text-center" style={{ backgroundColor: "#B1C500 " }}>
        <Card.Body>
          <Card.Title>Test Web App</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-muted"
          style={{ backgroundColor: "#393939 " }}
        >
          @copyRight 2022
        </Card.Footer>
      </Card>
    </div>
  );
};

export default footer;
