import React, { useEffect, useState } from "react";

const EditExpenseModal = ({ selectedTransaction, handleEditTransaction, editModalClose }) => {
    const [editTransaction, setEditedTransaction] = useState(selectedTransaction.description);
    const [editDate, setEditedDate] = useState(selectedTransaction.date);
    const [editCategory, setEditedCategory] = useState(selectedTransaction.category);
    const [editAmount, setEditedAmount] = useState(selectedTransaction.amount);
  
    const [errors, setErrors] = useState({});
    const [initialdate, setInitialdate] = useState("");
  
    const getTodayDate = () => {
      const d = new Date();
      const date = d.getDate() < 9 ? "0" + d.getDate() : d.getDate();
      const month = d.getMonth() + 1;
      const year = d.getFullYear();
    //   setInitialdate(`${year}-${month}-${date}`);
      setInitialdate(`${year}-${month < 10 ? "0" + month : month}-${date}`);
    };
  
    useEffect(() => getTodayDate(), []);
  
    const validate = () => {
      const errors = {};
      if (!editTransaction) {
        errors.newExpense = "Please Enter Expense.";
      }
      if (!editCategory) {
        errors.category = "Please Select Category";
      }
      if (!editDate) {
        errors.date = "Please Select Date";
      }
      if (!editAmount) {
        errors.newExpenseAmount = "Please Enter Amount";
      }
      setErrors(errors);
      return Object.keys(errors).length === 0; // Return true if no errors
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validate()) {
        handleEditTransaction({
          id: selectedTransaction.id,
          description: editTransaction,
          category: editCategory,
          date: editDate,
          amount: Number(editAmount),
        });
        editModalClose();
      }
    };
  
    return (
      <>
        {/* <div className="overlay" onClick={editModalClose}></div> */}
        <div className="edit-expense-container">
          <span className="close-button" onClick={editModalClose}>
            &times;
          </span>
          <div className="edit-expense-header-container">
            <h2 className="edit-expense-heading">Edit Expense</h2>
          </div>
          <form onSubmit={handleSubmit} className="edit-expense-form">
            <div className="edit-expense-div">
              <label htmlFor="expense-name">Expense Name</label>
              <input
                type="text"
                name="expense-name"
                placeholder="Expense Name"
                id="expense-name"
                value={editTransaction}
                onChange={(e) => setEditedTransaction(e.target.value)}
              />
              {errors.newExpense && (
                <span style={{ color: "red" }}>{errors.newExpense}</span>
              )}
            </div>
            <div className="edit-expense-div">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name=""
                id="date"
                max={initialdate}
                value={editDate}
                onChange={(e) => setEditedDate(e.target.value)}
              />
              {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
            </div>
            <div className="edit-expense-div">
              <label htmlFor="options">Category</label>
              <select
                name="options"
                id="options"
                value={editCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
              >
                <option value="">Choose an category</option>
                <option value="Food & Drinks">Food And Drinks</option>
                <option value="Groceries">Groceries</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
              </select>
              {errors.category && (
                <span style={{ color: "red" }}>{errors.category}</span>
              )}
            </div>
            <div className="edit-expense-div">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter Amount"
                value={editAmount}
                min={0}
                onChange={(e) => setEditedAmount(e.target.value)}
              />
              {errors.newExpenseAmount && (
                <span style={{ color: "red" }}>{errors.newExpenseAmount}</span>
              )}
            </div>
            <button className="submit-button" onClick={handleSubmit}>Edit Expense</button>
          </form>
        </div>
      </>
    );
  };
  
  export default EditExpenseModal;
  