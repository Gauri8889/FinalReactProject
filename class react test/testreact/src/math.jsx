import React, { useState } from 'react';

function Math() {
  const [number, setNumber] = useState('');
  const [square, setSquare] = useState(null);
  const [cube, setCube] = useState(null);

  const handleCalculate = () => {
    if (number === '') return;
    const num = parseFloat(number);
    setSquare(num * num);
    setCube(num * num * num);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Square and Cube Calculator</h1>
      
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
      <button
        onClick={handleCalculate}
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
      >
        Calculate
      </button>
      
      {square !== null && (
        <div style={{ marginTop: '20px' }}>
          <p>Square of {number}: {square}</p>
        </div>
      )}
      
      {cube !== null && (
        <div style={{ marginTop: '10px' }}>
          <p>Cube of {number}: {cube}</p>
        </div>
      )}
    </div>
  );
}

export default Math;