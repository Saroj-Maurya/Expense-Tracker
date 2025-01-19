import React, { useEffect, useState } from "react";
import EditExpenseModal from "./EditExpenseModal";
import DeleteExpenseModal from "./DeleteExpenseModal";
import editimage from "../assets/edit.svg";
import deleteimage from "../assets/delete.svg";

const ExpenseTable = ({
  filteredTransactions,
  handleEditTransaction,
  handleDeleteClick,
  setFilteredTransactions,
}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    setFilteredTransactions(filteredTransactions);
  }, [filteredTransactions]);

  // Open the Edit Modal
  const handleEditClick = (expense) => {
    setSelectedExpense(expense);
    setEditModalOpen(true);
  };

  // Close the Edit Modal
  const closeEditModal = () => {
    setSelectedExpense(null);
    setEditModalOpen(false);
  };

  // Open the Delete Modal
  const handleDeleteClickModal = (expense) => {
    setSelectedExpense(expense);
    setDeleteModalOpen(true);
  };

  // Close the Delete Modal
  const closeDeleteModal = () => {
    setSelectedExpense(null);
    setDeleteModalOpen(false);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    handleDeleteClick(selectedExpense.id); // Call the parent's delete handler
    closeDeleteModal(); // Close the modal
  };

  return (
    <div className="expense-container">
      <table>
        <thead>
          <tr>
            <th className="table-header">Sr.</th>
            <th className="table-header">Expense</th>
            <th className="table-header">Amount</th>
            <th className="table-header">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="table-data">
          {filteredTransactions.map((item, index) => (
            <tr key={index} className="table-row">
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>₹{Number(item.amount).toLocaleString()}</td>
              <td>
                <div className="table-button-div">
                  <button
                    type="button"
                    className="table-button"
                    onClick={() => handleEditClick(item)}
                  >
                    <img src={editimage} alt="" />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="table-button"
                    onClick={() => handleDeleteClickModal(item)}
                  >
                    <img src={deleteimage} alt="" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Expense Modal */}
      {isEditModalOpen && selectedExpense && (
        <EditExpenseModal
          selectedTransaction={selectedExpense}
          handleEditTransaction={(updatedExpense) => {
            handleEditTransaction(updatedExpense); // Update expense in parent
            closeEditModal(); // Close modal after update
          }}
          editModalClose={closeEditModal}
        />
      )}

      {/* Delete Expense Modal */}
      {isDeleteModalOpen && selectedExpense && (
        <DeleteExpenseModal
          closeDeleteModal={closeDeleteModal}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ExpenseTable;
