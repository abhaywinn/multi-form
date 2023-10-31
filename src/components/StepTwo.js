import React from "react";

const StepTwo = ({ numbers, setNumbers, removeNumberField }) => {
  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  return (
    <div>
      <h2>Step 2: Input Numbers</h2>
      {numbers.map((num, index) => (
        <div key={index} className="form-group">
          <input
            type="text"  // Change the input type to "text"
            className="form-control"
            placeholder="Enter a number"
            value={num}
            onChange={(e) => handleNumberChange(index, e.target.value)}
          />
          <button
            className="btn btn-danger"
            onClick={() => removeNumberField(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="btn btn-primary"
        onClick={() => setNumbers([...numbers, '0'])}
      >
        Add Number
      </button>
    </div>
  );
}

export default StepTwo;
