import React from "react";

const StepTwo = ({ numbers, setNumbers, removeNumberField }) => {
  return (
    <div>
      <h2>Step 2: Users Input Numbers</h2>
      {numbers.map((num, index) => (
        <div className="row">
          <div key={index} className="form-group">
            <input
              type="number"
              className="form-control col-md-12"
              placeholder="Enter a number"
              value={num}
              onChange={(e) => {
                const updatedNumbers = [...numbers];
                updatedNumbers[index] = parseFloat(e.target.value);
                setNumbers(updatedNumbers);
              }}
            />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-danger"
              onClick={() => removeNumberField(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        className="btn btn-info"
        onClick={() => setNumbers([...numbers, 0])}
      >
        Add Number
      </button>
    </div>
  );
}

export default StepTwo;
