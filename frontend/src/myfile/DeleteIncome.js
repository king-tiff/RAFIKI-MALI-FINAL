import React, { useState } from 'react';

function DeleteIncomeRecordButton({ incomeId }) {
  const [confirmation, setConfirmation] = useState(false);
//get userId from dASHBOard to delete
  const handleConfirmation = () => {
    const userConfirmed = window.confirm('Are you sure you want to delete this record?');
    const incomeId = row.id

    if (userConfirmed) {
      deleteIncomeRecord();
    } else {
      alert('Deletion canceled.');
    }
  };

  const deleteIncomeRecord = () => {
    fetch(`http://localhost:2003/api/income-delete/${incomeId}`, {
      method: 'DELETE', // Use the DELETE HTTP method
      headers: {
        'Content-Type': 'application/json', // Adjust the content type as needed
        // Add any other headers your API requires
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data as needed (e.g., show a success message)
        alert('Record deleted successfully!');
      })
      .catch((error) => {
        // Handle errors from the API request (e.g., show an error message)
        alert('Error deleting record: ' + error.message);
      });
  };

  return (
    <div>
      <button onClick={handleConfirmation}>Delete Record</button>
    </div>
  );
}

export default DeleteIncomeRecordButton;
