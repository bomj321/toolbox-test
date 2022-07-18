import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/components/Spin.css';

const Spin = () => {
  return (
    <div className="div-spin">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Spin;
