import React from 'react';
import { MehOutlined } from '@ant-design/icons';

import '../styles/components/NotRegisters.css';

const NotRegisters = () => {
  return (
    <div className="div-not-registers">
      <MehOutlined />
      <h2 className="mt-2">No hay registros</h2>
    </div>
  );
};

export default NotRegisters;
