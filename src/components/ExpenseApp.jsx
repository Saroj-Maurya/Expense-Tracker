import BudgetComponent from "./common/BudgetComponent";
import totalbudgetimage from "../assets/TotalBudget.svg";
import totalexpenseimage from "../assets/TotalExpense.svg";
import remainingbudgetimage from "../assets/RemainingBudget.svg";
import Button from "./common/Button";
import allexpenses from "../assets/AllExpenses.svg";
import foodicons from "../assets/foodicons.svg";
import groceriesicons from "../assets/groceriesicons.svg";
import travelicons from "../assets/travelicons.svg";
import healthicons from "../assets/healthicons.svg";
import searchicon from "../assets/search.svg";

function ExpenseApp() {
  return (
    <>
      <div className="main-container">
        <h1 className="user-heading">Hello Saroj Maurya</h1>
        <div className="budget-container">
          <BudgetComponent
            title={"Total Budget"}
            budget="0"
            image={totalbudgetimage}
          />
          <BudgetComponent
            title={"Total Expense"}
            budget="0"
            image={totalexpenseimage}
          />
          <BudgetComponent
            title={"Remaining Budget"}
            budget="0"
            image={remainingbudgetimage}
          />
        </div>
        <div>
          <div>
            <img src={searchicon} alt="" />
            <input type="search" />
          </div>
          <Button title={"All Expense"} image={allexpenses} />
          <Button title={"Food & Drinks"} image={foodicons} />
          <Button title={"Groceries"} image={groceriesicons} />
          <Button title={"Travel"} image={travelicons} />
          <Button title={"Health"} image={healthicons} />
          <Button title={"Add Budget"} image={healthicons} />
          <Button title={"Add Expense"} image={healthicons} />
        </div>
      </div>
    </>
  );
}

export default ExpenseApp;
