// Alert.jsx
import React from 'react';

const Alert = () => {
  return (
    <div className="page-container" style={{ fontSize: "32px" }}>
      <div style={alertStyle}>
        <p>알림창 내용이 여기에 들어갑니다.</p>
      </div>
    </div>
  );
};

const alertStyle = {
  border: '2px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  textAlign: 'center',
};

export default Alert;
