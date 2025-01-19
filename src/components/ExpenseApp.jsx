import BudgetComponent from "./common/BudgetComponent";
import totalbudgetimage from "../assets/TotalBudget.svg";
import totalexpenseimage from "../assets/TotalExpense.svg";
import remainingbudgetimage from "../assets/RemainingBudget.svg";
import allexpenses from "../assets/AllExpenses.svg";
import foodicons from "../assets/foodicons.svg";
import groceriesicons from "../assets/groceriesicons.svg";
import travelicons from "../assets/travelicons.svg";
import healthicons from "../assets/healthicons.svg";
import searchicon from "../assets/search.svg";
import { useState } from "react";
import AddButton from "./common/AddButton";
import ExpenseButton from "./common/ExpenseButton";
import addimage from "../assets/addimage.svg";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import ExpenseTable from "./ExpenseTable";

function ExpenseApp() {
  const [budget, setBudget] = useState(0); // State to manage the budget
  const [expenses, setExpenses] = useState([]); // State to manage the expenses list
  const [isBudgetModalOpen, setBudgetModalOpen] = useState(false);
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState(expenses);
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  // Toggle Budget Modal
  const handleBudgetModalClick = () => {
    setBudgetModalOpen(!isBudgetModalOpen);
  };

  // Budget success notification
  const addBudgetNotify = () => {
    console.log("Budget Added Successfully!");
  };

  // Toggle Expense Modal
  const handleExpenseModalClick = () => {
    setExpenseModalOpen(!isExpenseModalOpen);
  };

  // Handle new expense data
  const handleExpenseDataChange = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setFilteredTransactions((prevExpenses) => [...prevExpenses, newExpense]);
    console.log({ newExpense });
  };

  // Calculate total expenses by summing amounts from all expense objects
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Calculate remaining budget
  const remainingBudget = budget - totalExpense;

  // Expense success notification
  const addExpenseNotify = () => {
    console.log("Expense Added Successfully!");
  };

  // Filter expenses based on the selected category
  // const handleCategoryFilter = (category) => {
  //   setSelectedCategory(category);
  //   if (category === "All") {
  //     setFilteredTransactions(expenses);
  //   } else {
  //     setFilteredTransactions(
  //       expenses.filter((expense) => expense.category === category)
  //     );
  //   }
  // };

  const handleEditTransaction = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setFilteredTransactions((prevTransactions) =>
      prevTransactions.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    handleCategoryFilter(selectedCategory);
  };

  const handleDeleteClick = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
    setFilteredTransactions((prevFiltered) =>
      prevFiltered.filter((expense) => expense.id !== expenseId)
    );
    handleCategoryFilter(selectedCategory);
  };

  return (
    <>
      <div className="main-container">
        <h1 className="user-heading">Hello Saroj Maurya</h1>
        <div className="budget-container">
          <BudgetComponent
            title="Total Budget"
            budget={budget}
            image={totalbudgetimage}
          />
          <BudgetComponent
            title="Total Expense"
            budget={totalExpense} // Show the dynamic total expense
            image={totalexpenseimage}
          />
          <BudgetComponent
            title="Remaining Budget"
            budget={remainingBudget}
            image={remainingbudgetimage}
          />
        </div>
        <div className="button-container">
          <div className="search-engine">
            <img src={searchicon} alt="Search" />
            <input type="search" placeholder="Search" />
          </div>

          <ExpenseButton
            title="All Expense"
            image={allexpenses}
            // onClick={() => handleCategoryFilter("All")}
            setSelectedCategory={setSelectedCategory}
            setFilteredTransactions={setFilteredTransactions}
            expenses={expenses}
          />
          <ExpenseButton
            title="Food & Drinks"
            image={foodicons}
            // onClick={() => handleCategoryFilter("Food & Drinks")}
            setSelectedCategory={setSelectedCategory}
            setFilteredTransactions={setFilteredTransactions}
            expenses={expenses}
          />
          <ExpenseButton
            title="Groceries"
            image={groceriesicons}
            // onClick={() => handleCategoryFilter("Groceries")}
            setSelectedCategory={setSelectedCategory}
            setFilteredTransactions={setFilteredTransactions}
            expenses={expenses}
          />
          <ExpenseButton
            title="Travel"
            image={travelicons}
            // onClick={() => handleCategoryFilter("Travel")}
            setSelectedCategory={setSelectedCategory}
            setFilteredTransactions={setFilteredTransactions}
            expenses={expenses}
          />
          <ExpenseButton
            title="Health"
            image={healthicons}
            // onClick={() => handleCategoryFilter("Health")}
            setSelectedCategory={setSelectedCategory}
            setFilteredTransactions={setFilteredTransactions}
            expenses={expenses}
          />
          <AddButton
            buttonname="Add Budget"
            image={addimage}
            handelModalChange={handleBudgetModalClick}
          />
          <AddButton
            buttonname="Add Expense"
            image={addimage}
            handelModalChange={handleExpenseModalClick}
          />
        </div>
        <div>
          <ExpenseTable
            filteredTransactions={filteredTransactions}
            handleEditTransaction={handleEditTransaction}
            handleDeleteClick={handleDeleteClick}
            setFilteredTransactions= {setFilteredTransactions}
          />
        </div>

        {isBudgetModalOpen && (
          <AddBudgetModal
            budget={budget}
            handleBudgetChange={setBudget}
            closeBudgetModal={handleBudgetModalClick}
            addBudgetNotify={addBudgetNotify}
          />
        )}

        {isExpenseModalOpen && (
          <AddExpenseModal
            handleExpenseDataChange={handleExpenseDataChange}
            addExpenseNotify={addExpenseNotify}
            closeAddExpenseModal={handleExpenseModalClick}
          />
        )}
      </div>
    </>
  );
}

export default ExpenseApp;
