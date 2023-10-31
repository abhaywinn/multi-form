import React from 'react';

const stepThree = ({ firstName, lastName, numbers, pivotIndex }) => {
  return (
    <div>
      <h2>Step 3: Users Results</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Pivot Index: {pivotIndex !== -1 ? pivotIndex : '-1'}</p>
    </div>
  );
}

export default stepThree;