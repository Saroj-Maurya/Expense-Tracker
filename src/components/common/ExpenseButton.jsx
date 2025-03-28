import React from "react";

const ExpenseButton = ({
  title,
  image,
  setSelectedCategory,
  setFilteredTransactions,
  expenses,
  selectedCategory,
}) => {
  const handleCategoryFilter = (category) => {
    const categoryExpenses = [...expenses];
    console.log(categoryExpenses);
    console.log(category);
    setSelectedCategory(category);
    if (category === "All Expense") {
      setFilteredTransactions(expenses);
    } else {
      setFilteredTransactions(
        categoryExpenses.filter((expense) => expense.category === category)
      );
    }
  };
  return (
    <button
      className={`expense-button ${ selectedCategory === title ? "selected" : "" }`}
      onClick={() => handleCategoryFilter(title, expenses)}
    >
      <img src={image} alt="" className="button-image" />
      {title}
    </button>
  );
};

export default ExpenseButton;
