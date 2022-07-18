import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Template = ({ children }) => {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Container fluid className="m-2">
          <Navbar.Brand>ToolBox Test</Navbar.Brand>
        </Container>
      </Navbar>
      <Col>{children}</Col>
    </Container>
  );
};

export default Template;
