import React from 'react';

function ExpensesModal({ isOpen, closeModal, selectedExpense }) {
  // Function to handle editing (you can replace this with your own editing logic)
  const handleEdit = () => {
    // Implement your editing logic here
    // For example, you can navigate to an edit page with the selectedExpense data
    // history.push(`/edit-expense/${selectedExpense.id}`);
  };

  // Function to handle deleting (you can replace this with your own deleting logic)
  const handleDelete = () => {
    // Implement your deleting logic here
    // For example, you can send a delete request to your API
    // and then update the UI by removing the deleted expense from the data array
    // and closing the modal.
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Expense Details</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Expense ID: {selectedExpense.id}</p>
            <p>Expense Source: {selectedExpense.expensesDetails}</p>
            <p>Total Amount: {selectedExpense.amount}</p>
            <p>Date: {selectedExpense.date}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesModal;
