import React, { useState } from "react";

const AddBudgetModal = ({ budget, handleBudgetChange, closeBudgetModal, addBudgetNotify }) => {
  const [inputBudget, setInputBudget] = useState(budget || 0); // Initialize with passed budget
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!inputBudget) {
      errors.inputBudget = "Please enter an amount.";
    } else if (!/^\d+$/.test(inputBudget)) {
      errors.inputBudget = "Please enter a valid number.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleBudgetChange(Number(inputBudget)); // Ensure budget is passed as a number
      setInputBudget("");
      closeBudgetModal();
      addBudgetNotify();
    }
  };

  return (
    <>
      <div className="opacity" onClick={closeBudgetModal}></div>
      <div className="add-budget-container">
        <span className="close-button" onClick={closeBudgetModal}>
          &times;
        </span>
        <div className="add-budget-header-container">
          <h2 className="add-budget-heading">Add Budget</h2>
        </div>
        <form onSubmit={handleSubmit} className="add-budget-form">
          <div className="add-budget-div">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              min={0}
              value={inputBudget}
              onChange={(e) => setInputBudget(e.target.value)}
            />
            {errors.inputBudget && (
              <span style={{ color: "red" }}>{errors.inputBudget}</span>
            )}
          </div>
          <button type="submit" className="submit-button">Submit Budget</button>
        </form>
      </div>
    </>
  );
};

export default AddBudgetModal;
