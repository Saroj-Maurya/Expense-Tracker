import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID for generating unique expense IDs

const AddExpenseModal = ({
  handleExpenseDataChange,
  addExpenseNotify,
  closeAddExpenseModal,
}) => {
  const [newExpense, setNewExpense] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [initialDate, setInitialDate] = useState("");

  const getTodayDate = () => {
    const d = new Date();
    const date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    setInitialDate(`${year}-${month < 10 ? "0" + month : month}-${date}`);
  };

  useEffect(() => getTodayDate(), []);

  const validate = () => {
    const errors = {};
    if (!newExpense) {
      errors.newExpense = "Please enter an expense.";
    }
    if (!category) {
      errors.category = "Please select a category.";
    }
    if (!date) {
      errors.date = "Please select a date.";
    }
    if (!newExpenseAmount) {
      errors.newExpenseAmount = "Please enter an amount.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called form");
    if (validate()) {
      handleExpenseDataChange({
        id: uuidv4(),
        description: newExpense,
        category,
        date,
        amount: Number(newExpenseAmount),
      });
      closeAddExpenseModal();
      addExpenseNotify();
    }
  };

  return (
    <>
      <div className="opacity" onClick={closeAddExpenseModal}></div>
      <div className="add-expense-container">
        <span className="close-button" onClick={closeAddExpenseModal}>
          &times;
        </span>
        <div className="add-expense-header-container">
          <h2 className="add-expense-heading">Add Expense</h2>
        </div>
        <form className="add-expense-form">
          <div className="add-expense-div">
            <label htmlFor="expense-name">Expense Name</label>
            <input
              type="text"
              id="expense-name"
              placeholder="Expense Name"
              value={newExpense}
              onChange={(e) => setNewExpense(e.target.value)}
            />
            {errors.newExpense && (
              <span style={{ color: "red" }}>{errors.newExpense}</span>
            )}
          </div>
          <div className="add-expense-div">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              max={initialDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
          </div>
          <div className="add-expense-div">
            <label htmlFor="options">Category</label>
            <select
              id="options"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option value="Food & Drinks">Food & Drinks</option>
              <option value="Groceries">Groceries</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
            </select>
            {errors.category && (
              <span style={{ color: "red" }}>{errors.category}</span>
            )}
          </div>
          <div className="add-expense-div">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter Amount"
              value={newExpenseAmount}
              min={0}
              onChange={(e) => setNewExpenseAmount(e.target.value)}
            />
            {errors.newExpenseAmount && (
              <span style={{ color: "red" }}>{errors.newExpenseAmount}</span>
            )}
          </div>
          <button onClick={handleSubmit} className="submit-button">
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
};

export default AddExpenseModal;
