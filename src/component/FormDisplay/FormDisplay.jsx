import React, { useState } from 'react';

function FormDisplay() {
  const [values, setValues] = useState(Array(6).fill(''));
  const [displayedValues, setDisplayedValues] = useState([]);

  const handleChange = (index, e) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayedValues(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  style={{ margin: '5px' , display: 'flex'}}>
        {values.map((value, index) => (
          <div key={index}>
            <input
              type="text"
              maxLength="1"
              value={value}
              placeholder="input"
              onChange={(e) => handleChange(index, e)}

              style={{ margin: '5px' , display: 'flex' , width: '50px', padding: '10px' }}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: '20px' , display: 'flex'}}>
        <strong>Display Values:</strong>
        {displayedValues.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}

export default FormDisplay;
