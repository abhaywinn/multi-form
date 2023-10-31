import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [pivotIndex, setPivotIndex] = useState(-1);

  const handleNext = () => {
    if (step === 1) {
      if (firstName.trim() === '' || lastName.trim() === '') {
        alert('Both fields are required.');
      } else {
        setStep(2);
      }
    } else if (step === 2) {
      if (numbers.some(isNaN)) {
        alert('All fields must be filled.');
      } else {
        const pivot = calculatePivotIndex(numbers);
        setPivotIndex(pivot);
        setStep(3);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculatePivotIndex = (number) => {
    const totalSum = number.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < number.length; i++) {
      if (leftSum === totalSum - leftSum - number[i]) {
        return i;
      }
      leftSum += number[i];
    }

    return -1; 
  };

  const removeNumberField = (index) => {
    const updatedNumbers = [...numbers];
    updatedNumbers.splice(index, 1);
    setNumbers(updatedNumbers);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Multi Step Form for Pivot Index Calculation</div>
            <div className="card-body">
              {step === 1 && (
                <StepOne
                  firstName={firstName}
                  lastName={lastName}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                />
              )}
              {step === 2 && (
                <StepTwo
                  numbers={numbers}
                  setNumbers={setNumbers}
                  removeNumberField={removeNumberField}
                />
              )}
              {step === 3 && (
                <StepThree
                  firstName={firstName}
                  lastName={lastName}
                  numbers={numbers}
                  pivotIndex={pivotIndex}
                />
              )}
              <div className="text-center mt-3">
                {step > 1 && (
                  <button className="btn btn-primary float-left" onClick={handlePrevious}>
                    Previous
                  </button>
                )}
                {step < 3 && (
                  <button className="btn btn-primary float-right" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
