import React from "react";

const StepOne = ({ firstName, lastName, setFirstName, setLastName }) =>{
  const isAlphabetic = (input) => /^[A-Za-z]+$/.test(input);

  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    if (isAlphabetic(inputValue) || inputValue === '') {
      setFirstName(inputValue);
    }
  };

  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    if (isAlphabetic(inputValue) || inputValue === '') {
      setLastName(inputValue);
    }
  };

  return (
    <div>
      <h2>Step 1: Users Information</h2>
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;
