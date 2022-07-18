import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

import Spin from '../components/Spinner';
import NotRegisters from '../components/NotRegisters';

// Services
import FileService from '../services/FileService';

const Files = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getFiles = () => {
    setLoading(true);

    FileService.getFiles()
      .then((response) => {
        setItems(response.data.files);
        setLoading(false);
      })
      .catch(() => {
        toastr.error('Hubo un error al obtener los personajes.');
        setLoading(false);
      });
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      {loading && <Spin />}

      {!loading && (
        <>
          {items && items.length > 0 ? (
            <Container>
              <Row className="mt-4">
                <Col>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => {
                        return (
                          <tr key={item.file + item.lines.text}>
                            <td>{item.file}</td>
                            <td>{item.lines.text}</td>
                            <td>{item.lines.number}</td>
                            <td>{item.lines.text}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          ) : (
            <NotRegisters />
          )}
        </>
      )}
    </>
  );
};

export default Files;
